import React from 'react'
import Votes from '../../multi-usage/Votes'
import { collection, doc, setDoc } from 'firebase/firestore'
import { useContext, useEffect, useState } from 'react'
import { db } from '../../../firebase/getAuthDb'
import { GlobalContext } from '../../providers/GlobalProvider'
import styled from 'styled-components'

export default function CommentVotes({ post, darkMode, comment }) {

    const { user, likedComments } = useContext(GlobalContext)
    const [upVote, setUpVote] = useState()
    const [downVote, setDownVote] = useState()
    const [votes, setVotes] = useState()
    // let votes = comment.data.votes

    function handleVote(e) {

        if (e.target.dataset.key !== 'vote') return

        let voteValue = Number(e.target.dataset.value)

        if ((upVote === 'up-vote' && voteValue === 1)
            || (downVote === 'down-vote' && voteValue === -1)) {
            setDownVote()
            setUpVote()
            updateUserVotes(0, user, comment.id)
            updateCommentVotes(votes, -voteValue, comment.id, post.id)
            return
        }

        if (upVote === 'up-vote' && voteValue === -1) {
            setDownVote('down-vote')
            setUpVote()
        } else if (downVote === 'down-vote' && voteValue === 1) {
            setDownVote()
            setUpVote('up-vote')
        }

        updateUserVotes(voteValue, user, comment.id)
        updateCommentVotes(votes, voteValue, comment.id, post.id)
    }

    useEffect(() => {
        if (likedComments.length > 0) {
            if (likedComments.filter(p => p.id === comment.id)) {
                const likedComment = likedComments.filter(p => p.id === comment.id)[0]
                if (likedComment === undefined) return
                if (likedComment.data.value === 1) setUpVote('up-vote')
                if (likedComment.data.value === -1) setDownVote('down-vote')
            }
        }
    }, [likedComments])

    useEffect(() => {
        if (comment) setVotes(comment.data.votes)
    }, [comment])

    return (
        <StyledVotes>
            <Votes darkMode={darkMode} item={comment}
                handleVote={handleVote}
                upVote={upVote} downVote={downVote} />
        </StyledVotes>
    )
}

const updateUserVotes = (voteValue, user, commentId) => {

    const likedComments = collection(db, 'users', user.id, 'likedComments')
    const postRef = doc(likedComments, commentId)

    setDoc(postRef, {
        value: voteValue
    })
}

const updateCommentVotes = (votes, voteValue, commentId, postId) => {

    const comment = collection(db, 'posts', postId, 'comments')
    const commentRef = doc(comment, commentId)

    setDoc(commentRef,
        { votes: votes + voteValue },
        { merge: true }
    )
}

const StyledVotes = styled.div`
    display:flex;
    align-items:center;
    gap:3px;
`