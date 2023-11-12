import './index.css';
import './index.css';

import App from './App';
import { I18nextProvider } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import React from 'react';
import ReactDOM from 'react-dom';
import common_ro from './language/ro/translation.json'
import common_rus from './language/ru/translation.json';
import i18n from 'i18next';
import reportWebVitals from './reportWebVitals';

i18n
  .use(LanguageDetector)
  .init({
    resources: {
      ro: {
        translation: common_ro,
      },
      ru: {
        translation: common_rus,
      },
    },
    fallbackLng: 'ro',
    debug: true,
    interpolation: {
      escapeValue: false,
    },
  });
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <I18nextProvider i18n={i18n}>
      <App />
    </I18nextProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
