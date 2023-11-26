import { useTranslation } from 'next-i18next';
import { useTranslations } from 'next-intl';
import Head from 'next/head';
import Image from 'next/image';
import { FaTwitter, FaFacebook, FaInstagram } from 'react-icons/fa';

import { CSSProperties } from 'react';

interface Styles {
  container: CSSProperties;
  content: CSSProperties;
  photo: CSSProperties;
  text: CSSProperties;
  socialIcons: CSSProperties;
  icon: CSSProperties;
}

const styles: Styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    height: '10vh',
    fontFamily: 'Arial, sans-serif',
  },
  content: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '90%',
    margin: '0 auto',
  },
  photo: {
    maxWidth: '60%', // sau width: '50%' în funcție de cum dorești să fie afișată imaginea
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    order: 2,
  },
  text: {
    flex: '1',
    maxWidth: '100%',
    textAlign: 'center',
    padding: '24%',
    backgroundColor: '#f5f5f5',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
  socialIcons: {
    marginTop: '20px',
    display: 'flex',
    justifyContent: 'center',
    fontSize: '24px',
  },
  icon: {
    margin: '0 10px',
    cursor: 'pointer',
  },
};

export default function ComingSoon() {
  const t = useTranslations('Home');

  return (
    <div>
      <Head>
        <title>Coming Soon</title>
      </Head>
      <div style={styles.container}>
        <div style={styles.content}>
          <div style={styles.photo}>
            <img src="/1.jpg"></img>
          </div>
          <div style={styles.text}>
            <div>{t('title')}</div>
            <div style={styles.socialIcons}>
              <FaTwitter style={styles.icon} />
              <FaFacebook style={styles.icon} />
              <FaInstagram style={styles.icon} />
              {/* Add more social icons if needed */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
