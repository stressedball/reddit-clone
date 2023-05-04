import { useEffect } from "react"
import { useState } from "react"
import { CompactPicker } from "react-color"
import { doc, setDoc } from "firebase/firestore"
import { db } from '../../../firebase/getAuthDb'
import { Blue } from "../../../sc-css/COLORS"
import { BottomButtonsDiv, CancelButton, ConfirmButton, HorizontalFlex } from "../../../sc-css/atomic"

export default function SubSkin({ darkMode, sub }) {

    const [color, setColor] = useState()
    const [isEnabled, setIsEnabled] = useState('')

    useEffect(() => {
        if (sub && sub.data.skin !== '') setColor(sub.data.skin)
        else setColor(Blue)
    }, [sub])

    useEffect(() => {
        if (!sub) return
        if (sub.data.skin !== color) setIsEnabled('enabled')
        else setIsEnabled('')
    }, [color, sub])

    return (
        <HorizontalFlex style={{ alignItems: "stretch" }}>

            <CompactPicker color={color}
                onChange={(color) => { setColor(color.hex) }}
            />

            <div style={{ borderRadius: "4px", margin: "0 8px", flex: "1", minHeight: "100%", minWidth: "150px", backgroundColor: `${color}` }}></div>

            <BottomButtonsDiv className={darkMode}
                style={{ borderRadius: "4px", flexDirection: "column", minHeight: "100%", marginBottom: "0" }}>

                <ConfirmButton className={`${darkMode} ${isEnabled}`}
                    onClick={async () => await saveSkin(color, sub, setColor)}
                >Save changes</ConfirmButton>

                <CancelButton className={darkMode}
                    onClick={() => setColor(sub.data.skin)}
                >Cancel</CancelButton>

            </BottomButtonsDiv>
        </HorizontalFlex>
    )
}

async function saveSkin(color, sub, setColor) {
    try {
        setDoc(doc(db, 'subs', sub.id),
            { skin: color },
            { merge: true })
        setColor(color)
    } catch (error) {
        alert(error)
    }
}