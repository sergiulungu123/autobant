'use client';
import { useRouter } from 'next/navigation';
import { useTranslation } from 'next-i18next';

export default function Home() {
  const router = useRouter();
  const { t } = useTranslation();

  const changeLanguage = (language: string) => {
    router.push(`/${language}`);
  };
  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24">
      <button onClick={() => changeLanguage('en')}>English</button>
      <button onClick={() => changeLanguage('es')}>Spanish</button>
      <h1>{t('welcome')}</h1>
      <p>{t('greeting', { name: 'John Doe' })}</p>
    </div>
  );
}
