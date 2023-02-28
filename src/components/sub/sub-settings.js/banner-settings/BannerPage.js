import { doc } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import { handleBannerSubmit, getBanner } from './bannerData'

export default function BannerPage({ darkMode, banner, sub }) {

    const [display, setDisplay] = useState(false)
    const [bannerPath, setBannerPath] = useState()
    const [deltaDrag, setDelta] = useState()
    const [top, setTop] = useState()

    useEffect(() => {
        if (banner !== undefined) {

            setDisplay(true)

            const reader = new FileReader(banner)
            reader.readAsDataURL(banner)
            reader.onload = () => {
                setBannerPath(reader.result)
            }
        }

    }, [banner])

    if (!display) return null

    return (
        <div className={`${darkMode}`} id='banner-page'>

            <img id='banner' src={`${bannerPath}`} style={{ maxWidth: "100vw" }} />

            <div className={`${darkMode} mouse-pointer`} id="image-selector"
                draggable={true}
                onDragStart={async (e) => {
                    const initialCoord = await getInitialCoords(e)
                    setDelta(initialCoord)
                }}
                onDragEnd={async (e) => {
                    const temp = await moveBox(e, deltaDrag)
                    setTop(temp)
                    console.log(temp)
                }} 
            ></div>

            <div className='flex horizontal'
                style={{
                    width: "100vw", justifyContent: "center", gap: "1rem",
                    padding: "1rem"
                }}>

                <button
                    className={`${darkMode} mouse-pointer buttonStyle`}
                    onClick={() => setDisplay(false)}
                >Cancel</button>

                <button
                    className={`${darkMode} mouse-pointer buttonStyle`}
                    onClick={() => {
                        getFinalCoords(sub, top, banner.name)
                        setDisplay(false)
                    }}
                >Confirm</button>

            </div>
        </div>
    )
}

function getFinalCoords(sub, top, name) {

    const bannerImage = document.querySelector('img#banner')
    const selection = document.querySelector('div#image-selector')
    const selectionWidth = selection.offsetWidth
    const selectionHeight = selection.offsetHeight

    const canvas = document.createElement('canvas')
    canvas.width = selectionWidth
    canvas.height = selectionHeight
    const ctx = canvas.getContext('2d')
    ctx.drawImage(bannerImage, 0, top, selectionWidth, selectionHeight, 0, 0, selectionWidth, selectionHeight)

    canvas.toBlob(blob => {
        blob.name = name
        handleBannerSubmit(sub, blob)
    })
}

function getInitialCoords(e) {
    const boxTop = e.target.offsetTop
    return new Promise((res) => {
        res(e.screenY - boxTop)
    })
}

function moveBox(e, deltaDrag) {
    e.target.style = `top: ${e.screenY - deltaDrag}px`
     
    return new Promise((res) => res(e.screenY - deltaDrag))
}