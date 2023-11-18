import 'bootstrap/dist/css/bootstrap.min.css';

import Button from '@mui/material-next/Button';
import { React } from 'react';

function LanguageButton({ roLanguage, changeLanguage, fVariant, sVariant, langIndex  }) {

  return (
    <div>
      <Button
        onClick={() => changeLanguage(langIndex)}
        variant={roLanguage ? fVariant : sVariant}
      >
        {langIndex}
      </Button>
    </div>
  );
}
export default LanguageButton;
