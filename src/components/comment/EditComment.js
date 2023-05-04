import { useContext, useEffect, useState } from "react";
import { db } from "../../firebase/getAuthDb";
import { BottomButtonsDiv, CancelButton, CommentActiveContainer, ConfirmButton, TextArea } from "../../sc-css/atomic";
import { ThemeContext } from "../providers/ThemeProvider";
import { doc, setDoc } from "firebase/firestore";

export default function EditComment({ handleEdit, comment }) {

    const { darkMode } = useContext(ThemeContext)
    const [newText, setNewText] = useState()
    const [isEnabled, setIsEnabled] = useState('')

    useEffect(() => {
        if (comment) setNewText(comment.data.text)
    }, [comment])

    useEffect(() => {
        if (newText === '' || newText === comment.data.text) setIsEnabled('')
        else setIsEnabled('enabled')
    }, [newText])

    return (
        <CommentActiveContainer>

            <TextArea className={darkMode} value={newText} onChange={(e) => setNewText(e.target.value)} />

            <BottomButtonsDiv className={darkMode}>

                <CancelButton onClick={async () => {
                    await handleEdit()
                }} className={darkMode}>Cancel</CancelButton>

                <ConfirmButton onClick={() => {
                    setEditComment(comment, newText, handleEdit)
                }} className={`${darkMode} ${isEnabled}`}>Save</ConfirmButton>

            </BottomButtonsDiv>
        </CommentActiveContainer>
    )
}

async function setEditComment(comment, text, handleEdit) {
    if (comment.data.text === text || text === "") return

    try {
        setDoc(doc(db, 'comments', comment.id),
            { text: text },
            { merge: true }
        )
        handleEdit()
    } catch (error) {
        alert('problem editing comment, try again')
    }

}