import React, { useEffect, useState } from 'react'
import { getAvatar, handleAvatarSubmit } from './avatarData'

export default function AvatarSettings({ sub, darkMode }) {

    const [path, setPath] = useState()
    const [display, setDisplay] = useState()

    useEffect(() => {
        async function fetchData() {
            if (!sub.data.avatar) return
            const path = await getAvatar(sub)
            setPath(path)
        }
        fetchData()
    }, [sub])

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
                    handleAvatarUpload(sub)
                }}
                style={{ width: "50px", height:"50px", borderRadius: "50%", border: "1px solid" }}
                alt=""
            />

            {
                display ?
                    <p id='avatar-message' className={`${darkMode}`}
                    >Click to upload a new avatar</p>
                    : null
            }

        </div>

    )
}


async function handleAvatarUpload(sub) {
    const imageUpload = document.createElement('input')
    imageUpload.type = 'file'
    imageUpload.onchange = async (e) => {
        const avatar = e.target.files[0]
        handleAvatarSubmit(sub, avatar)
    }
    imageUpload.click()
}


