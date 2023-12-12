import { signOut } from 'firebase/auth'
import { auth, db } from '../../firebase/getAuthDb'
import { setDoc, doc, serverTimestamp } from 'firebase/firestore'

export default async function signOutUser(user,redirectToHome) {

    const userDoc = doc(db, 'users', user.id)
    try {
        await setDoc(userDoc, {
            lastSeen: serverTimestamp(),
            status: 'offline'
        }, { merge: true })
        signOut(auth)
        redirectToHome()
    } catch (error) {
        alert(error)
    }

}