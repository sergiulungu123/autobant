import Button from '@mui/material-next/Button';

const LanguageButton = ({
  roLanguage,
  changeLanguage,
  fVariant,
  sVariant,
  langIndex
}:{
  roLanguage: boolean,
  changeLanguage: any,
  fVariant: string,
  sVariant: string,
  langIndex: string


}) => {
  return (
    <div>
      {/* <Button
        onClick={() => changeLanguage(langIndex)}
        variant={roLanguage ? fVariant : sVariant}
      >
        {langIndex}
      </Button> */}
    </div>
  );
};
export default LanguageButton;
