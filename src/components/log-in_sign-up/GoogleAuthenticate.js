import {getAuth, signInWithPopup, GoogleAuthProvider} from 'firebase/auth';

export default function GoogleAuthenticate(e) {
    e.preventDefault();
    const provider = new GoogleAuthProvider();
    const auth = getAuth();
    signInWithPopup(auth, provider).then((result) => {
        console.log(result);
    });
}
