import { Button, Tooltip } from '@mui/material';
import React, { useState } from 'react';

import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { nord } from 'react-syntax-highlighter/dist/esm/styles/prism';

const Settings = () => {
  const [selectedButton, setSelectedButton] = useState(null);
  const code = '"dev": "nest start --watch --preserveWatchOutput",';
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
    watch: (
      <div>
        This option enables watch mode. 
        This means that the NestJS CLI will watch for changes to the application's source code and automatically restart the application when changes are made.
      </div>
    ),
    preserveWatchOutput: (
      <div>
        This option tells the NestJS CLI to keep outdated console output in watch mode instead of clearing the screen. 
        This can be useful for debugging purposes.
      </div>
    ),
  };

  return (
    <div>
      <SyntaxHighlighter language={language} style={nord}>
        {code}
      </SyntaxHighlighter>
      <Tooltip title={selectedButton === 'watch' ? tooltipText.watch : ''}>
        <Button
          onClick={() => handleButtonClick('watch')}
          style={{
            ...buttonStyle.selected,
            ...(selectedButton === 'watch' ? buttonStyle.pressed : {}),
          }}
        >
          --watch
        </Button>
      </Tooltip>
      <Tooltip
        title={
          selectedButton === 'preserveWatchOutput'
            ? tooltipText.preserveWatchOutput
            : ''
        }
      >
        <Button
          onClick={() => handleButtonClick('preserveWatchOutput')}
          style={{
            ...buttonStyle.selected,
            ...(selectedButton === 'preserveWatchOutput'
              ? buttonStyle.pressed
              : {}),
          }}
        >
          --preserveWatchOutput
        </Button>
      </Tooltip>
    </div>
  );
};

export default Settings;
