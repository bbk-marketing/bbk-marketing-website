export interface Faq {
  question: string;
  answer: string;
}

/**
 * Pulls Q&A pairs out of a post's raw markdown body — never a separate
 * source of truth, so the FAQPage schema can never drift from what a reader
 * actually sees. Matches the one FAQ format every article uses: an
 * "## Frequently Asked Questions" section (always last) containing "### "
 * questions each followed by a single answer paragraph.
 */
export function extractFaqs(rawMarkdown: string): Faq[] {
  const sectionMatch = rawMarkdown.match(/## Frequently Asked Questions\n([\s\S]*)$/);
  if (!sectionMatch) return [];

  const section = sectionMatch[1];
  const faqs: Faq[] = [];
  const pattern = /### (.+?)\n+([\s\S]+?)(?=\n### |\n## |$)/g;
  let match: RegExpExecArray | null;
  while ((match = pattern.exec(section)) !== null) {
    const question = match[1].trim();
    const answer = match[2].trim().replace(/\s+/g, ' ');
    if (question && answer) faqs.push({ question, answer });
  }
  return faqs;
}
