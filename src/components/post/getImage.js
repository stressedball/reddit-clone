import { ref, getDownloadURL } from "firebase/storage"
import { storage } from "../../firebase/getAuthDb"


export default async function getImage(post) {

    const pathRef = ref(storage, `posts/${post.id}/${post.data.image}`)
    const data = await getDownloadURL(pathRef)
    return data
    
}