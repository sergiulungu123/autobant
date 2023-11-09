import 'bootstrap/dist/css/bootstrap.min.css';

import * as React from 'react';

import { collection, getDocs } from 'firebase/firestore';

import bcrypt from 'bcryptjs';
import cls from '../style.module.css';
import { db } from './config';
import { useState } from 'react';

function Main() {

  return (
    <div className={cls.app}>
      in progress
    </div>
  );
}

export default Main;
