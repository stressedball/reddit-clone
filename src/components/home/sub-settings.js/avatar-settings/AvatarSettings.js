import React, { useEffect, useState } from 'react'
import { getAvatar, handleAvatarSubmit } from './avatarData'

export default function AvatarSettings({ sub, darkMode }) {

    const [avatar, setAvatar] = useState()
    const [path, setPath] = useState()
    const [display, setDisplay] = useState()

    useEffect(() => {
        async function fetchData() {
            if (!sub.data.avatar) return
            const path = await getAvatar(sub)
            setPath(path)
        }
        fetchData()
    }, [])

    return (
        <div style={{ position: "relative" }} className={`${darkMode}`}>
            <img
                src={`${path}`}
                onMouseOver={(e) => {
                    e.preventDefault()
                    setDisplay(true)
                }}
                onMouseOut={(e) => {
                    e.preventDefault()
                    setDisplay(false)
                }}
                onClick={() => {

                }}
                style={{ width: "50px", borderRadius: "50%", border: "1px solid" }}
                alt=""
            />

            {
                display ?
                    <p id='avatar-message' className={`${darkMode}`}
                    >Click on avatar to change it</p>
                    : null
            }

        </div>

    )
}

// function Avatar({ sub, darkMode, setAvatar }) {



//     useEffect(() => { }, [sub.data.avatar])

//     return (
//         <div className='flex horizontal' style={{ gap: "1rem" }}>

//             <img style={{ width: "50px", borderRadius: "50%", border: "1px solid" }}
//                 src={`${path}`} alt="" />

//             <input type="file" className={`${darkMode}`}
//                 onChange={(e) => setAvatar(e.target.files[0])}
//             ></input>
//         </div>
//     )
// }

