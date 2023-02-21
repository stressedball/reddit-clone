import '../css/votes.css'
import { collection, arrayUnion, doc, setDoc, updateDoc, addDoc } from 'firebase/firestore'
import { db } from '../firebase/getAuthDb'
import { useContext, useEffect, useState } from 'react'
import { GlobalContext } from './providers/GlobalProvider'

export default function Votes({ post, postId }) {

    const { likedPosts, user } = useContext(GlobalContext)
    const [upVote, setUpVote] = useState()
    const [downVote, setDownVote] = useState()
    let votes = post.data.votes
    
    useEffect(() => {

        if (likedPosts.length !== 0) {

            if (likedPosts.filter(post => post.id === postId)) {

                const likedPost = likedPosts.filter(post => post.id === postId)[0]
                
                if (likedPost.data.value === 1) setUpVote(true)
                if (likedPost.data.value === -1) setDownVote(true)
            }
        }

    }, [likedPosts])

    function handleVote(e) {

        if (e.target.dataset.key !== 'vote') return

        let voteValue = Number(e.target.dataset.value)

        if (upVote === true && voteValue === 1
            || downVote === true && voteValue === -1) {
            setDownVote(false)
            setUpVote(false)
            updateUserVotes(0, user, postId)
            updatePostVotes(votes, -voteValue, postId)
            return
        }

        if (upVote === true && voteValue === -1) {
            setDownVote(true)
            setUpVote(false)
        } else if (downVote === true && voteValue === 1) {
            setDownVote(false)
            setUpVote(true)
        }

        updateUserVotes(voteValue, user, postId)
        updatePostVotes(votes, voteValue, postId)
    }

    return (
        <div
            className='vote-container'
        >
            <svg
                onClick={handleVote}
                className={`vote ${upVote}`}
                data-key="vote"
                data-value="1"
                fill="currentColor" width="25px" height="25px"
                viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12.781 2.375c-.381-.475-1.181-.475-1.562 0l-8 10A1.001 1.001 0 0 0 4 14h4v7a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-7h4a1.001 1.001 0 0 0 .781-1.625l-8-10zM15 12h-1v8h-4v-8H6.081L12 4.601 17.919 12H15z" /></svg>
            <p>{post.data.votes}</p>
            <svg
                onClick={handleVote}
                className={`vote ${downVote}`}
                data-key="vote"
                data-value="-1"
                fill="currentColor" width="25px" height="25px"
                viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M20.901 10.566A1.001 1.001 0 0 0 20 10h-4V3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v7H4a1.001 1.001 0 0 0-.781 1.625l8 10a1 1 0 0 0 1.562 0l8-10c.24-.301.286-.712.12-1.059zM12 19.399 6.081 12H10V4h4v8h3.919L12 19.399z" /></svg>
        </div>
    )
}


const updateUserVotes = (voteValue, user, postId) => {
    
    const likedPosts = collection(db, 'users', user.id, 'likedPosts')
    const postRef = doc(likedPosts, postId)

    setDoc(postRef, {
        value: voteValue
    })
}

const updatePostVotes = (votes, voteValue, postId) => {

    setDoc(doc(db, 'posts', postId),
        // no decrement?
        { votes: votes + voteValue },
        { merge: true }
    )
}