"use client"
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import LoadingAnimation from '../backoffice/loading'

const Backoffice = () => {
  const router = useRouter();

  useEffect(() => {
    const isLoggedIn =
      typeof window !== 'undefined' && sessionStorage.getItem('auth_key');

    if (!isLoggedIn) {
      router.push('/login');
    }
  }, [router]);

  const handleLogout = () => {
    sessionStorage.removeItem('auth_key');
    router.push('/login');
  };

  // Render loading or backoffice content based on authentication status
  const isLoggedIn =
    typeof window !== 'undefined' && sessionStorage.getItem('auth_key');

  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24">
      {isLoggedIn ? (
        <div className="flex min-h-screen flex-col items-center justify-between p-24">
          <div>backoffice</div>
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <LoadingAnimation />  
      )}
    </div>
  );
};

export default Backoffice;

