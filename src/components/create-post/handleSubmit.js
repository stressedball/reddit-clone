import { addDoc, collection, serverTimestamp } from 'firebase/firestore'
import { db, storage } from '../../firebase/getAuthDb'
import { ref, uploadBytes } from 'firebase/storage'
import { setDoc, doc } from 'firebase/firestore'

export default async function handleSubmit({ params, user, subId, title, text, image, notified }) {

    let postRef = null

    if (params === '') {
        postRef = await addDoc(collection(db, 'posts'), {
            title: title.current.value,
            text: text.current.value,
            poster: user.id,
            votes: 0,
            timeStamp: serverTimestamp(),
            parent: subId
        })
        return postRef.id
    }

    if (params === 'img') {
        postRef = await addDoc(collection(db, 'posts'), {
            title: title.current.value,
            poster: user.id,
            votes: 0,
            timeStamp: serverTimestamp(),
            parent: subId
        })

        const imageRef = ref(storage, `posts/${postRef.id}/${image.name}`)
        
        await uploadBytes(imageRef, image)

        await setDoc(doc(db, 'posts', postRef.id), {
            image: image.name
        }, { merge: true })

        return postRef.id
    }



}