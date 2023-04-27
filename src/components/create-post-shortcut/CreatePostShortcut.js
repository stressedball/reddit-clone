import React, { useContext } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { GlobalContext } from '../providers/GlobalProvider'
import { ThemeContext } from '../providers/ThemeProvider'
import PollShortcut from './PollShortcut'
import ImageShortcut from './ImageShortcut'
import UserAvatar from '../multi-usage/UserAvatar'
import styled from 'styled-components'
import { darkTwo, darkSecondary, lightBackgroundColor, lightBorder, lightGrayHover, darkDefaultBorder, lightDefaultBorder } from '../../sc-css/COLORS'

export default function CreatePostShortcut() {

    const { darkMode } = useContext(ThemeContext)
    const { user } = useContext(GlobalContext)
    const navigate = useNavigate()
    const location = useLocation().pathname.split('/')

    return (
        <CreatePostBar className={`${darkMode}`}>

            <div style={{ width: "38px", display: "flex", marginRight: "8px " }}>
                <UserAvatar navigation={true} user={user} />
            </div>

            <StyledInput className={`${darkMode}`} placeholder="Create a post"
                onClick={() => {
                    if (location[1] === 'r') navigate(`/r/${location[2]}/submit`)
                    else navigate('/submit')
                }}
            ></StyledInput>

            <ImageDiv>
                <ImageShortcut darkMode={darkMode} />
            </ImageDiv>
            <ImageDiv>
                <PollShortcut darkMode={darkMode} />
            </ImageDiv>

        </CreatePostBar>
    )
}


const CreatePostBar = styled.div`
    border:1px solid ${lightBorder};
    display:flex;
    align-items:center;
    border-radius: 4px;
    padding:8px;
    background-color:${lightBackgroundColor};
    margin-bottom:16px;

    &.dark {
        background-color:${darkSecondary};
        color:${darkTwo};
        border : 1px solid ${darkDefaultBorder};   
    }
`

const StyledInput = styled.input`
    flex: 1 0 auto;
    height: 38px;
    border-radius: inherit;
    margin-right: 8px;
    padding: 0 8px;
    border: 1px solid ${lightDefaultBorder};

    &:hover {
        border : 1px solid #0079d3;
    }

    &.dark {
        background-color:rgb(39, 39, 41);
        border : 1px solid ${darkDefaultBorder};
    }

    &.dark:hover {
        border : 1px solid ${lightBorder};
    }
`

const ImageDiv = styled.div`
    width:  40px;
    height:40px;
    display:flex;
    align-items:center;
    justify-content:center;
    border-radius:4px;

    &:hover {
        background-color:${lightGrayHover};
        cursor:pointer;
    }
`
