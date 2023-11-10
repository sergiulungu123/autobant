import 'bootstrap/dist/css/bootstrap.min.css';

import * as React from 'react';

import cls from '../style.module.css';
import { useTranslation } from 'react-i18next';

function Main() {
  const { t, i18n } = useTranslation();

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };
  return (
    <div>
      <button
        class="btn btn-light"
        onClick={() => changeLanguage('ro')}
      >
        eng
      </button>
      <button
        class="btn btn-light"
        onClick={() => changeLanguage('rus')}
      >
        rus
      </button>
      <div className={cls.app}>
        <p className={cls.loading}> {t('progress')}</p>
      </div>
    </div>
  );
}
export default Main;
