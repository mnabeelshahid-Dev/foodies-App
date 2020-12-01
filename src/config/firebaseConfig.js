import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

var firebaseConfig = {
  apiKey: 'AIzaSyBrHfieiKalMJiSOQny93M3VsNpcSch4_Y',
  authDomain: 'foodies-32ad8.firebaseapp.com',
  databaseURL: 'https://foodies-32ad8.firebaseio.com',
  projectId: 'foodies-32ad8',
  storageBucket: 'foodies-32ad8.appspot.com',
  messagingSenderId: '851750362670',
  appId: '1:851750362670:web:7ba0eb83fe269d605b89bf',
  measurementId: 'G-4YPYDW00N0',
};

firebase.initializeApp(firebaseConfig);
firebase.firestore().settings({timestampsInSnapshots: true});

export default firebase;
