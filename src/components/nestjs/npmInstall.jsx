import * as React from 'react';

import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { Tooltip } from '@mui/material';
import { dark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { useState } from 'react';

function NpmInstall() {
  const [selectedButton, setSelectedButton] = useState(null);
  const code = 'npm install -g @nestjs/cli';
  const language = 'javascript';

  const handleButtonClick = (buttonName) => {
    setSelectedButton(buttonName);
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
        <br/>
        The CLI is a tool that allows you to control NestJS on the command line.
      </div>
    ),
  };

  return (
    <div>
      <SyntaxHighlighter language={language} style={dark}>
        {code}
      </SyntaxHighlighter>
      <Tooltip trigger="hover" title={tooltipText[selectedButton] || ''}>
        <button onClick={() => handleButtonClick('g')} className={selectedButton === 'g' ? 'selected-button' : ''}>-g</button>
        <button onClick={() => handleButtonClick('cli')} className={selectedButton === 'cli' ? 'selected-button' : ''}>cli</button>
      </Tooltip>
    </div>
  );
}

export default NpmInstall;
