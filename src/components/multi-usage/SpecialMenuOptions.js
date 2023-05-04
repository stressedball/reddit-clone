import React, { useContext } from 'react'
import { SVGStyled } from '../../sc-css/atomic'
import { ThemeContext } from '../providers/ThemeProvider'

export function HomeMenuTile() {

    const { darkMode } = useContext(ThemeContext)

    return (
        <SVGStyled style={{ stroke: "none" }} className={`${darkMode}`}
            viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M23.772 10.63c-.19.25-.48.37-.77.37-.22 0-.45-.07-.63-.23l-10.08-8.24L12 2.29l-.302.245-10.07 8.234c-.18.16-.41.23-.63.23-.29 0-.58-.12-.77-.37-.35-.42-.29-1.05.14-1.4l11-9c.37-.31.9-.3 1.26 0l4.392 3.59c.08-.47.49-.82.98-.82h2c.55 0 1 .45 1 1v3.08l2.63 2.15c.432.35.492.98.142 1.4z" />
            <path d="M22 13v9c0 1.1-.9 2-2 2H3.998c-1.1 0-2-.9-2-2v-9c0-.55.45-1 1-1s1 .45 1 1v8.5c0 .28.22.5.5.5h4.5v-7c0-.55.45-1 1-1H14c.55 0 1 .45 1 1v7h4.5c.28 0 .5-.22.5-.5V13c0-.55.45-1 1-1s1 .45 1 1z" />
        </SVGStyled>
    )
}

export function CreatePostTile() {

    const { darkMode } = useContext(ThemeContext)

    return (
        <SVGStyled
            className={`${darkMode}`}
            viewBox="0 0 1920 1920" xmlns="http://www.w3.org/2000/svg">
            <path d="M915.744 213v702.744H213v87.842h702.744v702.744h87.842v-702.744h702.744v-87.842h-702.744V213z" fillRule="evenodd" />
        </SVGStyled>
    )
}
