import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { GlobalContext } from '../providers/GlobalProvider';
import '../../css/sub-posts.css'
import PostsLists from '../subs/PostsList'

export default function SubList() {

    const navigate = useNavigate()
    const { posts, user, subs } = useContext(GlobalContext)

    if (subs === undefined || posts === undefined || user === undefined) {
        return <div>Loading data, sit tight</div>
    }

    // user subscribed subs, showing their posts
    let userSubs = []
    subs.filter(sub => {
        user.data.subscribed_subs.map(subId => {
            if (subId === sub.id) {
                userSubs.push(sub)
            }
        })
    })

    return (
        <PostsLists
            subs={userSubs}
        />
    )

}
