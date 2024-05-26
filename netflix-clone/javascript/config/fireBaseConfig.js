import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.1/firebase-app.js";
  import { getAuth,createUserWithEmailAndPassword,signInWithEmailAndPassword } from "https://cdnjs.cloudflare.com/ajax/libs/firebase/10.12.1/firebase-auth.min.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyCC_haTinSbRIE0nrec6j1wPnogSCXwdio",
    authDomain: "netflex-clone-auth.firebaseapp.com",
    projectId: "netflex-clone-auth",
    storageBucket: "netflex-clone-auth.appspot.com",
    messagingSenderId: "32903700266",
    appId: "1:32903700266:web:3d48c4f829dfe5c7528853",
    measurementId: "G-YSG9GG81BC"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);

  export {auth,createUserWithEmailAndPassword, signInWithEmailAndPassword,}



//   https://cdnjs.cloudflare.com/ajax/libs/firebase/10.12.1/firebase-database.min.js