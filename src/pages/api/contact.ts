import type { APIRoute } from 'astro';
import { buildInternalAuthHeaders } from '../../lib/internal-auth';

/**
 * The "Request a Consultation" form (CTAConsultationForm.astro) posts
 * here. Previously that form only opened a mailto: link client-side —
 * nothing reached the Sales Hub unless the visitor's own mail client was
 * configured and they actually hit send. This signs the submission
 * server-side and forwards it to the Sales Hub, same pattern as
 * api/self-assessment.ts.
 */
export const prerender = false;

export const POST: APIRoute = async ({ request }) => {
  const secret = process.env.INTERNAL_SERVICE_SECRET;
  const salesHubUrl = process.env.SALES_HUB_URL;

  if (!secret || !salesHubUrl) {
    console.error('Missing INTERNAL_SERVICE_SECRET or SALES_HUB_URL env var.');
    return new Response(JSON.stringify({ error: 'Server misconfiguration' }), { status: 500 });
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return new Response(JSON.stringify({ error: 'Invalid JSON body' }), { status: 400 });
  }

  const rawBody = JSON.stringify(body);
  const headers = buildInternalAuthHeaders(secret, rawBody);

  try {
    const upstream = await fetch(`${salesHubUrl}/api/webhooks/website-contact`, {
      method: 'POST',
      headers,
      body: rawBody,
    });
    const text = await upstream.text();
    return new Response(text, {
      status: upstream.status,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Failed to forward contact-form submission to the Sales Hub:', error);
    return new Response(JSON.stringify({ error: 'Unable to submit right now. Please try again shortly.' }), {
      status: 502,
    });
  }
};
