import type { APIRoute } from 'astro';
import { buildInternalAuthHeaders } from '../../lib/internal-auth';

/**
 * The only dynamic route on this otherwise-static site (see astro.config.mjs
 * — output: 'hybrid'). Signs the visitor's completed Strategic
 * Self-Assessment with INTERNAL_SERVICE_SECRET server-side (the browser must
 * never see that secret) and forwards it to the Sales Hub's
 * /api/webhooks/self-assessment, which creates the Lead, records consent,
 * and emails the visitor their results.
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
    const upstream = await fetch(`${salesHubUrl}/api/webhooks/self-assessment`, {
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
    console.error('Failed to forward self-assessment submission to the Sales Hub:', error);
    return new Response(JSON.stringify({ error: 'Unable to submit right now. Please try again shortly.' }), {
      status: 502,
    });
  }
};
