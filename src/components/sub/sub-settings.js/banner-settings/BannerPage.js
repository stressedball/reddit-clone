import { doc } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import { handleBannerSubmit, getBanner } from './bannerData'
import { Container, ImageContainer, PixelSelector } from '../subSettingsStyle'
import { BottomButtonsDiv, CancelButton, ConfirmButton } from '../../../../sc-css/atomic'

export default function BannerPage({ setDisplay, darkMode, banner, sub }) {

    const [bannerPath, setBannerPath] = useState()
    const [deltaDrag, setDelta] = useState()
    const [top, setTop] = useState()
    const [bannerDimensions, setBannerDimensions] = useState()

    useEffect(() => {
        const reader = new FileReader(banner)
        reader.readAsDataURL(banner)
        reader.onload = () => {
            const image = reader.result
            setBannerPath(image)
            const img = new Image()
            img.src = image
            img.onload = () => {
                console.log(`Banner width: ${img.width}px, height: ${img.height}px`)
                setBannerDimensions({ width: img.width, height: img.height })
            }
        }
    }, [banner])

    return (
        <Container className={`${darkMode}`} >

            <div>
                {
                    bannerDimensions ?
                        <ImageContainer style={{ height: `${bannerDimensions.height}px` }}>
                            <img id='banner' src={`${bannerPath}`} style={{ maxWidth: "100vw" }} />
                        </ImageContainer>
                        :
                        <p>Loading</p>
                }
            </div>
            <BottomButtonsDiv style={{ maxWidth: "500px", alignSelf: "center", justifyContent: "center" }} className={darkMode}>

                <CancelButton className={`${darkMode}`} onClick={() => setDisplay(false)}
                >Cancel</CancelButton>

                <ConfirmButton className={`${darkMode}`}
                    onClick={() => {
                        getFinalCoords(sub, top, banner.name)
                        setDisplay(false)
                    }}
                >Confirm</ConfirmButton>

            </BottomButtonsDiv>
        </Container>
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