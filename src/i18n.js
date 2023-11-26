import { getRequestConfig } from 'next-intl/server';

export default getRequestConfig(async ({ locale }) => ({
  messages: (
    await (locale === 'ro'
      ? // When using Turbopack, this will enable HMR for `en`
        import('../messages/ro.json')
      : import(`../messages/${locale}.json`))
  ).default,
}));
