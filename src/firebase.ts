import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyCnVYF5o1CTbLvvzkBvtAXNo5XxIH3vr-Q',
  authDomain: 'mathmatch-e64b3.firebaseapp.com',
  projectId: 'mathmatch-e64b3',
  storageBucket: 'mathmatch-e64b3.appspot.com',
  messagingSenderId: '499666564371',
  appId: '1:499666564371:web:84c763ef3453f6b1afd6e6',
  measurementId: 'G-YXK7CCVG3R',
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export const db = firebase.firestore();

export default firebase;
