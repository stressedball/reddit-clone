import React, { useEffect, useState } from 'react'
import { SVGStyled, Tile } from '../../../sc-css/atomic'
import DefaultOptions from './DefaultOptions'
import styled from 'styled-components'
import EditButton from '../../multi-usage/EditButton'
import DeleteButton from '../../multi-usage/DeleteButton'

export default function Etcetera({ user, post, darkMode }) {

    const [display, setDisplay] = useState(false)
    const [admin, setAdmin] = useState(false)

    useEffect(() => {
        if (post) {
            if (user) { post.data.poster === user.id ? setAdmin(true) : setAdmin(false) }
        }
    }, [post, user])

    return (

        <Tile className={`${darkMode}`} style={{ position: 'relative', padding: "8px" }}>

            <SVGStyled className={`${darkMode}`}
                onClick={() => setDisplay(!display)}
                viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg">
                <path d="M5.5 16c0-1.5-1.25-2.75-2.75-2.75-1.531 0-2.75 1.25-2.75 2.75s1.219 2.75 2.75 2.75c1.5 0 2.75-1.25 2.75-2.75zM13.938 16c0-1.5-1.25-2.75-2.75-2.75s-2.75 1.25-2.75 2.75 1.25 2.75 2.75 2.75 2.75-1.25 2.75-2.75zM22.406 16c0-1.5-1.219-2.75-2.75-2.75-1.5 0-2.75 1.25-2.75 2.75s1.25 2.75 2.75 2.75c1.531 0 2.75-1.25 2.75-2.75z"></path>
            </SVGStyled>

            <Menu className={darkMode}>
                {
                    display ?
                        admin ?
                            <>
                                <EditButton darkMode={darkMode} />
                                <DeleteButton darkMode={darkMode} />
                            </>
                            : <DefaultOptions post={post} darkMode={darkMode} user={user} />
                        : null
                }
            </Menu>
        </Tile>
    )
}

const Menu = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  background-color: #FFFFFF;
  border : 1px solid #EDEFF1;
  border-radius: 4px;
  box-shadow: 0 2px 4px 0 rgb(28 28 28 / 20%);

  &.dark {
    background-color: #1A1A1B;
    box-shadow: 0 2px 4px 0 rgb(215 218 220 / 20%);
    border: 1px solid #343536;
  }
`