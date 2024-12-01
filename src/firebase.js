import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { toast } from "react-toastify";

const firebaseConfig = {
  apiKey: "AIzaSyCy5W2oocsaxPoI2XVdqs-4kLSWSp0VMYY",
  authDomain: "netflix-clone-88dcb.firebaseapp.com",
  projectId: "netflix-clone-88dcb",
  storageBucket: "netflix-clone-88dcb.firebasestorage.app",
  messagingSenderId: "756909835237",
  appId: "1:756909835237:web:b8e1d115c34ed0f234a50c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);


const signUp = async (name,email, password) => {
  try {
    const res =  await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;
    await addDoc(collection(db, "user"), {
      uid: user.uid,
      name,
      authProvider: "local",
      email,
    })
  } catch (error) {
    console.log(error);
    toast.error(error.code.split("/")[1].split("-").join(" "));
  }
}

const login = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (error) {
    console.log(error);
    toast.error(error.code.split("/")[1].split("-").join(" "));
  }
}

const logout = () => {
 signOut(auth);
}

export {auth, db, signUp, login, logout};