import firebase from "firebase/compat/app";
import { getStorage } from "firebase/storage";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCVdAMXC1_DMlbUxWe4e3nBIZTremHzJ44",
  authDomain: "nepal-community-3a45e.firebaseapp.com",
  projectId: "nepal-community-3a45e",
  storageBucket: "nepal-community-3a45e.appspot.com",
  messagingSenderId: "590628611426",
  appId: "1:590628611426:web:8462382a5d64c1529ff83b",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const storage = getStorage(firebaseApp);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth, db, storage };
