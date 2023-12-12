import React from 'react';
import UserAvatar from '../../multi-usage/UserAvatar';
import {HorizontalFlex} from '../../../sc-css/atomic';
import SmallArrow from '../../multi-usage/SVGs/SmallArrow';

export default function ProfileKnown({darkMode, handleDisplay, user}) {
    return (
        <HorizontalFlex
            className='drop-down-user'
            style={{width: '150px', justifyContent: 'space-between'}}
            onClick={() => handleDisplay()}
        >
            <HorizontalFlex>
                <HorizontalFlex style={{width: '24px', marginLeft: '4px'}}>
                    <UserAvatar user={user} navigation={false} />
                </HorizontalFlex>

                <p style={{padding: '0', margin: '0', marginLeft: '4px'}} className='drop-down-user'>
                    {user.data.userName}
                </p>
            </HorizontalFlex>
            <SmallArrow className='drop-down-user' onClick={() => handleDisplay()} darkMode={darkMode} />
        </HorizontalFlex>
    );
}
