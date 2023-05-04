import React, { useEffect, useState } from 'react'
import { getAvatar, handleAvatarSubmit } from './avatarData'
import { Text } from '../subSettingsStyle'
import styled from 'styled-components'
import { darkHoverLight, lightGrayHover } from '../../../../sc-css/COLORS'

export default function AvatarSettings({ sub, darkMode }) {

    const [path, setPath] = useState()

    useEffect(() => {
        async function fetchData() {
            if (!sub.data.avatar) return
            const path = await getAvatar(sub)
            setPath(path)
        }
        fetchData()
    }, [sub])

    return (
        <div className={`${darkMode}`}>
            <Text className='legend'>Manage your sub avatar</Text>

            <ImageContainer className={darkMode}>
                <img
                    src={`${path}`}
                    onClick={() => { handleAvatarUpload(sub) }}
                    style={{ width: "80px", height: "80px", borderRadius: "50%", border: `1px solid inherit` }}
                    alt="avatar-sub-settings"
                />
            </ImageContainer>
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


const ImageContainer = styled.div`
    padding:8px;
    max-width: fit-content;
    border-radius:4px;

    &:hover {
        cursor:pointer;
        background-color: ${lightGrayHover};
    }

    &.dark:hover {
        background-color: ${darkHoverLight};
    }
`