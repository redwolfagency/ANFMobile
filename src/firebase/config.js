import * as firebase from 'firebase';
import '@firebase/auth';
import '@firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCOAg1VzWdXzi1VPv5GwCmO0Kak9_MeT7o",
    authDomain: "anfapp-8116b.firebaseapp.com",
    databaseURL: "https://anfapp-8116b.firebaseio.com",
    projectId: "anfapp-8116b",
    storageBucket: "anfapp-8116b.appspot.com",
    messagingSenderId: "758712858031",
    appId: "1:758712858031:android:03bd6c807f869610adeb5a"
  };
  

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export { firebase };