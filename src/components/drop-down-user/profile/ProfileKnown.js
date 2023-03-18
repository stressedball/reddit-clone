import React from 'react'
import UserAvatar from '../../multi-usage/UserAvatar'
import styled from 'styled-components'
import { HorizontalFlex } from '../../../sc-css/atomic'

export default function ProfileKnown({ darkMode, handleDisplay, user }) {

    return (
        <HorizontalFlex className='drop-down-user' style={{ gap: "3px" }} onClick={() => handleDisplay()}>

            <p style={{ padding: '0', margin: "0" }} className='drop-down-user'
            >Welcome <strong className='drop-down-user'>{user.data.userName}</strong></p>

            <UserAvatar user={user} />

        </HorizontalFlex>
    )
}
