import * as React from 'react';

import Userfront, {
  LoginForm,
  PasswordResetForm,
  SignupForm,
} from '@userfront/toolkit/react';

import FrameworkCard from '../components/frameworkCard';

export default function Cards() {
  return (
    <div>
      <FrameworkCard
        name={'NestJs'}
        imagePath={'https://commons.wikimedia.org/wiki/File:NestJS.svg'}
      />
      <PasswordReset />
      <button onClick={Userfront.logout}>Logout</button>
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
