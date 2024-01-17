import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBQs1W32qep4gdYAsclGFXJvaVvZwsQUTk",
  authDomain: "kella-blog.firebaseapp.com",
  projectId: "kella-blog",
  storageBucket: "kella-blog.appspot.com",
  messagingSenderId: "392651726951",
  appId: "1:392651726951:web:980cb951a0051b7df134c2",
  measurementId: "G-88KENJXDNE",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const storage = getStorage(app);

export { storage };
