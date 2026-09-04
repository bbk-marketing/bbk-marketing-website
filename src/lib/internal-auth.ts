import { createHmac, randomUUID } from 'node:crypto';

/**
 * Signs a request the same way the Sales Hub's own
 * server/security/internal-auth.ts verifies it: hex HMAC-SHA256 of
 * `${timestamp}.${rawBody}` using the shared INTERNAL_SERVICE_SECRET.
 * INTERNAL_SERVICE_SECRET must be set to the exact same value in both
 * services' env vars.
 */
export function buildInternalAuthHeaders(secret: string, rawBody: string): HeadersInit {
  const timestamp = Math.floor(Date.now() / 1000).toString();
  const signature = createHmac('sha256', secret).update(`${timestamp}.${rawBody}`).digest('hex');

  return {
    'Content-Type': 'application/json',
    'X-BBK-Service': 'bbk-clinical-web',
    'X-BBK-Timestamp': timestamp,
    'X-BBK-Signature': signature,
    'Idempotency-Key': randomUUID(),
  };
}
