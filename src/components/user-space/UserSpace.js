import React, { useContext, useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { GlobalContext } from '../providers/GlobalProvider'
import UserPosts from './UserPosts'
import UserComments from './UserComments'

export default function UserSpace() {

  const { users, posts, subs } = useContext(GlobalContext)
  const [user, setUser] = useState()
  const userId = useLocation().pathname.split('/')[2]

  useEffect(() => {
    if (users !== undefined) setUser(users.filter(user => user.id === userId))
  }, [userId, users])

  if (users === undefined || posts === undefined || subs === undefined || user === undefined) return <div>Fetching data...</div>

  const userPosts = posts.filter(post => post.data.poster === userId)

  let userComments = []
  posts.map(post => {
    post.comments.filter(comment => {
      if (comment.data.poster === userId) {
        let object = { comment: comment, postTitle: post.data.title, poster: post.data.poster, sub: post.data.parent }
        userComments.push(object)
      }
    })
  })

  // sort by date
  let userFeed = userPosts.concat(userComments)

  userFeed.sort((a, b) => {
    if (a.comment && b.comment) {
      return Date.parse(b.comment.data.timeStamp.toDate()) - Date.parse(a.comment.data.timeStamp.toDate())
    }
    if (a.comment && !b.comment) {
      return Date.parse(b.data.timeStamp.toDate()) - Date.parse(a.comment.data.timeStamp.toDate())
    }
    if (!a.comment && b.comment) {
      return Date.parse(b.comment.data.timeStamp.toDate()) - Date.parse(a.data.timeStamp.toDate())
    }
    if (!a.comment && !b.comment) {
      return Date.parse(b.data.timeStamp.toDate()) - Date.parse(a.data.timeStamp.toDate())
    }
  })

  return (
    userFeed.map(el => {
      return (
        el.comment ? <UserComments users={users} user={user} subs={subs} comment={el} />
          :
          <UserPosts subs={subs} post={el} />
      )
    })
  )

}

