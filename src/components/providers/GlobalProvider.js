import { doc, getDoc, getDocs, query, collection, setDoc } from 'firebase/firestore'
import { createContext, useState, useEffect, useCallback } from "react";
import { auth, db } from '../../firebase/getAuthDb';
import { onAuthStateChanged } from 'firebase/auth';
import { onSnapshot } from 'firebase/firestore';

export const GlobalContext = createContext()

export function GlobalProvider({ children }) {

    const [user, setUser] = useState()
    const [posts, setPosts] = useState([])
    const [subs, setSubs] = useState()
    const [users, setUsers] = useState()
    const [likedPosts, setLikedPosts] = useState()
    const [likedComments, setLikedComments] = useState()
    const [comments, setComments] = useState([])
    const [subscribedSubs, setSubscribedSubs] = useState()

    // Auth
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setDoc(doc(db, "users", user.uid), {
                    status: "online"
                }, { merge: true }).then(() => {
                    getDoc(doc(db, "users", user.uid))
                        .then((user) => {
                            if (user) {
                                setUser({
                                    id: user.id,
                                    data: user.data(),
                                })
                            }
                        })
                        .catch((error) => {
                            console.log(error)
                        })
                })
            } else {
                setUser(null)
            }
        })
    }, [])

    // subs
    useEffect(() => {

        const q = query(collection(db, 'subs'))

        const unSub = onSnapshot(q, (querySnapShot) => {

            let subsArr = []

            querySnapShot.forEach((doc) => {
                subsArr.push({ id: doc.id, data: doc.data() })
            })

            setSubs(subsArr)
        })

        return () => unSub()

    }, [])

    // posts
    useEffect(() => {
        const q = query(collection(db, 'posts'))
        const unSub = onSnapshot(q, (querySnapShot) => {
            querySnapShot.docChanges().forEach((change) => {
                const post = { id: change.doc.id, data: change.doc.data() }
                if (change.type === 'added') {
                    // handle added post
                    setPosts((prevState) => [...prevState, post])
                } else if (change.type === 'modified') {
                    // handle modified post
                    setPosts((prevState) => prevState.map((p) => (p.id === post.id ? post : p)))
                } else if (change.type === 'removed') {
                    // handle removed post
                    setPosts((prevState) => prevState.filter((p) => p.id !== change.doc.id))
                }
            })
        })
        return () => unSub()
    }, [])

    // comments
    useEffect(() => {
        const commentsQ = query(collection(db, 'comments'))
        const unSub = onSnapshot(commentsQ, (QCommentSnapShot) => {
            QCommentSnapShot.docChanges().forEach((change) => {
                const comment = { id: change.doc.id, data: change.doc.data() }
                if (change.type === 'added') {
                    setComments((prev) => [...prev, comment])
                } else if (change.type === 'modified') {
                    setComments((prev) => prev.map(c => c.id === comment.id ? comment : c))
                }
            })
        })
        return () => unSub()
    }, [])

    // users
    useEffect(() => {

        const q = query(collection(db, 'users'))

        const unSub = onSnapshot(q, (querySnapShot) => {

            let usersArr = []
            querySnapShot.forEach((doc) => {
                usersArr.push({ id: doc.id, data: doc.data() })
            })

            setUsers(usersArr)
        })

        return () => unSub()

    }, [])

    // user liked posts
    useEffect(() => {

        if (!user) return

        const q = query(collection(db, 'users', user.id, 'likedPosts'))

        const unSub = onSnapshot(q, (querySnapShot) => {

            let likedPostsArr = []

            querySnapShot.forEach((doc) => {
                likedPostsArr.push({ id: doc.id, data: doc.data() })
            })

            setLikedPosts(likedPostsArr)
        })

        return () => unSub()

    }, [user])

    // user liked comments
    useEffect(() => {

        if (!user) return

        const q = query(collection(db, 'users', user.id, 'likedComments'))

        const unSub = onSnapshot(q, (querySnapShot) => {

            let likedCommentsArr = []

            querySnapShot.forEach((doc) => {
                likedCommentsArr.push({ id: doc.id, data: doc.data() })
            })

            setLikedComments(likedCommentsArr)
        })

        return () => unSub()

    }, [user])

    // user subscribed subs
    useEffect(() => {

        if (!user) return
        const unSub = onSnapshot(doc(db, 'users', user.id), (doc) => {
            setSubscribedSubs(doc.data().subscribedSubs)
        })
        return () => unSub()
    }, [user])

    const value = {
        user,
        subs,
        posts,
        users,
        likedPosts,
        likedComments,
        subscribedSubs,
        comments
    }

    return (
        <GlobalContext.Provider value={value}>
            {children}
        </GlobalContext.Provider>
    )
}
