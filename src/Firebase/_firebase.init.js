
// ekhane ekta bisoy hosce, amake ei field take server er sathe add korate gele {getAuth} name e ekta  auth server theke ante hobe

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyCZ2BgDkNtiVTh8xWvg6jg1lWxm9uHaV54",
  authDomain: "module-48-email-auth.firebaseapp.com",
  projectId: "module-48-email-auth",
  storageBucket: "module-48-email-auth.firebasestorage.app",
  messagingSenderId: "343872016317",
  appId: "1:343872016317:web:7aaa5ba36bde5a234cccd4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)