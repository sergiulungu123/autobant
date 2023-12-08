import { useTranslations } from 'next-intl';
import styles from './main.module.css'; // Import the CSS module
import Link from "next-intl/link";
import React from 'react';

export default function ComingSoon() {
  const t = useTranslations('Home');

  return (
    <div className={styles.imagecontainer}>
      <div className={styles.imagewrapper}>
        <img src="/1.jpg" alt="Autobant" />
      </div>
      <div className={styles.centeredText}>
        <h3>{t('under-construction')}</h3>
        <h3>{t('title')}</h3>
        <div></div>
      </div>
      <Link href="/" locale="ro">
        In english
      </Link>{' '}
      |{' '}
      <Link href="/" locale="ru">
        In Finnish
      </Link>
    </div>
  );
}
