import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, updateProfile, signOut, GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import { useEffect, useState } from 'react';
import initializeFirebase from '../firebase/firebase.init';

initializeFirebase();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const auth = getAuth();

    const signUpWithEmail = (name, email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then(() => {
                // sign up successfully
                addName(name) // for adding name in profile
                setError('');
                setSuccess('You signed up successfully')
            })
            .catch((error) => {
                setError(error.message)
            });
    }

    const loginWithEmail = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)

    }

    const loginWithGoogle = () => {
        const googleProvider = new GoogleAuthProvider();
        return signInWithPopup(auth, googleProvider)

    }

    const addName = (name) => {
        updateProfile(auth.currentUser, {
            displayName: name
        }).then(() => {
            // Profile updated!
        }).catch((error) => {
            setError(error.message)
        });
    }

    const logOut = () => {
        signOut(auth).then(() => {
            setUser({})
        }).catch((error) => {
            setError(error.message)
        });
    }

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                // User is signed in, see docs for a list of available properties
                setUser(user)
            } else {
                // User is signed out
            }
        });
    }, [])

    return {
        signUpWithEmail,
        user,
        setUser,
        error,
        loginWithEmail,
        setError,
        success,
        logOut,
        loginWithGoogle
    }
}

export default useFirebase;