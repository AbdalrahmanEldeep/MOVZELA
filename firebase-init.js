// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, createUserWithEmailAndPassword ,signOut, signInWithEmailAndPassword, updateProfile} from "firebase/auth";

import {
  ref,
  uploadBytesResumable,
  getDownloadURL,
  getStorage,
} from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCsNGPjvsd31sJd7PwDClw94-b2uuRZZ7M",
  authDomain: "movzila.firebaseapp.com",
  projectId: "movzila",
  storageBucket: "movzila.appspot.com",
  messagingSenderId: "47853476842",
  appId: "1:47853476842:web:46b869be2188962cc1f093",
  measurementId: "G-R1S9N6M7M9",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Cloud Storage and get a reference to the service
export const storage = getStorage(app);

export const auth = getAuth(app);






export const createNewUsers = async (auth,email,password,file) => {
  return createUserWithEmailAndPassword(auth, email, password,file)
  .then((userCredential) => {
    const user = userCredential.user;

      const storageRef = ref(storage,`${user.uid}/${file.name}`);
    
      const uploadTask = uploadBytesResumable(storageRef, file);
    
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          // Observe state change events such as progress, pause, and resume
          // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
        },
        (error) => {
          // Handle unsuccessful uploads
        },
        () => {
          // Handle successful uploads on complete
          // For instance, get the download URL: https://firebasestorage.googleapis.com/...
          getDownloadURL(uploadTask.snapshot.ref).then( async (downloadURL) => {
            await updateProfile(user,{
              photoURL:downloadURL
            })
          });
        }
      );
  })
  .catch((error) => {
    const errorCode =  error.code;
    const errorMessage =  error.message;
    return errorCode;
  });
}

export const SignOutUserPage = () => {
  signOut(auth).then(() => {
  // Sign-out successful.
}).catch((error) => {
});
}


export const SignInUser = async (auth, email, password) => {
  return signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    return errorCode;
  });
}