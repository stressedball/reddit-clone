import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { HorizontalFlex, SVGStyled } from '../../sc-css/atomic'
import { darkBorder, darkTwo, lightBackgroundColor, lightBorder } from '../../sc-css/COLORS'
import SubAvatar from '../multi-usage/SubAvatar'
import { lightDefaultBorder } from '../../sc-css/COLORS'

export default function DropDownSub({ defaultSub, changeSub, darkMode, subs }) {

    const [displayMenu, setDisplayMenu] = useState(false)
    const [inputValue, setInputValue] = useState('')
    const [filteredSubs, setFilteredSubs] = useState([])

    const handleSubChange = (sub) => {
        setInputValue(sub.data.name)
        setDisplayMenu(false)
    }

    useEffect(() => {
        if (defaultSub) { setInputValue(defaultSub.data.name) }
    }, [defaultSub])

    useEffect(() => {
        const arr = subsFilterFunction(inputValue, subs)
        setFilteredSubs(arr)

        if (!subs) return

        const selectedSub = subs.filter(sub => sub.data.name === inputValue)[0]

        if (selectedSub) changeSub(selectedSub.id)
        else changeSub(undefined)

    }, [inputValue, subs])

    useEffect(() => {
        const closeDropDown = (e) => {
            if (!e.target.classList.contains('drop-down-create-sub')) {
                setDisplayMenu(false)
            }
        }
        window.addEventListener('click', closeDropDown)
        return () => window.removeEventListener('click', closeDropDown)
    }, [])

    return (
        <StyledHeader className={`${darkMode} drop-down-create-sub ${displayMenu}`} >
            <HorizontalFlex className='drop-down-create-sub' style={{ width: "100%" }}>
                {
                    displayMenu ?
                        <>
                            {/* Search icon */}
                            <SVGStyled style={{ height: "22px", width: "22px" }} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path d="M21.842 21.134l-6.843-6.843a7.317 7.317 0 1 0-.708.708l6.843 6.843a.5.5 0 1 0 .708-.708zM9.5 15.8a6.3 6.3 0 1 1 6.3-6.3 6.307 6.307 0 0 1-6.3 6.3z" /><path style={{ fill: "none", stroke: "none" }} d="M0 0h24v24H0z" />
                            </SVGStyled>
                            <StyledInput
                                autoFocus={true}
                                value={inputValue}
                                onChange={(e) => { setInputValue(e.target.value) }}
                                id="input"
                                className='drop-down-create-sub'
                                placeholder='Search communities' />
                        </>
                        :
                        <>
                            {
                                subs ?
                                    subs.filter(sub => sub.data.name === inputValue).length > 0 ?
                                        // sub avatar
                                        <HorizontalFlex onClick={() => setDisplayMenu(!displayMenu)} className='drop-down-create-sub' style={{ justifyContent: "center", height: "20px", width: "20px", marginRight: "8px" }}>
                                            <SubAvatar sub={subs.filter(sub => sub.data.name === inputValue)[0]} />
                                        </HorizontalFlex>
                                        :
                                        // default dashed circle 
                                        < SVGStyled className={`${darkMode} no-hover`}
                                            style={{ height: "22px", width: "22px" }}
                                            viewBox="0 0 27 27" xmlns="http://www.w3.org/2000/svg">
                                            <path fillRule="evenodd"
                                                d="m13.5 26.5c1.412 0 2.794-.225 4.107-.662l-.316-.949c-1.212.403-2.487.611-3.792.611v1m6.06-1.495c1.234-.651 2.355-1.498 3.321-2.504l-.721-.692c-.892.929-1.928 1.711-3.067 2.312l.467.884m4.66-4.147c.79-1.149 1.391-2.418 1.777-3.762l-.961-.276c-.356 1.24-.911 2.411-1.64 3.471l.824.567m2.184-5.761c.063-.518.096-1.041.097-1.568 0-.896-.085-1.758-.255-2.603l-.98.197c.157.78.236 1.576.236 2.405-.001.486-.031.97-.09 1.448l.993.122m-.738-6.189c-.493-1.307-1.195-2.523-2.075-3.605l-.776.631c.812.999 1.46 2.122 1.916 3.327l.935-.353m-3.539-5.133c-1.043-.926-2.229-1.68-3.512-2.229l-.394.919c1.184.507 2.279 1.203 3.242 2.058l.664-.748m-5.463-2.886c-1.012-.253-2.058-.384-3.119-.388-.378 0-.717.013-1.059.039l.077.997c.316-.024.629-.036.98-.036.979.003 1.944.124 2.879.358l.243-.97m-6.238-.022c-1.361.33-2.653.878-3.832 1.619l.532.847c1.089-.684 2.281-1.189 3.536-1.494l-.236-.972m-5.517 2.878c-1.047.922-1.94 2.01-2.643 3.212l.864.504c.649-1.112 1.474-2.114 2.441-2.966l-.661-.75m-3.54 5.076c-.499 1.293-.789 2.664-.854 4.072l.999.046c.06-1.3.328-2.564.788-3.758l-.933-.36m-.78 6.202c.163 1.396.549 2.744 1.14 4l.905-.425c-.545-1.16-.902-2.404-1.052-3.692l-.993.116m2.177 5.814c.788 1.151 1.756 2.169 2.866 3.01l.606-.796c-1.025-.78-1.919-1.721-2.646-2.783l-.825.565m4.665 4.164c1.23.65 2.559 1.1 3.943 1.328l.162-.987c-1.278-.21-2.503-.625-3.638-1.225l-.468.884m6.02 1.501c.024 0 .024 0 .048 0v-1c-.022 0-.022 0-.044 0l-.004 1" />
                                        </SVGStyled>
                                    : null
                            }

                            <DisplaySub className='drop-down-create-sub' onClick={() => setDisplayMenu(!displayMenu)}>
                                {
                                    inputValue === '' ?
                                        <SubTitle className='drop-down-create-sub'>
                                            Choose a community
                                        </SubTitle>
                                        :
                                        <SubTitle className='drop-down-create-sub'>
                                            r/{inputValue}
                                        </SubTitle>
                                }
                            </DisplaySub>
                        </>
                }

                <SVGStyled className='drop-down-create-sub' onClick={() => setDisplayMenu(!displayMenu)} viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><path d="M759.2 419.8L697.4 358 512 543.4 326.6 358l-61.8 61.8L512 667z" /></SVGStyled>
            </HorizontalFlex>

            {
                displayMenu ?
                    <DropDownStyled className={darkMode}>
                        <SearchResults handleSubChange={handleSubChange} filteredSubs={filteredSubs} />
                    </DropDownStyled>
                    : null
            }

        </StyledHeader >
    )
}

function SearchResults({ filteredSubs, handleSubChange }) {

    const [subs, setSubs] = useState([])

    useEffect(() => {
        if (filteredSubs) { setSubs(filteredSubs) }
    }, [filteredSubs])

    return (
        subs.map(sub => {
            return (
                <HorizontalFlex className='drop-down-create-sub' key={sub.id} onClick={() => handleSubChange(sub)} style={{ padding: "8px 0" }}>

                    <HorizontalFlex className='drop-down-create-sub' style={{ justifyContent: "center", height: "30px", width: "30px", paddingLeft: "8px" }}>
                        <SubAvatar sub={sub} />
                    </HorizontalFlex>

                    <div className='drop-down-create-sub' style={{ marginLeft: "8px" }}>
                        <SubTitle className='drop-down-create-sub' key={sub.id} >r/{sub.data.name}</SubTitle>

                        <SmallText className='drop-down-create-sub'>{sub.data.users.length} members</SmallText>
                    </div>
                </HorizontalFlex>

            )
        })
    )
}

function subsFilterFunction(string, subs) {
    if (!subs) return []
    if (string === "") return subs
    const arr = subs.filter(sub => sub.data.name.toLowerCase().includes(string.toLowerCase()))
    return arr
}

const StyledHeader = styled.div`
    width: 300px;
    position:relative;
    padding:0 8px;
    height: 40px;
    display: flex;
    align-items:center;
    border : 1px solid ${lightDefaultBorder};
    background-color: ${lightBackgroundColor};
    border-radius : 4px;
    box-sizing:border-box;
    margin-bottom : 8px;

    &.dark {
        background-color: ${darkTwo};
        border: 1px solid ${darkBorder};
    }

    &:hover {
        cursor:pointer;
    }

    &.true {
        box-shadow: 0 0 2px 1px #EDEFF1;
        border-bottom:none;
        border-bottom-right-radius:0;
        border-bottom-left-radius:0;
    }

    &.dark.true {
        box-shadow: 0 0px 2px 1px ${darkBorder};
    }
`

const StyledInput = styled.input`
    flex:1 0 auto;
    border: none;
    outline:none;
    background-color: inherit;
    color:inherit;
    padding-left: 8px;
    margin:0;
    font-size: 14px;
    font-weight: 500;
    font-family: inherit;
`

const DropDownStyled = styled.div`
    position:absolute;
    background-color: inherit;
    width: 100%;
    top: 39px; 
    left: -1px;
    z-index: 10;
    border: 1px solid ${lightDefaultBorder};
    border-top: none;
    box-shadow: inherit;
    // box-sizing:border-box;

    &.dark {
        border: 1px solid ${darkBorder};
    }

    &:last-child {
        border-bottom-right-radius:4px;
        border-bottom-left-radius:4px;
    }
`

const SmallText = styled.p`
  margin: 0; 
  font-size: 12px; 
  color: rgb(124, 124, 124); 
  fontWeight: 400;
  padding-left: 8px;
`

const DisplaySub = styled.div`
    flex:1 0 auto;
    border: none;
    outline:none;
    background-color: inherit;
    color:inherit;

    &:hover {
        cursor: text;
    }
`

const SubTitle = styled.p`
    margin:0;
    font-size: 14px;
    font-weight: 500;
    padding-left: 8px;
`