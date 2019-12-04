import React from 'react';
//import logo from './logo.svg';
import './App.css';
import '../node_modules/react-vis/dist/style.css';
import DailyStats from './dailystats';

import * as firebase from "firebase/app";


function App() {

//PRD
const firebaseConfig = {
  apiKey: "AIzaSyBMzH95zvyxHAwly-YstDvapKtxjXLU0Vg",
  authDomain: "mol-sg-families-prod.firebaseapp.com",
  databaseURL: "https://mol-sg-families-prod.firebaseio.com",
  projectId: "mol-sg-families-prod",
  storageBucket: "mol-sg-families-prod.appspot.com",
  messagingSenderId: "802395159360",
  appId: "1:802395159360:web:04359218d5d6e330f518a5"
};
/* const firebaseConfig = {
  apiKey: "AIzaSyAt6QzznB3VHDYr2XzqxN_s162xsMvXpMM",
  authDomain: "mol-sg-families.firebaseapp.com",
  databaseURL: "https://mol-sg-families.firebaseio.com",
  projectId: "mol-sg-families",
  storageBucket: "mol-sg-families.appspot.com",
  messagingSenderId: "1069423193198",
  appId: "1:1069423193198:web:b0991eeb68ab0dd8"
};
*/
  
  firebase.initializeApp(firebaseConfig);
  
  return (
      <DailyStats />
  );
}

export default App;
