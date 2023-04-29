import { useContext, useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { collection, doc, setDoc } from 'firebase/firestore'
import { db } from '../../firebase/getAuthDb'
import { GlobalContext } from '../providers/GlobalProvider'
import styled from 'styled-components'
import { darkMain, lightSecondary } from '../../sc-css/COLORS'
import Votes from '../multi-usage/Votes'

export function PostVotes({ darkMode, post }) {

    const location = useLocation().pathname.split('/')
    const { user, likedPosts } = useContext(GlobalContext)
    const [upVote, setUpVote] = useState()
    const [downVote, setDownVote] = useState()
    const [votesBackground, setVotesBackground] = useState('')
    const [votes, setVotes] = useState()

    useEffect(() => {
        if (location[3] === 'p' || location[1] === 'u') setVotesBackground('clear')
    }, [location])

    useEffect(() => {
        if (post) setVotes(post.data.votes)
        else return

        if (likedPosts && likedPosts.length > 0) {
            if (likedPosts.filter(p => p.id === post.id)) {
                const likedPost = likedPosts.filter(p => p.id === post.id)[0]
                if (likedPost === undefined) return
                if (likedPost.data.value === 1) setUpVote('up-vote')
                if (likedPost.data.value === -1) setDownVote('down-vote')
            }
        }
    }, [likedPosts, post])

    function handleVote(e) {
        if (e.target.dataset.key !== 'vote') return

        let voteValue = Number(e.target.dataset.value)
        if ((upVote === 'up-vote' && voteValue === 1)
            || (downVote === 'down-vote' && voteValue === -1)) {
            setDownVote()
            setUpVote()
            updateUserVotes(0, user, post.id)
            updatePostVotes(votes, -voteValue, post.id)
        } else if (upVote === 'up-vote' && voteValue === -1) {
            setDownVote('down-vote')
            setUpVote()
            updateUserVotes(voteValue, user, post.id)
            updatePostVotes(votes, -2, post.id)
        } else if (downVote === 'down-vote' && voteValue === 1) {
            setDownVote()
            setUpVote('up-vote')
            updateUserVotes(voteValue, user, post.id)
            updatePostVotes(votes, 2, post.id)
        } else {
            updateUserVotes(voteValue, user, post.id)
            updatePostVotes(votes, voteValue, post.id)
        }
    }

    if (post === undefined) return <div>Loading</div>

    return (
        <StyledDiv className={`${votesBackground} ${darkMode}`}>
            <Votes darkMode={darkMode} votes={post.data.votes}
                handleVote={handleVote} upVote={upVote} downVote={downVote} />
        </StyledDiv>
    )
}

export const updateUserVotes = (voteValue, user, postId) => {
    const likedPosts = collection(db, 'users', user.id, 'likedPosts')
    const postRef = doc(likedPosts, postId)
    setDoc(postRef, {
        value: voteValue
    })
}

export const updatePostVotes = (votes, voteValue, postId) => {
    setDoc(doc(db, 'posts', postId),
        // no decrement?
        { votes: votes + voteValue },
        { merge: true }
    )
}

const StyledDiv = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content: start;
    width:40px;
    background-color: ${lightSecondary};
    padding-top : 4px;
    border-top-left-radius:4px;
    border-bottom-left-radius:4px;
    
    &.clear, &.dark.clear {
        background-color: inherit;
    }

    &.dark {
        background-color: ${darkMain}
    }
`