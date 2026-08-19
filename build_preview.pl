use strict;
use warnings;
use MIME::Base64;

sub slurp {
    my ($path) = @_;
    open my $fh, '<:raw', $path or die "Can't read $path: $!";
    local $/;
    my $content = <$fh>;
    close $fh;
    return $content;
}

# Usage: perl build_preview.pl <source-html-relative-to-dist_extract> <output-file>
# e.g.   perl build_preview.pl index.html preview.html
#        perl build_preview.pl terms-and-conditions/index.html preview-terms.html
my ($src, $out) = @ARGV;
$src //= 'index.html';
$out //= 'preview.html';

my $dist = 'dist_extract';
my $html = slurp("$dist/$src");

my @css_files = $html =~ m{<link rel="stylesheet" href="(/_astro/[^"]+\.css)">}g;
my ($script_src) = $html =~ m{<script type="module" src="(/_astro/hoisted\.[^"]+\.js)"></script>};

my $css = join("\n", map { slurp("$dist$_") } @css_files);

my $inline_script = '';
if ($script_src) {
    my $outer_js = slurp("$dist$script_src");
    my ($inner_src) = $outer_js =~ m{^import"(\./hoisted\.[^"]+\.js)";};
    if ($inner_src) {
        (my $inner_path = $inner_src) =~ s{^\.}{};
        my $inner_js = slurp("$dist/_astro$inner_path");
        $outer_js =~ s{^import"\./hoisted\.[^"]+\.js";}{};
        $inline_script = "$inner_js\n$outer_js";
    } else {
        $inline_script = $outer_js;
    }
}

my $inter_b64   = encode_base64(slurp('public/fonts/inter-var.woff2'), '');
my $manrope_b64 = encode_base64(slurp('public/fonts/manrope-var.woff2'), '');
my $logo_b64    = encode_base64(slurp('public/logo.png'), '');
my $logo_glow_b64 = encode_base64(slurp('public/img/logo-glow.png'), '');
my $favicon_b64 = encode_base64(slurp('public/favicon.png'), '');
my $og_image_b64 = encode_base64(slurp('public/img/og-image.png'), '');

$html =~ s{(?:<link rel="stylesheet" href="/_astro/[^"]+\.css">\s*)+}{<style>$css</style>};

if ($script_src) {
    my $quoted_src = quotemeta($script_src);
    $html =~ s{<script type="module" src="$quoted_src"></script>}{<script>$inline_script</script>};
}

$html =~ s{/fonts/inter-var\.woff2}{data:font/woff2;base64,$inter_b64}g;
$html =~ s{/fonts/manrope-var\.woff2}{data:font/woff2;base64,$manrope_b64}g;
$html =~ s{/logo\.png}{data:image/png;base64,$logo_b64}g;
$html =~ s{/img/logo-glow\.png}{data:image/png;base64,$logo_glow_b64}g;
$html =~ s{/favicon\.png}{data:image/png;base64,$favicon_b64}g;
$html =~ s{https://www\.bbk-marketing\.com/img/og-image\.png}{data:image/png;base64,$og_image_b64}g;
$html =~ s{<link rel="preload"[^>]*>}{}g;

# Each Artifact is a single isolated HTML file, not a real multi-page site —
# an absolute-path link like href="/" or href="/terms-and-conditions", or an
# in-page anchor like href="#about" that only exists on the homepage, has
# nowhere real to resolve to inside a *different* artifact and shows as
# "not found" or does nothing. The real Astro source keeps plain relative
# links throughout — these substitutions only patch the throwaway preview
# HTML files, and differ depending on which page is being built:

my $homepage_url = 'https://claude.ai/code/artifact/0c515fa7-217f-4c3c-b8c3-6d048bae2396';
my %legal_artifact_urls = (
    '/terms-and-conditions' => 'https://claude.ai/code/artifact/deb041c1-f70c-4cf5-ad32-bdd877080c8b',
    '/privacy-policy'       => 'https://claude.ai/code/artifact/5d5208b4-aa74-4ec3-9863-3d87abe4b7c2',
    '/data-protection'      => 'https://claude.ai/code/artifact/a54caad2-080c-4ec4-a5b6-991d65910a6c',
    '/cookie-policy'        => 'https://claude.ai/code/artifact/d550e5da-8793-40de-91b3-4f0094c61ff5',
);
my @homepage_anchors = qw(clinical-research-marketing business-growth patient-recruitment our-process about contact);

if ($src eq 'index.html') {
    # Homepage: logo scrolls to top of this same page; legal footer links
    # open their own artifacts in a new tab (already target="_blank" in
    # source) since they're genuinely a different page/document.
    $html =~ s{(<a href=)"/"( class="brand")}{$1"#"$2};
    for my $path (keys %legal_artifact_urls) {
        my $quoted = quotemeta($path);
        $html =~ s{href="$quoted"}{href="$legal_artifact_urls{$path}"}g;
    }
} else {
    # Legal pages: logo and every in-page nav anchor (#about, #contact, …)
    # need to point back at the homepage artifact + the matching fragment,
    # in the SAME tab (this is "go back to the site", not "open a new doc").
    $html =~ s{(<a href=)"/"( class="brand")}{$1"$homepage_url"$2};
    for my $anchor (@homepage_anchors) {
        $html =~ s{href="#\Q$anchor\E"}{href="$homepage_url#$anchor"}g;
    }
    # And the four legal footer links become same-tab links to the sibling
    # legal artifacts (including a link to the current page itself, same as
    # a real site's footer would show identically on every page) — drop the
    # target="_blank"/rel="noopener" pair used on the homepage version since
    # this is meant to feel like normal same-site navigation, not a new doc.
    for my $path (keys %legal_artifact_urls) {
        my $quoted = quotemeta($path);
        $html =~ s{href="$quoted" target="_blank" rel="noopener"}{href="$legal_artifact_urls{$path}"}g;
    }
}

open my $fh_out, '>:raw', $out or die $!;
print $fh_out $html;
close $fh_out;

print "Built $out: " . length($html) . " bytes\n";
print "  css files: @css_files\n";
print "  script: " . ($script_src // '(none)') . "\n";
