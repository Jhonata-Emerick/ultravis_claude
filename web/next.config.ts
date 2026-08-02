import type { NextConfig } from 'next';
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin('./src/i18n/request.ts');

// NOTE: This app used to rely on a `proxy.ts` (Next.js middleware) to
// rewrite locale-less URLs to the `/en` segment required by the
// `app/[locale]` routing, refresh the Supabase session and redirect
// protected/auth routes. Cloudflare Workers (via @opennextjs/cloudflare)
// does not currently support Node.js middleware, so that logic was
// removed and replaced with the declarative rewrites/redirects below
// plus per-route auth checks in Server Components. If a new top-level
// route is added under `app/[locale]`, add a matching rewrite here.
const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: '/pricing',
        destination: 'https://ansvisor.com/pricing',
        permanent: false,
      },
      ];
  },
  async rewrites() {
    return [
      { source: '/', destination: '/en' },
      { source: '/dashboard', destination: '/en/dashboard' },
      { source: '/dashboard/:path*', destination: '/en/dashboard/:path*' },
      { source: '/sign-in', destination: '/en/sign-in' },
      { source: '/sign-up', destination: '/en/sign-up' },
      { source: '/forgot-password', destination: '/en/forgot-password' },
      { source: '/forgot-password/:path*', destination: '/en/forgot-password/:path*' },
      { source: '/reset-password', destination: '/en/reset-password' },
      { source: '/reset-password/:path*', destination: '/en/reset-password/:path*' },
      { source: '/invite/:token', destination: '/en/invite/:token' },
      ];
  },
};

export default withNextIntl(nextConfig);
