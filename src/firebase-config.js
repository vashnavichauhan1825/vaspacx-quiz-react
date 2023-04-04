import { initializeApp } from "firebase/app";
import {getFirestore} from '@firebase/firestore'
const firebaseConfig = {
    apiKey: "AIzaSyBXzt7OQ5sw13u77Lj7C3elMeDyWrgxxYg",
    authDomain: "vaspacx-quiz-react.firebaseapp.com",
    projectId: "vaspacx-quiz-react",
    storageBucket: "vaspacx-quiz-react.appspot.com",
    messagingSenderId: "528289058321",
    appId: "1:528289058321:web:e7da60affe61e846adabb0",
    measurementId: "G-6MTMXQLZ8M"
  };

  const app = initializeApp(firebaseConfig)

  export const db = getFirestore(app)