import * as React from 'react';

import FrameworkCard from '../components/frameworkCard';
import { PasswordResetForm } from '@userfront/toolkit';

export default function Cards() {
  return (
    <div>
      <FrameworkCard
        name={'NestJs'}
        imagePath={'https://commons.wikimedia.org/wiki/File:NestJS.svg'}
      />
      <PasswordReset />
    </div>
  );

  function PasswordReset() {
    return (
      <div>
        <h2>Password Reset</h2>
        <PasswordResetForm />
      </div>
    );
  }
}
