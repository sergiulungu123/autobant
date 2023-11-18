import { React, useState } from 'react';

import Box from '@mui/material/Box';
import { Button } from '@mui/material';
// eslint-disable-next-line no-unused-vars
import LanguageButton from './ui/language-button';
import Modal from '@mui/material/Modal';
import OrderForm from './ui/order-form';
import cls from '../style.module.css';
import { useTranslation } from 'react-i18next';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

function Main() {
  const { t, i18n } = useTranslation();
  const [roLanguage, setRoLanguage] = useState(true);

  const changeLanguage = (language) => {
    language === 'ro' ? setRoLanguage(true) : setRoLanguage(false);
    console.log(roLanguage);
    i18n.changeLanguage(language);
  };

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <div>
        <LanguageButton
          roLanguage={roLanguage}
          changeLanguage={changeLanguage}
          fVariant={'filled'}
          sVariant={'elevated'}
          langIndex={'ro'}
        >
          {' '}
        </LanguageButton>
        <LanguageButton
          roLanguage={roLanguage}
          changeLanguage={changeLanguage}
          fVariant={'elevated'}
          sVariant={'filled'}
          langIndex={'ru'}
        >
          {' '}
        </LanguageButton>
      </div>
      <div className={cls.app}>
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">{t('card-text')}</p>
            <Button onClick={handleOpen}>{t('order')}</Button>
            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-dÍescription"
            >
              <Box sx={style}>
                <OrderForm t={t}/>
              </Box>
            </Modal>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Main;
