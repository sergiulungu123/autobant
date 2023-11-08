import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { nord } from 'react-syntax-highlighter/dist/esm/styles/prism';

const InitProject = () => {
  const code = 'nest new my-nestjs-app';
  const language = 'javascript';

  return (
    <div>
      <SyntaxHighlighter language={language} style={nord}>
        {code}
      </SyntaxHighlighter>
    </div>
  );
};

export default InitProject;
