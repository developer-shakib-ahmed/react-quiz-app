import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  // eslint-disable-next-line prettier/prettier
  updateProfile
} from 'firebase/auth';
import React, { useContext, useEffect, useState } from 'react';
import '../firebase';

const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [loading, setLoading] = useState(true);
  const [currentUser, setCurrentUser] = useState();

  useEffect(() => {
    const auth = getAuth();
    const unSubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      setLoading(false);
    });

    return unSubscribe;
  }, []);

  async function signup(email, password, username) {
    const auth = getAuth();
    await createUserWithEmailAndPassword(auth, email, password);

    // Update Profile Method (optional)
    await updateProfile(auth.currentUser, {
      displayName: username,
    });

    // Update Local Current User State
    const user = auth.currentUser;
    setCurrentUser({
      ...user,
    });
  }

  function login(email, password) {
    const auth = getAuth();
    return signInWithEmailAndPassword(auth, email, password);
  }

  function logout() {
    const auth = getAuth();
    return signOut(auth);
  }

  const value = {
    currentUser,
    signup,
    login,
    logout,
  };

  return <AuthContext.Provider value={value}>{!loading && children}</AuthContext.Provider>;
}
