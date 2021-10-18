import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, updateProfile } from 'firebase/auth'
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
        signInWithEmailAndPassword(auth, email, password)
            .then((result) => {
                // Signed in 
                setUser(result.user);
                setError('')
            })
            .catch((error) => {
                setError(error.message);
            });
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
        error,
        loginWithEmail,
        setError,
        success
    }
}

export default useFirebase;