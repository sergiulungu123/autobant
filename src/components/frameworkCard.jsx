import * as React from 'react';

import { addDoc, collection, getDocs } from 'firebase/firestore';

import bcrypt from 'bcryptjs';
import { db } from './config';
import { useState } from 'react';

function FrameworkCard() {
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
    console.log('start');
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
    setIsLoggedIn(false);
    setUsername('');
    setPassword('');
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
    } else if (isCorrectPassword === false) {
      return (
        <div>
          <p>Incorrect username or password. Please try again.</p>
        </div>
      );
    } else {
      return null;
    }
  };

  return (
    <div>
      <input
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Username"
      />
      <input
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
        type="password"
      />
      <button type="submit" onClick={handleLogin}>
        Login
      </button>
      <main>{renderContent()}</main>
    </div>
  );
}

export default FrameworkCard;
