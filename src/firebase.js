import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAOF49NDEf0KDAd0hOaRCGqD0Gim5TwqGc",
  authDomain: "chatter-box-2129b.firebaseapp.com",
  projectId: "chatter-box-2129b",
  storageBucket: "chatter-box-2129b.appspot.com",
  messagingSenderId: "1080814921984",
  appId: "1:1080814921984:web:609ea15adc2c8d4b0cebe5",
  measurementId: "G-H2E77D41FK",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
