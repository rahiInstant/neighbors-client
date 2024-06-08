import { onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import auth from "./firebase.init";
import { AuthContext } from "./AuthContext";

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const unSubscribed = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => {
      unSubscribed();
    };
  }, []);

  


  const authInfo = {user, loading}
  return (
    <AuthContext.Provider value={authInfo}>
        {children}
    </AuthContext.Provider>
  )
};

export default AuthProvider;
