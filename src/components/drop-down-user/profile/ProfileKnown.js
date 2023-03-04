import React from 'react'
import UserAvatar from '../../multi-usage/UserAvatar'
import styled from 'styled-components'

export default function ProfileKnown({ darkMode, handleDisplay, user }) {

    return (
        <div onClick={() => handleDisplay()}>

            <p style={{ padding: '0', margin: "0" }} className='drop-down-user'
            >Welcome <strong>{user.data.userName}</strong></p>

            <UserAvatar user={user} />

        </div>
    )
}
