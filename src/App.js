import './App.css';

import firebase from 'fire/app';
import 'firebase/firestore';
import 'firebase/auth/auth.js';

import { useAuthState } from 'react-firebase-hooks/auth'
import { useCollectionData } from 'react-firebase-hooks/firestore'

firebase.intializeApp({
  apiKey: "AIzaSyAFNCjP4S6XgcgJdtm_FuDMQFk-v-_zbMI",
  authDomain: "chat-messenger-dd901.firebaseapp.com",
  projectId: "chat-messenger-dd901",
  storageBucket: "chat-messenger-dd901.appspot.com",
  messagingSenderId: "105290050750",
  appId: "1:105290050750:web:6b3a514e45bf76600f82ef",
  measurementId: "G-Y40XQE5J3Y"
})



function App() {
  return (
    <div className="App">
      <header className="App-header">

      </header>
    </div>
  );
}

export default App;
