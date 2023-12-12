import { useContext, useEffect, useState } from 'react'
import styled from 'styled-components'
import { darkBorder, darkTwo, lightBackgroundColor, lightBorder } from "../../sc-css/COLORS"
import { HorizontalFlex } from '../../sc-css/atomic'
import { ThemeContext } from '../providers/ThemeProvider'
import CommentSVG from '../multi-usage/SVGs/CommentSVG'

export default function UserComments({ users, user, subs, comment }) {

  const { darkMode } = useContext(ThemeContext)

  if (!user) return <div>Loading user</div>

  return (
    <Container className={darkMode}>

      <HorizontalFlex style={{ gap: "3px" }}>

        <div style={{height:"100%", width:"40px", display:"flex", alignItems:"center", justifyContent:"center"}}><CommentSVG darkMode={darkMode} /></div>
        

        <UserName className={`${darkMode}`}>{user[0].data.userName}</UserName>

        <LightGreyText className={`${darkMode}`}>commented on</LightGreyText>

        <p style={{ margin: "0px" }}>{comment.postTitle} &middot;</p>

        <Sub> r/{subs.filter(sub => sub.id === comment.sub)[0].data.name}</Sub>

        <LightGreyText>Posted by <span className='hoverable'>u/{users.filter(user => user.id === comment.poster)[0].data.userName}</span></LightGreyText>

      </HorizontalFlex>

      {
        comment.parentComment ?
          <CommentBlock child={comment.comment} comment={comment.parentComment} users={users}
            darkMode={darkMode} bordered={true} colored={false} />
          :
          <CommentBlock child={null} comment={comment.comment} users={users}
            darkMode={darkMode} bordered={true} colored={true} />
      }
    </Container>
  )
}

function CommentBlock({ darkMode, child, comment, users, bordered, colored }) {

  const [hasBorder, setHasBorder] = useState()
  const [hasColor, setHasColor] = useState()
  const [space, setSpace] = useState(2)

  useEffect(() => {
    if (bordered) {
      setHasBorder('bordered')
      setSpace(8)
    }
  }, [bordered])
  
  useEffect(() => { if (colored) setHasColor('colored') }, [colored])

  return (
    <CommentContainer className={`${darkMode} ${hasBorder}`}>

      <ThreadDiv className={hasBorder}><Thread className={`${hasColor} ${darkMode}`} /></ThreadDiv>

      <CommentStyled className={`${darkMode} ${hasColor}`}>

        <CommentHeader users={users} comment={comment} />

        <p style={{ margin: "0", fontSize: "14px", fontWeight: "400", padding: "2px 0", paddingBottom: `${space}px` }}>{comment.data.text}</p>

        {/* <CommentOptions comment={comment} /> */}

        {
          child ?
            <CommentBlock child={null} comment={child} users={users}
            darkMode={darkMode} bordered={false} colored={true} />
            : null
        }

      </CommentStyled>
    </CommentContainer>
  )
}

function CommentHeader({ users, comment }) {

  return (
    <HorizontalFlex style={{ gap: "2px", minHeight: "16px", lineHeight: "20px" }}>

      <p style={{ margin: "0" }}>{users.filter(u => u.id === comment.data.poster)[0].data.userName}</p>

      <LightGreyText>{comment.data.votes} points</LightGreyText>

      <LightGreyText>&middot;</LightGreyText>

      <LightGreyText>{comment.data.timeStamp.toDate().toDateString()}</LightGreyText>

    </HorizontalFlex>
  )
}

const CommentContainer = styled(HorizontalFlex)`
  align-items: stretch; 
  margin: 0 8px ;
  box-sizing: border-box; 
  
  &.bordered {
    padding: 8px 0;
    border-top: 2px solid #EDEFF1;
  }

  &.dark.bordered {
    border-top : 2px solid #343536;
  }
`

const ThreadDiv = styled.div`
  padding-bottom : 0;

  &.bordered {
    padding-bottom: 4px;
  }
`

const Thread = styled.div`
  content: "";
  height: 100%;
  margin-left: 8px;
  border-left : 2px dashed #EDEFF1;
  margin-right: 8px;

  &.colored {
    margin-right: 16px;
  }

  &.dark {
    border-left : 2px dashed #343536;
  }
`

const CommentStyled = styled.div`
  padding: 4px 8px;
  border-radius: 4px;
  width: 100%;
  box-sizing: border-box;

  &.colored {
    background-color: rgb(0 121 211 / 5%);
  }

  &.colored.dark {
    background-color:rgb(215 218 220 / 5%);
  }
`

const Container = styled.div`
  font-size:12px;
  background-color:${lightBackgroundColor};
  margin-bottom:8px;
  border-radius:4px;
  width : 640px;
  border: 1px solid ${lightBorder};
  
  &.dark {
    background-color: ${darkTwo};
    border: 1px solid ${darkBorder};
  }
`

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
  margin: 0;
  
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
