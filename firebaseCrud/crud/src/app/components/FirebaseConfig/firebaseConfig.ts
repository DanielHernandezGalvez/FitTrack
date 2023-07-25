import { initializeApp } from "firebase/app";
import { getDatabase, Database } from "firebase/database";

function FirebaseConfig(): Database {
  const firebaseConfig = {
    apiKey: "AIzaSyBwpCfrudDC2pikyQihROedgZWL7bTUpGg",
    authDomain: "crud-73c70.firebaseapp.com",
    databaseURL: "https://crud-73c70-default-rtdb.firebaseio.com",
    projectId: "crud-73c70",
    storageBucket: "crud-73c70.appspot.com",
    messagingSenderId: "988553351205",
    appId: "1:988553351205:web:01d76258719d867b7e2fcc",
    measurementId: "G-VPMWEB1BTW",
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  return getDatabase(app);
}

export default FirebaseConfig;
