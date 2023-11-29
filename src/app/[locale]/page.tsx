'use client';
import { useTranslations } from 'next-intl';
import { FaTwitter, FaFacebook, FaInstagram } from 'react-icons/fa';

import { CSSProperties } from 'react';
import styled from 'styled-components';
interface Styles {
  container: CSSProperties;
  content: CSSProperties;
  photo: CSSProperties;
  left: CSSProperties;
  right: CSSProperties;
  socialIcons: CSSProperties;
  icon: CSSProperties;
}
const ImageContainer = styled.div`
  width: 100%; /* Set the width of the container */
  height: 100%; /* Set the height of the container */
  overflow: hidden; /* Hide overflow if image exceeds container size */
`;

const Image = styled.img`
  max-width: 120%; /* Ensure the image doesn't exceed the container's width */
  max-height: 120%; /* Ensure the image doesn't exceed the container's height */
  display: block; /* Remove default inline spacing */
  width: auto; /* Override any inherited width */
  height: auto; /* Override any inherited height */
`;

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
  },
  photo: {
    width: '50',
    float: 'left', // sau width: '50%' în funcție de cum dorești să fie afișată imaginea
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
  left: {
    width: '50%',
    height: '99vh',
    float: 'left',
    textAlign: 'center',
    backgroundColor: '#f5f5f5',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },
  right: {
    width: '50%',
    height: '99vh',
    float: 'left',
    textAlign: 'center',
    backgroundColor: '#f5f5f5',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
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
      <div style={styles.content}>
        <div style={styles.left}>
          <div>{t('title')}</div>
          <div style={styles.socialIcons}>
            <FaFacebook style={styles.icon} />
            <FaInstagram style={styles.icon} />
            {/* Add more social icons if needed */}
          </div>
        </div>
        <div style={styles.right}>
          <ImageContainer>
            <Image src="/1.jpg" alt="Your Image" />
          </ImageContainer>
        </div>
      </div>
    </div>
  );
}
