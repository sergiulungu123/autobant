import { Button, Tooltip } from '@mui/material';
import React, { useState } from 'react';

import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { nord } from 'react-syntax-highlighter/dist/esm/styles/prism';

// import styles from './style/css.module.css'

const PrismaInstall = ({tooltipText}, {element}, {code}, {language}) => {
  const [selectedButton, setSelectedButton] = useState(null);

  const handleButtonClick = (buttonName) => {
    setSelectedButton(buttonName);
  };

  const buttonStyle = {
    selected: {
      backgroundColor: '#d8d8d2',
      color: '#ffffff',
    },
    pressed: {
      backgroundColor: 'rgb(46, 52, 64)',
      transition: 'background-color 1s',
    },
  }

  return (
    <div>
      <SyntaxHighlighter language={language} style={nord}>
        {code}
      </SyntaxHighlighter>
      <Tooltip  title={selectedButton === element ? tooltipText : ''}>
        <Button
          onClick={() => handleButtonClick(element)}
          style={{
            ...buttonStyle.selected,
            ...(selectedButton === element ? buttonStyle.pressed : {}),
          }}
        >
          {element}
        </Button>
      </Tooltip>
    </div>
  );
};

export default PrismaInstall;
