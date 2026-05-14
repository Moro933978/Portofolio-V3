// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// ضفنا المكتبات اللي ناقصة هنا
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDIb992pOHW0oc75acqifVxBKWMGlGMpjg",
    authDomain: "comment-app-1864c.firebaseapp.com",
    projectId: "comment-app-1864c",
    storageBucket: "comment-app-1864c.firebasestorage.app",
    messagingSenderId: "394374169995",
    appId: "1:394374169995:web:80c542c9962bf266d45b8e",
    measurementId: "G-BD0X8D8CL4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// 🔥 الخطوة السحرية اللي كانت ناقصة:
export const db = getFirestore(app);
export const storage = getStorage(app);