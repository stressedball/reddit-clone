import React, { useContext, useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { GlobalContext } from '../providers/GlobalProvider'
import UserPosts from './UserPosts'
import UserComments from './UserComments'
import { MainOutlet } from '../../sc-css/atomic'
import SideContent from '../home/SideContent'

export default function UserSpace() {

  const { comments, users, posts, subs } = useContext(GlobalContext)
  const location = useLocation().pathname.split('/')
  const [user, setUser] = useState()
  const [userId, setUserId] = useState()
  const [userPosts, setUserPosts] = useState()
  const [userFeed, setUserFeed] = useState()
  const [userComments, setUserComments] = useState()

  useEffect(() => { setUserId(location[2]) }, [location])

  useEffect(() => { if (users && userId) setUser(users.filter(user => user.id === userId)) }, [users, userId])

  useEffect(() => {
    if (user && posts) { setUserPosts(posts.filter(post => post.data.poster === userId)) }
  }, [posts, user])

  useEffect(() => {
    if (user && posts) {
      let arr = []
      for (const index in comments) {
        const comment = comments[index]
        if (comment.data.poster === userId && !comment.data.thread) {
          const post = posts.filter(post => post.id === comment.data.parent)[0]
          let object = { comment: comment, postTitle: post.data.title, poster: post.data.poster, sub: post.data.parent, timeStamp: post.data.timeStamp }
          arr.push(object)
        } else if (comment.data.poster === userId && comment.data.thread) {
          // since comments are stored in database by ID, common thread comment ID
          // I need to get to the top level comment, ie the one that has a parent as property
          // comments that are replies to other comments have a thread property that is the parent comment ID
          const parentComment = comments.filter(c => c.id === comment.data.thread)[0]
          const rootComment = getPost(comments, comment) // function to get root level comment
          const post = posts.filter(post => post.id === rootComment.data.parent)[0]
          let object = { comment: comment, postTitle: post.data.title, poster: post.data.poster, sub: post.data.parent, parentComment: parentComment, timeStamp: comment.data.timeStamp }
          arr.push(object)
        }
      }
      setUserComments(arr)
    }
  }, [posts, user])

  useEffect(() => {
    if (userComments && userPosts) {
      setUserFeed(userPosts.concat(userComments).sort((a, b) => {
        if (a.comment && b.comment) {
          return Date.parse(b.comment.data.timeStamp.toDate()) - Date.parse(a.comment.data.timeStamp.toDate())
        } else if (a.comment && !b.comment) {
          return Date.parse(b.data.timeStamp.toDate()) - Date.parse(a.comment.data.timeStamp.toDate())
        } else if (!a.comment && b.comment) {
          return Date.parse(b.comment.data.timeStamp.toDate()) - Date.parse(a.data.timeStamp.toDate())
        } else {
          return Date.parse(b.data.timeStamp.toDate()) - Date.parse(a.data.timeStamp.toDate())
        }
      }))
    }
  }, [userComments, userPosts])

  if (!userFeed) return <div>Fetching data...</div>

  return (
    <MainOutlet style={{ justifyContent: "center" }}>

      <div style={{ marginRight: "12px" }}>
        {
          userFeed.map(el => {
            return (
              el.comment ?
                <UserComments key={el.comment.id} users={users} user={user} subs={subs} comment={el} />
                :
                <UserPosts key={el.id} subs={subs} post={el} />
            )
          })
        }
      </div>

      <SideContent />

    </MainOutlet>
  )
}

function getPost(comments, comment) {

  if (comments.filter(c => c.id === comment.data.thread).length > 0) {
    return getPost(comments, comments.filter(c => c.id === comment.data.thread)[0])
  } else return comment

}