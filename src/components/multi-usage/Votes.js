import { useContext } from "react"
import styled from "styled-components"
import { GlobalContext } from "../providers/GlobalProvider"


const StyledVote = styled.svg`
    color: rgb(135, 138, 140);
    height:22px;
    width:22px;

    &:hover {
        cursor:pointer;
        background-color: rgba(0, 0, 0, 0.04);
    }

    &.dark:hover {
        background-color: rgba(255, 255, 255, 0.04);
    }

    &[data-value="1"]:hover {
        color:red;
    }

    &[data-value="-1"]:hover {
        color:rgb(0 121 211);
    }
`

export default function Votes({ darkMode, item, handleVote, upVote, downVote }) {

    const { user } = useContext(GlobalContext)

    if (item === undefined) return <div>Loading</div>

    const handleUserVote = (e) => {
        if (user === null) return
        handleVote(e)
    }
    return (
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", width: "40px" }} >
            <StyledVote
                onClick={handleUserVote}
                className={`${upVote} ${darkMode}`}
                data-key="vote"
                data-value="1"
                fill="currentColor"
                viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12.781 2.375c-.381-.475-1.181-.475-1.562 0l-8 10A1.001 1.001 0 0 0 4 14h4v7a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-7h4a1.001 1.001 0 0 0 .781-1.625l-8-10zM15 12h-1v8h-4v-8H6.081L12 4.601 17.919 12H15z" /></StyledVote>
            <p style={{ margin: "0", fontSize: "12px", fontWeight: "700" }}>{item.data.votes}</p>
            <StyledVote
                onClick={handleUserVote}
                className={`${downVote} ${darkMode}`}
                data-key="vote"
                data-value="-1"
                fill="currentColor"
                viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M20.901 10.566A1.001 1.001 0 0 0 20 10h-4V3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v7H4a1.001 1.001 0 0 0-.781 1.625l8 10a1 1 0 0 0 1.562 0l8-10c.24-.301.286-.712.12-1.059zM12 19.399 6.081 12H10V4h4v8h3.919L12 19.399z" /></StyledVote>
        </div>
    )
}


