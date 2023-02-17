import '../../css/sub-list.css'
import { doc, setDoc } from 'firebase/firestore'
import { db } from '../../firebase/getAuthDb'

export default function Votes({ post, postId }) {

    function handleVotes(e) {

        let votes = post.data.votes

        if (e.target.classList.contains('up')) {
            setDoc(doc(db, 'posts', postId),
                { votes: votes + 1 },
                { merge: true }
            )
        } else {
            setDoc(doc(db, 'posts', postId),
                { votes: post.data.votes - 1 },
                { merge: true }
            )
        }
    }

    return (
        <div
            className='vote-container'
        >
            <svg
                onClick={handleVotes}
                className='vote up'
                fill="currentColor" width="25px" height="25px"
                viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12.781 2.375c-.381-.475-1.181-.475-1.562 0l-8 10A1.001 1.001 0 0 0 4 14h4v7a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-7h4a1.001 1.001 0 0 0 .781-1.625l-8-10zM15 12h-1v8h-4v-8H6.081L12 4.601 17.919 12H15z" /></svg>
            <p>{post.data.votes}</p>
            <svg
                onClick={handleVotes}
                className='vote down'
                fill="currentColor" width="25px" height="25px"
                viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M20.901 10.566A1.001 1.001 0 0 0 20 10h-4V3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v7H4a1.001 1.001 0 0 0-.781 1.625l8 10a1 1 0 0 0 1.562 0l8-10c.24-.301.286-.712.12-1.059zM12 19.399 6.081 12H10V4h4v8h3.919L12 19.399z" /></svg>
        </div>
    )
}