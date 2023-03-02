import React from 'react'
import Votes from '../../multi-usage/Votes'
import { collection, doc, setDoc } from 'firebase/firestore'
import { useContext, useEffect, useState } from 'react'
import { db } from '../../../firebase/getAuthDb'
import { GlobalContext } from '../../providers/GlobalProvider'

export default function CommentVotes({ darkMode, comment }) {

    const { user, likedComments } = useContext(GlobalContext)
    const [upVote, setUpVote] = useState()
    const [downVote, setDownVote] = useState()
    let votes = comment.data.votes

    function handleVote(e) {

        if (e.target.dataset.key !== 'vote') return

        let voteValue = Number(e.target.dataset.value)

        if ((upVote === true && voteValue === 1)
            || (downVote === true && voteValue === -1)) {
            setDownVote(false)
            setUpVote(false)
            updateUserVotes(0, user, comment.id)
            updateCommentVotes(votes, -voteValue, comment.id)
            return
        }

        if (upVote === true && voteValue === -1) {
            setDownVote(true)
            setUpVote(false)
        } else if (downVote === true && voteValue === 1) {
            setDownVote(false)
            setUpVote(true)
        }

        // updateUserVotes(voteValue, user, comment.id)
        // updateCommentVotes(votes, voteValue, comment.id)
    }

    useEffect(() => {

        if (likedComments.length > 0) {

            if (likedComments.filter(p => p.id === comment.id)) {

                const likedComment = likedComments.filter(p => p.id === comment.id)[0]

                if (likedComment === undefined) return
                if (likedComment.data.value === 1) setUpVote(true)
                if (likedComment.data.value === -1) setDownVote(true)
            }
        }
    }, [likedComments])

    return (
        <Votes darkMode={darkMode} item={comment}
            handleVote={handleVote}
            upVote={upVote} downVote={downVote} />
    )
}

const updateUserVotes = (voteValue, user, postId) => {

    const likedComments = collection(db, 'users', user.id, 'likedComments')
    const postRef = doc(likedComments, postId)

    setDoc(postRef, {
        value: voteValue
    })
}

const updateCommentVotes = (votes, voteValue, postId) => {

    setDoc(doc(db, 'posts', postId),
        // no decrement?
        { votes: votes + voteValue },
        { merge: true }
    )
}

