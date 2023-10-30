import { Button, Tooltip } from '@mui/material';
import React, { useState } from 'react';

import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { nord } from 'react-syntax-highlighter/dist/esm/styles/prism';

const NpmInstall = () => {
  const [selectedButton, setSelectedButton] = useState(null);
  const code = 'npm install -g @nestjs/cli';
  const language = 'javascript';

  const handleButtonClick = (buttonName) => {
    setSelectedButton(buttonName);
  };

  const buttonStyle = {
    selected: {
      backgroundColor: '#d8d8d2',
      color : '#ffffff',
    },
    pressed: {
      backgroundColor: 'rgb(46, 52, 64)',
      transition: 'background-color 1s',
    },
  };

  const tooltipText = {
    g: (
      <div>
        It's means the packet will be installed globally.
        <br />
        <strong>Advantages:</strong>
        <br />
        - The package can be used without having to reinstall it.
        <br />
        - The package can be used by all users of the system.
        <br />
        - Installing globally can speed up the launch of applications that use the package.
        <br />
        <br />
        <strong>Disadvantages:</strong>
        <br />
        - Takes up more disk space.
        <br />
        - May lead to conflicts with other packages.
        <br />
        - It can be more difficult to track which packages are installed globally.
      </div>
    ),
    cli: (
      <div>
        This means that a tool will be installed that will help you work with the socket through the command line.
      </div>
    ),
  };

  return (
    <div>
      <SyntaxHighlighter language={language} style={nord}>
        {code}
      </SyntaxHighlighter>
      <Tooltip title={selectedButton === 'g' ? tooltipText.g : ''}>
        <Button
          onClick={() => handleButtonClick('g')}
          style={{
            ...buttonStyle.selected,
            ...(selectedButton === 'g' ? buttonStyle.pressed : {}),
          }}
        >
          -g
        </Button>
      </Tooltip>
      <Tooltip title={selectedButton === 'cli' ? tooltipText.cli : ''}>
        <Button
          onClick={() => handleButtonClick('cli')}
          style={{
            ...buttonStyle.selected,
            ...(selectedButton === 'cli' ? buttonStyle.pressed : {}),
          }}
        >
          cli
        </Button>
      </Tooltip>
    </div>
  );
};

export default NpmInstall;