import {
  FacebookAuthProvider,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { useEffect, useState } from "react";
import auth from "./firebase.init";
import { AuthContext } from "./AuthContext";
import useAxiosSecure from "../Hooks/useAxiosSecure";

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState([]);
  const [loading, setLoading] = useState(false);
  const googleProvider = new GoogleAuthProvider();
  const facebookProvider = new FacebookAuthProvider();
  const axiosSecure = useAxiosSecure();
  useEffect(() => {
    const unSubscribed = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      if (currentUser) {
        const userEmail = { email: currentUser.email };
        axiosSecure.post("/jwt", userEmail).then((res) => {
          localStorage.setItem("access_token", res.data.access_token);
        });
      } else {
        localStorage.removeItem("access_token");
      }
      setLoading(false);
    });
    return () => {
      unSubscribed();
    };
  }, [axiosSecure]);

  // console.log(user);

  function createUser(email, password) {
    return createUserWithEmailAndPassword(auth, email, password);
  }

  function manualSignIn(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
  }

  function googleSignIn() {
    return signInWithPopup(auth, googleProvider);
  }

  function facebookSignIn() {
    return signInWithPopup(auth, facebookProvider);
  }

  function logOut() {
    return signOut(auth);
  }

  const authInfo = {
    user,
    loading,
    createUser,
    manualSignIn,
    googleSignIn,
    facebookSignIn,
    logOut,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
