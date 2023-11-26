import {Pathnames} from 'next-intl/navigation';

export const locales = ['ro', 'ru'] as const;

export const pathnames = {
  '/': '/',
  '/pathnames': {
    ro: '/pathnames',
    ru: '/pfadnamen'
  }
} satisfies Pathnames<typeof locales>;

export type AppPathnames = keyof typeof pathnames;