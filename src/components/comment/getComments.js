import { onSnapshot, query, collection } from 'firebase/firestore';
import { db } from '../../firebase/getAuthDb';

export default async function getComments(postId) {

    const q = query(collection(db, 'posts', postId, 'comments'))

    let commentsArr = []

    onSnapshot(q, (querySnapShot) => {
        querySnapShot.forEach((doc) => {
            commentsArr.push({ id: doc.id, data: doc.data() })
        })
    })
    return commentsArr
}