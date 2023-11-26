'use client';
import React, { useState, useEffect } from 'react';
import { collection, getDocs } from 'firebase/firestore';
// Import the functions you need from the SDKs you need
import { useRouter } from 'next/navigation';
import { db } from '../../config/firebase_config';
import bcrypt from 'bcryptjs';


const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isCorrectPassword, setIsCorrectPassword] = useState(false);
  const [sessionItem, setSessionItem] = useState('');
  useEffect(() => {
    const storedValue = window.sessionStorage.getItem('value');
    // @ts-ignore
    setSessionItem(storedValue);
  }, []);

  const handleLogin = async () => {
    console.log('Login');
    const usersCollection = collection(db, 'users');
    const usersSnapshot = await getDocs(usersCollection);
    const userData = usersSnapshot.docs.map((doc) => doc.data());
    const isValidPassword = compare(password, userData[0].password);
    console.log(userData);

    if (isValidPassword) {
      setIsLoggedIn(true);
      setIsCorrectPassword(true);
      if (typeof window !== 'undefined' && window.localStorage) {
        // @ts-ignore
        localStorage.setItem('auth_key', process.env.REACT_APP_AUTH_KEY);
      }
    } else {
      setIsLoggedIn(false);
      setIsCorrectPassword(false);
    }
  };

  const compare = (/** @type {string} */ pass, /** @type {any} */ hash) => {
    if (pass && hash) {
      return bcrypt.compareSync(pass, hash);
    } else {
      console.log('Invalid password');
      return false;
    }
  };

  const renderContent = () => {
    console.log(isLoggedIn);
    console.log(sessionItem);
    if (isLoggedIn && sessionItem) {
      router.push('/backoffice');
    } else {
      return (
        <div className="flex min-h-screen flex-col justify-center items-center p-24">
          <div className="w-full">
            <h1 className="text-2xl font-bold">Вход</h1>
            <input
              type="text"
              placeholder="Имя пользователя"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              type="password"
              placeholder="Пароль"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              type="submit"
              className="px-4 py-2 rounded bg-blue-500 text-white"
              onClick={handleLogin}
            >
              Войти
            </button>
          </div>
        </div>
      );
    }
  };

  return (
    <div>
      <main>{renderContent()}</main>
    </div>
  );
};

export default Login;
