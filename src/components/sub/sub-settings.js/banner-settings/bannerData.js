
import { db, storage } from '../../../../firebase/getAuthDb'
import { deleteObject, getDownloadURL, ref, uploadBytes } from 'firebase/storage'
import { setDoc, doc } from 'firebase/firestore'

async function handleBannerSubmit(sub, banner) {

    const imageRef = ref(storage, `subs/${sub.id}/banner/${banner.name}`)
 
    if (sub.data.banner) {
        await deleteObject(ref(storage, `subs/${sub.id}/banner/${sub.data.banner}`))
    }

    await uploadBytes(imageRef, banner)

    await setDoc(doc(db, 'subs', sub.id), {
        banner: banner.name
    }, { merge: true })

}


async function getBanner(sub) {

    if (!sub.data.banner) return
    
    const pathRef = ref(storage, `subs/${sub.id}/banner/${sub.data.banner}`)
    const data = await getDownloadURL(pathRef)
    return data

}

export { handleBannerSubmit, getBanner }
