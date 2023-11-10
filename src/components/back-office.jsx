import 'bootstrap/dist/css/bootstrap.min.css';

import * as React from 'react';

import { collection, getDocs } from 'firebase/firestore';

import bcrypt from 'bcryptjs';
import cls from '../style.module.css';
import { db } from './config';
import { useState } from 'react';

function BackOffice() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isCorrectPassword, setIsCorrectPassword] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const compare = (pass, hash) => {
    if (pass && hash) {
      return bcrypt.compareSync(pass, hash);
    } else {
      console.log('Invalid password');
      return false; // Return false for invalid passwords
    }
  };

  const handleLogin = async () => {
    const usersCollection = collection(db, 'users');
    const usersSnapshot = await getDocs(usersCollection);
    const userData = usersSnapshot.docs.map((doc) => doc.data());
    const isValidPassword = compare(password, userData[0].password);

    if (isValidPassword) {
      setIsLoggedIn(true);
      setIsCorrectPassword(true);
    } else {
      setIsLoggedIn(false);
      setIsCorrectPassword(false);
    }
  };

  const handleLogout = () => {
    setPassword('');
    setUsername('');
    setIsLoggedIn(false);
    console.log('logged out');
    // @ts-ignore
    return <div>{renderContent}</div>;
  };

  const renderContent = () => {
    if (isLoggedIn) {
      return (
        <div>
          <p>Welcome, {username}!</p>
          {/* Render additional content for authorized users */}
          <button onClick={handleLogout}>Logout</button>
        </div>
      );
    } else {
      return (
        <div>
          <div className="Auth-form-container, text-center">
            <form>
              <div className="form-outline mb-4">
                <input
                  type="text"
                  id="form2Example1"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="username"
                  className="form-control"
                />
              </div>

              <div className="form-outline mb-3">
                <input
                  type="password"
                  id="form2Example1"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="password"
                  className="form-control"
                />
              </div>

              <button
                type="button"
                onClick={handleLogin}
                className="btn btn-primary btn-block mb-4"
              >
                Sign in
              </button>
            </form>
          </div>
        </div>
      );
    }
  };

  return (
    <div className={cls.app}>
      <main>{renderContent()}</main>
    </div>
  );
}

export default BackOffice;
