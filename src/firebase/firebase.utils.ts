import firebase from 'firebase/app';
import 'firebase/firestore';

firebase.initializeApp(process.env.VUE_APP_FIREBASE_CONFIG);

export default firebase;
