import { useState } from 'react';
import {
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  IconButton,
  Collapse,
  Button,
  Modal,
  Box,
} from '@mui/material';
import LanguageButton from './ui/language-button';
import FavoriteIcon from '@mui/icons-material/Favorite';
import cls from '../style.module.css';
import OrderForm from './ui/order-form';
// Existing component structure...
import { useTranslation } from 'react-i18next';
function Main() {
  const { t, i18n } = useTranslation();
  const [roLanguage, setRoLanguage] = useState(true);

  const changeLanguage = (language) => {
    language === 'ro' ? setRoLanguage(true) : setRoLanguage(false);
    console.log(roLanguage);
    i18n.changeLanguage(language);
  };
  const [basicOpen, setBasicOpen] = useState(false);
  const [basicPremium, setPremumOpen] = useState(false);

  const handleBasicOpen = () => {
    setBasicOpen(true);
  };

  const handleBasicClose = () => {
    setBasicOpen(false);
  };

  const handlePremumOpen = () => {
    setPremumOpen(true);
  };

  const handlePremiumClose = () => {
    setPremumOpen(false);
  };

  return (
    <div className={cls.main}>
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
      <div className={cls.container}>
        <div className={cls.cards}>
          <Card className={cls.card} sx={{ maxWidth: 345 }}>
            <CardHeader title="Premium" />
            <CardMedia
              component="img"
              height="194"
              image="https://www.woweffect.md/uploads/cars/1679604952.jpg"
              alt="Paella dish"
            />
            <CardContent>
              <Typography variant="body2" color="text.secondary">
                {t('descriptionOfItem')}
              </Typography>
            </CardContent>
            <CardActions disableSpacing>
              <Button onClick={handleBasicOpen}>{t('order')}</Button>
            </CardActions>
            <Modal open={basicOpen} onClose={handleBasicClose}>
              <Box
                sx={{
                  height: '700px',
                  width: '700px',
                  bgcolor: 'background.paper',
                  boxShadow: 24,
                  p: 4,
                }}
              >
                <OrderForm t={t} type={'Premium'} />
              </Box>
            </Modal>
          </Card>
          <Card className={cls.card} sx={{ maxWidth: 345 }}>
            <CardHeader title="Basic" />
            <CardMedia
              component="img"
              height="194"
              image="https://www.woweffect.md/uploads/cars/1679604952.jpg"
              alt="Paella dish"
            />
            <CardContent>
              <Typography variant="body2" color="text.secondary">
                {t('descriptionOfItem')}
              </Typography>
            </CardContent>
            <CardActions disableSpacing>
              <Button onClick={handlePremumOpen}>{t('order')}</Button>
            </CardActions>
            <Modal
              open={basicPremium}
              onClose={handlePremiumClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-dÍescription"
            >
              <Box
                sx={{
                  height: '700px',
                  width: '700px',
                  bgcolor: 'background.paper',
                  boxShadow: 24,
                  p: 4,
                }}
              >
                <OrderForm t={t} type={'Basic'} />
              </Box>
            </Modal>
          </Card>
        </div>
      </div>
    </div>
  );
}
export default Main;
