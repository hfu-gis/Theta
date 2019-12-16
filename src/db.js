import firebase from 'firebase/app'
import 'firebase/firestore'
const firebaseConfig = {
    apiKey: "AIzaSyDQY2bFyLLPq-sMJin3vFf0T35DWBsFv18",
    authDomain: "theta-e3ee0.firebaseapp.com",
    databaseURL: "https://theta-e3ee0.firebaseio.com",
    projectId: "theta-e3ee0",
    storageBucket: "theta-e3ee0.appspot.com",
    messagingSenderId: "677331986350",
    appId: "1:677331986350:web:a30e068a6af118c6e14a3f",
    measurementId: "G-HBTHY64QP3"
};
export const db = firebase.initializeApp(firebaseConfig).firestore
// This is not always necessary
const { TimeStamp, GeoPoint } = firebase.firestore
export { TimeStamp, GeoPoint }