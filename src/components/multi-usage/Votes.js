import {useContext, useEffect, useState} from 'react';
import styled from 'styled-components';
import {GlobalContext} from '../providers/GlobalProvider';
import AuthenticateUser from '../log-in_sign-up/AuthenticateUser';

export default function Votes({darkMode, votes, handleVote, upVote, downVote}) {
    const {user} = useContext(GlobalContext);
    const [localUpVote, setLocalUpVote] = useState();
    const [localDownVote, setLocalDownVote] = useState();
    const [flag, setFlag] = useState(false);

    const handleUserVote = (e) => {
        if (!user) {
            setFlag(true);
            return;
        }
        handleVote(e);
    };

    const handleLoginScreen = () => setFlag(false);

    useEffect(() => {
        setLocalDownVote(downVote);
        setLocalUpVote(upVote);
    }, [upVote, downVote]);

    return (
        <>
            <StyledVote
                onClick={handleUserVote}
                className={`${localUpVote} ${darkMode}`}
                data-key='vote'
                data-value='1'
                viewBox='0 0 24 24'
                xmlns='http://www.w3.org/2000/svg'
            >
                <path
                    data-value='1'
                    data-key='vote'
                    d='M4 14h4v7a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-7h4a1.001 1.001 0 0 0 .781-1.625l-8-10c-.381-.475-1.181-.475-1.562 0l-8 10A1.001 1.001 0 0 0 4 14z'
                />
            </StyledVote>

            <Count className={`${localDownVote} ${localUpVote}`}>{votes}</Count>

            <StyledVote
                onClick={handleUserVote}
                className={`${localDownVote} ${darkMode}`}
                data-key='vote'
                data-value='-1'
                viewBox='0 0 24 24'
                xmlns='http://www.w3.org/2000/svg'
            >
                <path
                    data-value='-1'
                    data-key='vote'
                    d='M20.901 10.566A1.001 1.001 0 0 0 20 10h-4V3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v7H4a1.001 1.001 0 0 0-.781 1.625l8 10a1 1 0 0 0 1.562 0l8-10c.24-.301.286-.712.12-1.059z'
                />
            </StyledVote>

            {flag ? <AuthenticateUser handleLoginScreen={handleLoginScreen} /> : null}
        </>
    );
}

const Count = styled.p`
    margin: 0;
    font-size: 12px;
    font-weight: 700;

    &.up-vote {
        color: red;
    }

    &.down-vote {
        color: rgb(0 121 211);
    }
`;

const StyledVote = styled.svg`
    color: rgb(135, 138, 140);
    height: 100%;
    fill: none;
    stroke: currentColor;
    stroke-width: 2px;
    max-height: 22px;
    padding: 4px;
    border-radius: 4px;

    &:hover {
        cursor: pointer;
        background-color: rgba(0, 0, 0, 0.04);
    }

    &.dark:hover {
        background-color: rgba(255, 255, 255, 0.04);
    }

    &[data-value='1']:hover {
        stroke: red;
    }

    &[data-value='-1']:hover {
        stroke: rgb(0 121 211);
    }

    &.up-vote,
    &.down-vote {
        stroke-width: 1px;
    }

    &.up-vote {
        fill: red;
        stroke: red;
    }

    &.down-vote {
        fill: rgb(0 121 211);
        stroke: rgb(0 121 211);
    }
`;
