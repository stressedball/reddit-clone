import { useContext } from "react"
import { GlobalContext } from "../../providers/GlobalProvider"
import { Text } from "./subSettingsStyle"
import { useState } from "react"
import { useEffect } from "react"
import styled from "styled-components"
import SearchSVG from "../../multi-usage/SVGs/SearchSVG"
import { ConfirmButton, Error, HorizontalFlex, SVGStyled } from "../../../sc-css/atomic"
import { darkBorder, darkHoverLight, darkMainText, lightBorder, lightGrayHover } from "../../../sc-css/COLORS"
import { doc, setDoc } from "firebase/firestore"
import { db } from "../../../firebase/getAuthDb"
import SmallArrow from "../../multi-usage/SVGs/SmallArrow"

export default function TopicSettings({ sub, darkMode }) {

    const { topics } = useContext(GlobalContext)
    const [display, setDisplay] = useState(false)
    const [searchString, setSearchString] = useState('')
    const [filteredTopics, setFilteredTopics] = useState()
    const [topic, setTopic] = useState()
    const [error, setError] = useState(false)
    const handleError = () => setError(!error)

    const resetTopic = () => {
        setError(false)    
        setSearchString('')
        setFilteredTopics()
        setTopic()
    }

    useEffect(() => {
        if (!topics) return
        if (searchString === '') setFilteredTopics(topics)
        else setFilteredTopics(topicsFilterFunction(searchString, topics))
    }, [searchString])

    useEffect(() => {
        const handleDisplay = (e) => {
            if (!e.target.classList.contains('topic-menu')) {
                setDisplay(false)
            }
        }
        window.addEventListener('click', handleDisplay)
        return () => window.removeEventListener('click', handleDisplay)
    }, [])

    if (!topics) return

    return (
        <Parent className={darkMode}>

            <Text className="legend">Set the sub topic</Text>

            {display ?
                <DropDownHeader>
                    <SearchSVG />
                    <StyledInput id="topic-input" autoFocus={true} className={`${darkMode} topic-menu`} value={searchString} onChange={(e) => setSearchString(e.target.value)} />
                </DropDownHeader>
                :
                <HorizontalFlex style={{ borderColor: "inherit", color: "inherit" }}>
                    <DropDownHeader className="topic-menu" onClick={() => setDisplay(!display)}>
                        {
                            topic ?
                                <p style={{ textTransform: "capitalize", margin: "0", fontSize: "14px", width: "100%" }} className="topic-menu">{topic.data.name}</p>
                                :
                                <p style={{ margin: "0", fontSize: "14px" }} className="topic-menu">Link your sub to a topic to make it easier to find</p>
                        }
                        <SmallArrow className='topic-menu' darkMode={darkMode} />
                    </DropDownHeader>
                    {
                        topic
                            ?
                            <ConfirmButton className={`${darkMode} enabled`} onClick={async () => {
                                await updateSubTopic(sub, topic, handleError, resetTopic)
                            }}>Save changes</ConfirmButton>
                            : null
                    }
                    {error ? <Error>Error setting topic. Please try again.</Error> : null}
                </HorizontalFlex>
            }

            {
                display ?
                    <TopicsContainer>
                        {
                            filteredTopics.map(topic => {
                                return (
                                    <Bubble darkMode={darkMode} key={topic.id}
                                        onClick={() => setTopic(topic)}
                                    >{topic.data.name}</Bubble>
                                )
                            })
                        }
                    </TopicsContainer>
                    : null
            }
        </Parent>
    )
}

function topicsFilterFunction(string, topics) {
    if (!topics) return []
    if (string === "") return topics
    const arr = topics.filter(topic => topic.data.name.toLowerCase().includes(string.toLowerCase()))
    return arr
}

async function updateSubTopic(sub, topic, handleError, resetTopic) {
    try {
        setDoc(doc(db, 'subs', sub.id),
            { topic: topic.id },
            { merge: true })
        resetTopic()
    } catch (error) {
        handleError()
    }
}

const Parent = styled.div`
    border-color: ${lightBorder};

    &.dark {
        border-color: ${darkBorder};
        color:${darkMainText};
    }
`

const DropDownHeader = styled(HorizontalFlex)`
    border: 1px solid;
    border-color: inherit;
    min-width: 270px;
    border-radius:4px;  
    padding:4px 8px;
    box-sizing:border-box;

    &:hover {
        cursor:pointer;
    }
`

const StyledInput = styled.input`
    border: none;
    width: 100%;
    background-color:inherit;
    color:inherit;

    &:focus {
        outline:none;
    }
`

const TopicsContainer = styled(HorizontalFlex)`
    flex-wrap: wrap;
    border: 1px solid;
    border-color:inherit;
    padding: 12px;
    margin-top: 12px;
    border-radius:4px;
    gap:6px;
`

const Bubble = styled.p`
    border-radius:4px;
    font-size:13px;
    font-weight:500;
    max-width: fit-content;
    margin:0;
    border: 1px solid;
    border-color:inherit;
    padding:3px;
    text-transform:capitalize;

    &:hover {
        cursor:pointer;
        background-color: ${props => props.darkMode === 'dark' ? darkHoverLight : lightGrayHover};
    }
`