import { useContext } from 'react'
import { darkTwo, lightBackgroundColor } from "../../sc-css/COLORS"
import styled from 'styled-components'
import { HorizontalFlex } from '../../sc-css/atomic'
import { ThemeContext } from '../providers/ThemeProvider'

const UserName = styled.p`
  font-weight: 400;
  color: #0079d3;

  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }

  &.dark {
    color: #d7dadc;
  }
`

const LightGreyText = styled.p`
  color: rgb(135 138 140);

  &.dark {
    color:rgb(129 131 132);
  }

  & > .hoverable:hover {
    text-decoration: underline;
    cursor: pointer;
  }
`

const Sub = styled.p`
  font-weight:700;

  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }
`

const Div = styled.div`
  font-size:12px;
  background-color:${lightBackgroundColor};
  margin-bottom:8px;
  border-radius:4px;

  &.dark {
    background-color: ${darkTwo};
  }
  
`

export default function UserComments({ users, user, subs, comment }) {

    const { darkMode } = useContext(ThemeContext)

    return (
        <Div className={`${darkMode}`}>

            <HorizontalFlex style={{ gap: "3px" }}>

                <UserName className={`${darkMode}`}>{user[0].data.userName}</UserName>

                <LightGreyText className={`${darkMode}`}>commented on</LightGreyText>

                <p>{comment.postTitle} &middot;</p>

                <Sub> r/{subs.filter(sub => sub.id === comment.sub)[0].data.name}</Sub>

                <LightGreyText>Posted by <span className='hoverable'>u/{users.filter(user => user.id === comment.poster)[0].data.userName}</span></LightGreyText>

            </HorizontalFlex>

            <div>
                <HorizontalFlex style={{ gap: "2px" }}>

                    <p>{user[0].data.userName}</p>

                    <LightGreyText>{comment.comment.data.votes} points</LightGreyText>

                    <LightGreyText>&middot;</LightGreyText>

                    <LightGreyText>{comment.comment.data.timeStamp.toDate().toDateString()}</LightGreyText>

                </HorizontalFlex>
                
                <p>{comment.comment.data.text}</p>
            </div>
        </Div>
    )



}