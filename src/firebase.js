
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDiqD_n5CRD9KQCyrvMnavQl2HOMeniztw",
  authDomain: "board-app-26413.firebaseapp.com",
  projectId: "board-app-26413",
  storageBucket: "board-app-26413.appspot.com",
  messagingSenderId: "449214756785",
  appId: "1:449214756785:web:e6b38ad5f54d39164caf90"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

export { db };
