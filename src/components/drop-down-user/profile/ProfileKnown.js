import React from 'react'
import UserAvatar from '../../multi-usage/UserAvatar'
import { HorizontalFlex, SVGStyled } from '../../../sc-css/atomic'

export default function ProfileKnown({ handleDisplay, user }) {

    return (
        <HorizontalFlex className='drop-down-user' style={{ gap: "3px", height: "100%" }} onClick={() => handleDisplay()}>

            <HorizontalFlex style={{ width: "24px" }}>
                <UserAvatar user={user} navigation={false} />
            </HorizontalFlex>

            <p style={{ padding: '0', margin: "0" }} className='drop-down-user'>{user.data.userName}</p>

            {/* small arrow in dropdown header */}
            <SVGStyled onClick={() => handleDisplay()} className='drop-down-user' viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><path d="M759.2 419.8L697.4 358 512 543.4 326.6 358l-61.8 61.8L512 667z" />
            </SVGStyled>
        </HorizontalFlex>
    )
}
