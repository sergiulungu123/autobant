import createMiddleware from 'next-intl/middleware';
import {pathnames, locales} from './config';

export default createMiddleware({
  defaultLocale: 'ro',
  locales,
  pathnames
});

export const config = {
  // Match only internationalized pathnames
  matcher: ['/', '/(ro|ru)/:path*']
};