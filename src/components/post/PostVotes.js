import React from 'react'
import Votes from '../multi-usage/Votes'
import { collection, doc, setDoc } from 'firebase/firestore'
import { db } from '../../firebase/getAuthDb'
import { useContext, useEffect, useState } from 'react'
import { GlobalContext } from '../providers/GlobalProvider'

export default function PostVotes({ darkMode, post }) {

    const { user, likedPosts } = useContext(GlobalContext)
    const [upVote, setUpVote] = useState()
    const [downVote, setDownVote] = useState()
    let votes = post.data.votes

    function handleVote(e) {

        if (e.target.dataset.key !== 'vote') return

        let voteValue = Number(e.target.dataset.value)

        if ((upVote === true && voteValue === 1)
            || (downVote === true && voteValue === -1)) {
            setDownVote(false)
            setUpVote(false)
            updateUserVotes(0, user, post.id)
            updatePostVotes(votes, -voteValue, post.id)
            return
        }

        if (upVote === true && voteValue === -1) {
            setDownVote(true)
            setUpVote(false)
        } else if (downVote === true && voteValue === 1) {
            setDownVote(false)
            setUpVote(true)
        }

        updateUserVotes(voteValue, user, post.id)
        updatePostVotes(votes, voteValue, post.id)
    }

    useEffect(() => {

        if (likedPosts.length > 0) {

            if (likedPosts.filter(p => p.id === post.id)) {

                const likedPost = likedPosts.filter(p => p.id === post.id)[0]

                if (likedPost === undefined) return
                if (likedPost.data.value === 1) setUpVote(true)
                if (likedPost.data.value === -1) setDownVote(true)
            }
        }
    }, [likedPosts])

    return (
        <Votes darkMode={darkMode} item={post}
            handleVote={handleVote}
            upVote={upVote} downVote={downVote} />
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