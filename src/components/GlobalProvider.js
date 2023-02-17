import { useQuery, useMutation, QueryCache } from '@tanstack/react-query'
import { doc, getDoc, getDocs, query, collection } from 'firebase/firestore'
import { createContext, useState, useEffect } from "react";
import { auth, db } from '../firebase/getAuthDb';
import { onAuthStateChanged } from 'firebase/auth';
import { onSnapshot } from 'firebase/firestore';

export const GlobalContext = createContext()

export function GlobalProvider({ children }) {

    const [userId, setUserId] = useState()
    const [userName, setUserName] = useState()
    const [posts, setPosts] = useState([])
    const [subs, setSubs] = useState()
    const [comments, setComments] = useState([])

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {

            if (user) {

                getDoc(doc(db, "users", user.uid))
                    .then((user) => {
                        if (user) {
                            setUserName(user.data().userName)
                            setUserId(user.uid)
                        }
                    })
                    .catch((error) => {
                        console.log(error)
                    })
            }
        })
    }, [])

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

    useEffect(() => {

        const q = query(collection(db, 'posts'))

        const unSub = onSnapshot(q, (querySnapShot) => {

            let postsArr = []

            querySnapShot.forEach((doc) => {
                postsArr.push({ id: doc.id, data: doc.data() })
            })

            setPosts(postsArr)
        })

        return () => unSub()

    }, [])


    const value = {
        userName,
        subs,
        posts
    }

    return (
        <GlobalContext.Provider value={value}>
            {children}
        </GlobalContext.Provider>
    )

}
