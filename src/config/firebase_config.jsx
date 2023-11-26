import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
// TODO: Add SDKs for Firebase products that you want to use
const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.MESSAGIN_SENFER_ID,
  appId: process.env.REACT_APP_MESSAGIN_SENFER_ID,
  measurementId: process.env.REACT_APP_APP_ID,
};

// Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const db = firebase.firestore();
const settings = { timestampsInSnapshots: true };
// @ts-ignore
db.settings(settings);

// Enable experimentalForceLongPolling for Firestore
const firestoreConfig = {
  experimentalForceLongPolling: true,
};
const firestore = firebase.firestore(firebase.app());
firestore.settings(firestoreConfig);

export { firebase, db };