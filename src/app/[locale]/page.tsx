'use client';
import { useTranslations } from 'next-intl';
import styles from './main.module.css'; // Import the CSS module
import {
  FacebookIcon,
  InstagramIcon,
} from 'next-share';

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
        <div >
          <a href="https://l.facebook.com/l.php?u=https%3A%2F%2Finstagram.com%2Fautobant.md%3Figshid%3DM2RkZGJiMzhjOQ%253D%253D%26fbclid%3DIwAR1AAi_SOYlUbCee1Js23Rf5qjfyaOAjy1nl6YoW_ZOCAvCyCE70bBso7AE&h=AT2ZEhalXhdauTZZ_brz6IclSpaIyb51zpN6Nh0eOtSKm3-DNP4_bl3LMnklSZtrTqtIEby1tPrVJKfspue8gdDQTa6wIdG_32WNHIeLhU1QxpeUkMq_KfDUzMODIU6KtlVae7h5z-E">
            <InstagramIcon />
          </a>
          <a href="https://www.facebook.com/autobantMD?mibextid=LQQJ4d">
            <FacebookIcon />
          </a>
        </div>
      </div>
    </div>
  );
}
