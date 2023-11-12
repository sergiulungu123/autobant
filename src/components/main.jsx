import 'bootstrap/dist/css/bootstrap.min.css';

import  { React, useState } from 'react';

import Button from '@mui/material-next/Button';
import cls from '../style.module.css';
import { useTranslation } from 'react-i18next';

function Main() {
  const { t, i18n } = useTranslation();
  const[roLanguage, setRoLanguage] = useState(true)

  const changeLanguage = (language) => {
    language === "ro" ? setRoLanguage(true) : setRoLanguage(false)
    console.log(roLanguage)
    i18n.changeLanguage(language);
  };
  return (
    <div>
      <Button
        onClick={() => changeLanguage('ro')}
        variant={roLanguage ? "filled" : "elevated"}
      >
        ro
      </Button>
      <Button
        onClick={() => changeLanguage('ru')}
        variant={roLanguage ? "elevated" : "filled"}
      >
        ru
      </Button>
      <div className={cls.app}>
        <p className={cls.loading}> {t('progress')}</p>
      </div>
    </div>
  );
}
export default Main;
