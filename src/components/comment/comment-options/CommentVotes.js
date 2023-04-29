import React from 'react'
import Votes from '../../multi-usage/Votes'
import { collection, doc, setDoc } from 'firebase/firestore'
import { useContext, useEffect, useState } from 'react'
import { db } from '../../../firebase/getAuthDb'
import { GlobalContext } from '../../providers/GlobalProvider'
import styled from 'styled-components'

export default function CommentVotes({ darkMode, comment }) {

    const { user, likedComments } = useContext(GlobalContext)
    const [upVote, setUpVote] = useState()
    const [downVote, setDownVote] = useState()
    const [votes, setVotes] = useState()

    useEffect(() => {
        if (likedComments && likedComments.length > 0) {
            if (likedComments.filter(p => p.id === comment.id)) {
                const likedComment = likedComments.filter(p => p.id === comment.id)[0]
                if (likedComment === undefined) return
                if (likedComment.data.value === 1) setUpVote('up-vote')
                if (likedComment.data.value === -1) setDownVote('down-vote')
            }
        }
    }, [likedComments])

    useEffect(() => { if (comment) setVotes(comment.data.votes) }, [comment])

    function handleVote(e) {

        if (e.target.dataset.key !== 'vote') return

        let voteValue = Number(e.target.dataset.value)

        if ((upVote === 'up-vote' && voteValue === 1)
            || (downVote === 'down-vote' && voteValue === -1)) {
            setDownVote()
            setUpVote()
            updateUserVotes(0, user, comment.id)
            updateCommentVotes(votes, -voteValue, comment.id)
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
        updateCommentVotes(votes, voteValue, comment.id)
    }

    return (
        <StyledVotes>
            <Votes darkMode={darkMode} votes={comment.data.votes}
                handleVote={handleVote} upVote={upVote} downVote={downVote} />
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

const updateCommentVotes = (votes, voteValue, commentId) => {
    setDoc(doc(db, 'comments', commentId),
        { votes: votes + voteValue },
        { merge: true }
    )
}

const StyledVotes = styled.div`
    display:flex;
    align-items:center;
    gap:3px;
    height: 18px;
`