import { db, storage } from '../../../../firebase/getAuthDb'
import { deleteObject, getDownloadURL, ref, uploadBytes } from 'firebase/storage'
import { setDoc, doc } from 'firebase/firestore'

async function handleAvatarSubmit(sub, avatar) {

    const imageRef = ref(storage, `subs/${sub.id}/avatar/${avatar.name}`)
 
    if (sub.data.avatar) {
        await deleteObject(ref(storage, `subs/${sub.id}/avatar/${sub.data.avatar}`))
    }

    await uploadBytes(imageRef, avatar)

    await setDoc(doc(db, 'subs', sub.id), {
        avatar: avatar.name
    }, { merge: true })

}

async function getAvatar(sub) {

    if (!sub.data.avatar) return
    
    const pathRef = ref(storage, `subs/${sub.id}/avatar/${sub.data.avatar}`)
    const data = await getDownloadURL(pathRef)
    return data

}

export {handleAvatarSubmit, getAvatar}