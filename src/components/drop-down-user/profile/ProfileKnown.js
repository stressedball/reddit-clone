import React from 'react'
import UserAvatar from '../../multi-usage/UserAvatar'
import { HorizontalFlex } from '../../../sc-css/atomic'

export default function ProfileKnown({ handleDisplay, user }) {

    return (
        <HorizontalFlex className='drop-down-user' style={{ gap: "3px" }} onClick={() => handleDisplay()}>

            <p style={{ padding: '0', margin: "0" }} className='drop-down-user'
            >Welcome <strong className='drop-down-user'>{user.data.userName}</strong></p>

            <div style={{ width: "24px", display: "flex" }}>
                <UserAvatar user={user} />
            </div>

        </HorizontalFlex>
    )
}
