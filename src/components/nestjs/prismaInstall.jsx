import { Button, Tooltip } from '@mui/material';
import React, { useState } from 'react';

import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { nord } from 'react-syntax-highlighter/dist/esm/styles/prism';

// import styles from './style/css.module.css'

const PrismaInstall = () => {
  const [selectedButton, setSelectedButton] = useState(null);
  const code = 'npm install -D prisma';
  const language = 'javascript';

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
  };

  const tooltipText = {
    D: (
      <div>
        It's means the packet will be installed as a development dependency. This means the Prisma wwill be installed in the node_module directory, but it will not  be included in production build of app. <br/>
        <strong>Benefits</strong>
        <br/>
        - it keeps your production lean and fast <br/>
        - it makes it easier to share project with others, because they will not need to instal Prisma separately <br/>
        - it can hepl to prevent conflicts with other production dependencies <br/>
      </div>
    ),
  };

  return (
    <div>
      <SyntaxHighlighter language={language} style={nord}>
        {code}
      </SyntaxHighlighter>
      <Tooltip  title={selectedButton === 'D' ? tooltipText.D : ''}>
        <Button
          onClick={() => handleButtonClick('D')}
          style={{
            ...buttonStyle.selected,
            ...(selectedButton === 'D' ? buttonStyle.pressed : {}),
          }}
        >
          -D
        </Button>
      </Tooltip>
    </div>
  );
};

export default PrismaInstall;
