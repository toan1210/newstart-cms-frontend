// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider,getAuth,signInWithPopup,FacebookAuthProvider  } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCpdqCA06BT4563hrHR1Vrw6HpH-Mgn6CQ",
    authDomain: "newstar-e0d67.firebaseapp.com",
    projectId: "newstar-e0d67",
    storageBucket: "newstar-e0d67.appspot.com",
    messagingSenderId: "581134739890",
    appId: "1:581134739890:web:9d129a608e06e2bd759cab"
};
const app = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
const providers = new FacebookAuthProvider();
export const auth = getAuth(app);
provider.addScope('email')
//logOut
// signOut(auth).then(() => {
//     // Sign-out successful.
//   }).catch((error) => {
//     // An error happened.
//   });
auth.languageCode = 'it';

export const Loginfb = () =>{
    signInWithPopup(auth, providers)
  .then((result) => {
    // The signed-in user info.
   
    console.log(result)

    // ...
  })
  .catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = FacebookAuthProvider.credentialFromError(error);

    // ...
  });
}

export const Login = () => {
    signInWithPopup(auth, provider)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    
    console.log(result)
    // ...
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
  });
}



