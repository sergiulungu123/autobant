import { getAnalytics } from 'firebase/analytics';
import { getFirestore } from 'firebase/firestore';
// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
const firebaseConfig = {
  apiKey: 'AIzaSyB6L4s1oDyOxeHtVG-pKoHWCRr88cBE8I4',
  authDomain: 'autobant-1f848.firebaseapp.com',
  projectId: 'autobant-1f848',
  storageBucket: 'autobant-1f848.appspot.com',
  messagingSenderId: '464041843857',
  appId: '1:464041843857:web:8d4c769562ed67e6367330',
  measurementId: 'G-WSLYLDBSV8',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);
