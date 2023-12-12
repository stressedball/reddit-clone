import { useContext, useEffect, useState } from "react"
import { db } from "../../../firebase/getAuthDb"
import { addDoc, collection, serverTimestamp } from "firebase/firestore"
import { ThemeContext } from "../../providers/ThemeProvider"
import { GlobalContext } from "../../providers/GlobalProvider"
import { Tile, StyledOptionText, TextArea, CancelButton, ConfirmButton, BottomButtonsDiv, CommentActiveContainer } from "../../../sc-css/atomic"
import CommentSVG from "../../multi-usage/SVGs/CommentSVG"

export function ReplyToComment({ user, handleReply, darkMode }) {

    return (
        <Tile className={`${darkMode} option`} onClick={() => handleReply()}>

            <CommentSVG darkMode={darkMode} size='small' />

            <StyledOptionText>Reply</StyledOptionText>

        </Tile>
    )
}

export function ReplyContainer({ handleReply, comment }) {

    const { user } = useContext(GlobalContext)
    const { darkMode } = useContext(ThemeContext)
    const [buttonEnable, setButtonEnable] = useState()
    const [text, setText] = useState()

    useEffect(() => {
        if (text) setButtonEnable('enabled')
        else setButtonEnable()
    }, [text])

    async function handleSubmit() {
        if (!text) return
        if (!user) return

        try {
            addDoc(collection(db, 'comments'), {
                poster: `${user.id}`,
                text: `${text}`,
                timeStamp: serverTimestamp(),
                votes: 0,
                thread: comment.id
            })
            handleReply()
        } catch (error) {
            alert(error)
        }
    }

    return (
        <CommentActiveContainer>

            <TextArea className={darkMode} onChange={(e) => { setText(e.target.value) }} />

            <BottomButtonsDiv className={darkMode}>
                <CancelButton className={darkMode} onClick={() => handleReply()}>Cancel</CancelButton>
                <ConfirmButton className={buttonEnable} onClick={handleSubmit}>Reply</ConfirmButton>
            </BottomButtonsDiv>

        </CommentActiveContainer>
    )
}






