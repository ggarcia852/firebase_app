import { initializeApp } from "firebase/app";


const firebaseConfig = {
    apiKey: "AIzaSyB8WY-V655T7MKIgCYTeGLMDZyUdnPI6Rw",
    authDomain: "thanksgiving-799c9.firebaseapp.com",
    projectId: "thanksgiving-799c9",
    storageBucket: "thanksgiving-799c9.appspot.com",
    messagingSenderId: "612523258711",
    appId: "1:612523258711:web:811dc837d5b67045a38412"
  };

  const fire = initializeApp(firebaseConfig);
  export default fire;