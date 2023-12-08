'use client';
import { useTranslations } from 'next-intl';
import { useRouter } from 'next/navigation';
import styles from './main.module.css'; // Import the CSS module
import { FacebookIcon, InstagramIcon } from 'next-share';
import { useState } from 'react'; // Import useState

export default function ComingSoon() {
  const t = useTranslations('Home');
  const router = useRouter();
  const [selectedLanguage, setSelectedLanguage] = useState(''); // State to manage selected language

  const redirectToSite = (language: string) => {
    if (language === 'ro') {
      router.push('/ro');
    } else if (language === 'ru') {
      router.push('/ru');
    }
  };

  const handleLanguageChange = (event: { target: { value: any } }) => {
    const selected = event.target.value;
    setSelectedLanguage(selected); // Update selected language based on selection
    redirectToSite(selected); // Redirect when a language is selected
  };

  return (
    <div className={styles.imagecontainer}>
      {/* ... existing code ... */}
      <div className={styles.imagewrapper}>
        <img src="/1.jpg" alt="Autobant" />
      </div>
      <div className={styles.centeredText2}>
      <select className={styles.selectlanguage} value={selectedLanguage} onChange={handleLanguageChange}>
          <option value="">{t('language')}</option>
          <option value="ro">RO</option>
          <option value="ru">RU</option>
        </select>

      </div>
      <div className={styles.centeredText}>
        <h3>{t('under-construction')}</h3>
        <h3>{t('title')}</h3>
        <a href="https://l.facebook.com/l.php?u=https%3A%2F%2Finstagram.com%2Fautobant.md%3Figshid%3DM2RkZGJiMzhjOQ%253D%253D%26fbclid%3DIwAR1AAi_SOYlUbCee1Js23Rf5qjfyaOAjy1nl6YoW_ZOCAvCyCE70bBso7AE&h=AT2ZEhalXhdauTZZ_brz6IclSpaIyb51zpN6Nh0eOtSKm3-DNP4_bl3LMnklSZtrTqtIEby1tPrVJKfspue8gdDQTa6wIdG_32WNHIeLhU1QxpeUkMq_KfDUzMODIU6KtlVae7h5z-E">
            <InstagramIcon />
          </a>
          <a href="https://www.facebook.com/autobantMD?mibextid=LQQJ4d">
            <FacebookIcon />
          </a>
      </div>
    </div>
  );
}
