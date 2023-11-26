import { useTranslation } from 'next-i18next';
import Head from 'next/head';
import Image from 'next/image';
import { FaTwitter, FaFacebook, FaInstagram } from 'react-icons/fa';

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    height: '100vh',
    fontFamily: 'Arial, sans-serif',
  },
  content: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '80%',
    margin: '0 auto',
  },
  photo: {
    flex: '1',
    maxWidth: '50%',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
  text: {
    flex: '1',
    maxWidth: '50%',
    textAlign: 'center',
    padding: '20px',
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
  const { t } = useTranslation('Home');

  return (
    <div>
      <Head>
        <title>Coming Soon</title>
      </Head>
      <div style={styles.container}>
        <div style={styles.content}>
          <div style={styles.photo}>
            <Image
              src="/your-image.jpg" // Replace with your image URL
              alt="Photo"
              width={400}
              height={300}
            />
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
