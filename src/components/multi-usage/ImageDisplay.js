import React, { useState, useEffect } from "react"
import { ref, getDownloadURL } from "firebase/storage"
import { storage } from "../../firebase/getAuthDb"

export default function ImageDisplay({ post }) {

    const [image, setImage] = useState()
    const [isImage, setIsImage] = useState(false)

    useEffect(() => {

        async function fetchImage() {

            const imageUrl = await getImage(post)

            setImage(imageUrl)
            setIsImage(true)
        }

        fetchImage()

    }, [])

    if (!isImage) return <p>Loading image</p>

    return (
        <img style={{ maxHeight: "100%", maxWidth: "100%" }} src={`${image}`} />
    )
}

async function getImage(post) {

    const pathRef = ref(storage, `posts/${post.id}/${post.data.image}`)
    const data = await getDownloadURL(pathRef)
    return data

}