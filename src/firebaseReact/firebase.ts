
// Import the functions you need from the SDKs you need
import {initializeApp} from "firebase/app";
import { getAuth, signInWithRedirect,setPersistence,onAuthStateChanged, getRedirectResult,GoogleAuthProvider, inMemoryPersistence ,browserLocalPersistence} from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-librariesç


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAqR8lEmTY4mLu0xpbeE4QYE2GZ0UimnDA",
  authDomain: "ecommerce-95106.firebaseapp.com",
  projectId: "ecommerce-95106",
  storageBucket: "ecommerce-95106.appspot.com",
  messagingSenderId: "361212211594",
  appId: "1:361212211594:web:2fa3a87a0a42e62e49d873",
  measurementId: "G-5C9CV4PVMP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app)

// setPersistence(auth, browserLocalPersistence)


export const signInWithGoogle = () => {
      const googleProvider = new GoogleAuthProvider()

      return signInWithRedirect(auth, googleProvider);
    
};


// export const authStateChangedFunction = () => {
//   return onAuthStateChanged(auth, (user) => {
//   if (user) {
//     // User is signed in, see docs for a list of available properties
//     // https://firebase.google.com/docs/reference/js/firebase.User
//     const uid = user.uid;
//     // ...
//   } else {
//     // User is signed out
//     // ...
//   }
// });


export const handleRedirectResult = async () => {
  try {
    const result = await getRedirectResult(auth);
    console.log('succesfully received', result)
    
    // handle the successful sign-in result
  } catch (error) {
    console.error(error)
    // handle the error
  }
};

//  const user = auth.currentUser

// let displayName:any
// let email:any
// let photoURL:any
// let emailVerified:any
// let uid:any

//   if (user !== null) {
//     // The user object has basic properties such as display name, email, etc.
//      displayName = user.displayName;
//      email = user.email;
//      photoURL = user.photoURL;
//      emailVerified = user.emailVerified;
    
//     // The user's ID, unique to the Firebase project. Do NOT use
//     // this value to authenticate with your backend server, if
//     // you have one. Use User.getToken() instead.
//      uid = user.uid;
    
//   }
//   export  {
//     displayName,
//     email,
//     photoURL,
//     emailVerified,
//     uid
//  }


export default app;
