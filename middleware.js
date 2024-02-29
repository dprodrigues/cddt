import { NextResponse } from 'next/server';
import { authentication } from 'next-firebase-auth-edge/lib/next/middleware';
import { authConfig } from './config/server';

const PUBLIC_PATHS = [
  '/',
  '/about',
  '/auth/signup',
  '/auth/login',
  '/auth/reset-password',
];

function redirectToHome(request) {
  const url = request.nextUrl.clone();
  url.pathname = '/app';
  url.search = '';
  return NextResponse.redirect(url);
}

function redirectToLogin(request) {
  if (PUBLIC_PATHS.includes(request.nextUrl.pathname)) {
    return NextResponse.next();
  }

  const url = request.nextUrl.clone();
  url.pathname = '/auth/login';
  url.search = `redirect=${request.nextUrl.pathname}${url.search}`;
  return NextResponse.redirect(url);
}

export async function middleware(request) {
  return authentication(request, {
    loginPath: '/api/login',
    logoutPath: '/api/logout',
    apiKey: authConfig.apiKey,
    cookieName: authConfig.cookieName,
    cookieSerializeOptions: authConfig.cookieSerializeOptions,
    cookieSignatureKeys: authConfig.cookieSignatureKeys,
    serviceAccount: authConfig.serviceAccount,
    handleValidToken: async (_, headers) => {
      if (PUBLIC_PATHS.includes(request.nextUrl.pathname)) {
        return redirectToHome(request);
      }

      return NextResponse.next({ request: { headers } });
    },
    handleInvalidToken: async () => {
      return redirectToLogin(request);
    },
    handleError: async (error) => {
      console.error('Unhandled authentication error', { error });
      return redirectToLogin(request);
    },
  });
}

export const config = {
  matcher: [
    '/',
    '/((?!_next|favicon.ico|api|.*\\.).*)',
    '/api/login',
    '/api/logout',
  ],
};
