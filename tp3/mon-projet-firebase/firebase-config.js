import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: "AIzaSyC5h23yxwllKYX1JhJ2JDjmt1F7-bRgaTY",
  authDomain: "les-predictions-de-melanie.firebaseapp.com",
  projectId: "les-predictions-de-melanie",
  storageBucket: "les-predictions-de-melanie.appspot.com",
  messagingSenderId: "995837523522",
  appId: "1:995837523522:web:a95af1f4a8c7f4af619fdb"
};

const app = initializeApp(firebaseConfig);

export default app;