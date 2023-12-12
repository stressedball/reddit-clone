import React, {useEffect, useState} from 'react';
import {SVGStyled, Tile} from '../../../sc-css/atomic';
import DefaultOptions from './DefaultOptions';
import styled from 'styled-components';
import EditButton from '../../multi-usage/EditButton';
import DeleteButton from '../../multi-usage/DeleteButton';

export default function Etcetera({handleEditPost, user, post, darkMode}) {
    const [display, setDisplay] = useState(false);
    const [admin, setAdmin] = useState(false);
    const [isHover, setIsHover] = useState('');

    useEffect(() => {
        if (post) {
            if (user) {
                post.data.poster === user.id ? setAdmin(true) : setAdmin(false);
            }
        }
    }, [post, user]);

    useEffect(() => {
        if (display) setIsHover('no-hover');
        else setIsHover('');

        const closeMenu = (e) => {
            if (!e.target.classList.contains('post-edit-options')) setDisplay(false);
        };
        window.addEventListener('click', closeMenu);
        return () => window.removeEventListener('click', closeMenu);
    }, [display]);

    return (
        <Tile
            className={`${darkMode} option post-edit-options ${isHover}`}
            onClick={() => setDisplay(!display)}
            style={{position: 'relative', padding: '8px'}}
        >
            <SVGStyled
                style={{stroke: 'none'}}
                className={`${darkMode} post-edit-options`}
                viewBox='0 0 32 32'
                version='1.1'
                xmlns='http://www.w3.org/2000/svg'
            >
                <path
                    className='post-edit-options'
                    d='M5.5 16c0-1.5-1.25-2.75-2.75-2.75-1.531 0-2.75 1.25-2.75 2.75s1.219 2.75 2.75 2.75c1.5 0 2.75-1.25 2.75-2.75zM13.938 16c0-1.5-1.25-2.75-2.75-2.75s-2.75 1.25-2.75 2.75 1.25 2.75 2.75 2.75 2.75-1.25 2.75-2.75zM22.406 16c0-1.5-1.219-2.75-2.75-2.75-1.5 0-2.75 1.25-2.75 2.75s1.25 2.75 2.75 2.75c1.531 0 2.75-1.25 2.75-2.75z'
                ></path>
            </SVGStyled>

            <Menu className={`${darkMode} post-edit-options`}>
                {display ? (
                    <>
                        {admin ? (
                            <>
                                <EditButton handleEdit={handleEditPost} darkMode={darkMode} />
                                <DeleteButton darkMode={darkMode} />
                            </>
                        ) : null}
                        <DefaultOptions post={post} darkMode={darkMode} user={user} />
                    </>
                ) : null}
            </Menu>
        </Tile>
    );
}

const Menu = styled.div`
    position: absolute;
    top: 100%;
    left: 0;
    background-color: #ffffff;
    border: 1px solid #edeff1;
    border-radius: 4px;
    box-shadow: 0 2px 4px 0 rgb(28 28 28 / 20%);

    &.dark {
        background-color: #1a1a1b;
        box-shadow: 0 2px 4px 0 rgb(215 218 220 / 20%);
        border: 1px solid #343536;
    }

    & > * {
        min-width: 100%;
    }
`;
