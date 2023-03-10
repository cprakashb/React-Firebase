import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut} from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDI7M4t52Jd2m_UQnkzw6yxZ9D_TTDBFNA",
    authDomain: "ck-react-987a7.firebaseapp.com",
    projectId: "ck-react-987a7",
    storageBucket: "ck-react-987a7.appspot.com",
    messagingSenderId: "359743724898",
    appId: "1:359743724898:web:eb6bebb5636a8de53de03b",
    measurementId: "G-CSNPCRVYJP"
};

const app = initializeApp(firebaseConfig);

const firebaseAuth = getAuth(app);

export { firebaseAuth, app, onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut };