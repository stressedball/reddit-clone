import React, { useState, useEffect, useContext } from 'react'
import CommentsCount from '../multi-usage/CommentsCount';
import { db } from '../../firebase/getAuthDb';
import { onSnapshot, query, collection } from 'firebase/firestore';
import styled from 'styled-components';
import { SVGStyled, Tile } from '../../sc-css/atomic';

const Div = styled.div`
    display: flex;
    align-items: center;
    flex: 1 0 auto;
    font-size: 12px;
    padding-bottom:2px;
`

const StyledTile = styled(Tile)`
    padding:0;
    display:flex;
    align-items:center;
    justify-content:center;
    border-radius:4px;
    height:36px;
`

export default function PostPreviewOptions({ darkMode, showContent, post }) {

    const [comments, setComments] = useState()

    useEffect(() => {
        const q = query(collection(db, 'posts', post.id, 'comments'))
        const unSub = onSnapshot(q, (querySnapShot) => {
            let commentsArr = []
            querySnapShot.forEach((doc) => {
                commentsArr.push({ id: doc.id, data: doc.data() })
            })
            setComments(commentsArr)
        })
        return () => unSub()
    }, [])

    const handleDisplayText = () => { showContent() }

    return (
        <Div>
            <StyledTile style={{ width: "36px" }}
                onClick={handleDisplayText}            >
                <ExpandText darkMode={darkMode} />
            </StyledTile>

            {comments === undefined ? null :
                <StyledTile>
                    <CommentsCount comments={comments} darkMode={darkMode} />
                </StyledTile>}
        </Div>
    )
}

function ExpandText({ darkMode }) {

    return (
        <SVGStyled
            className={`${darkMode}`}
            viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M22 21.998L16 22v-.998L20.34 21l-5.75-5.751.659-.66L21 20.34l.002-4.34H22zM8 2v.998L3.66 3l5.75 5.751-.659.66L3 3.66 2.998 8H2l.002-6z" />
            <path style={{ stroke: "none", fill: "none" }} d="M0 0h24v24H0z" />
        </SVGStyled>
    )
}