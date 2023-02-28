import {
    signInWithEmailAndPassword,
    signOut,
    GoogleAuthProvider,
    signInWithPopup, createUserWithEmailAndPassword
} from "firebase/auth";
import {getAppAuth} from "../context/AuthContext";

export async function userSignOut() {
    const auth = getAppAuth();

    try {
        await signOut(auth)
    } catch (e) {
        return e
    }
}

export async function signIn(email, password) {
    const auth = getAppAuth();

    try {
        return await signInWithEmailAndPassword(auth, email, password)
    } catch (e) {
        return e
    }
}

export async function signInGoogle() {
    const auth = getAppAuth();
    const provider = new GoogleAuthProvider()

    try {
        return await signInWithPopup(auth, provider)
    } catch (e) {
        return e
    }
}

export async function signUp(email, password) {
    const auth = getAppAuth();

    try {
        return await createUserWithEmailAndPassword(auth, email, password)
    } catch (e) {
        return e
    }
}

