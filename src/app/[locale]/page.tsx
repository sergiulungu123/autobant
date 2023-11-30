'use client';
import { useTranslations } from 'next-intl';
import { FaTwitter, FaFacebook, FaInstagram } from 'react-icons/fa';
import styles from './main.module.css'; // Import the CSS module

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
        <FaFacebook />
        <FaInstagram />
      </div>
    </div>
  );
}
