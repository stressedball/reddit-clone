import React, { useEffect, useState } from 'react'
import { handleBannerSubmit } from './bannerData'
import { Container } from '../subSettingsStyle'
import { BottomButtonsDiv, CancelButton, ConfirmButton } from '../../../../sc-css/atomic'
import BannerPreviewer from './BannerPreviewer'

export default function BannerPage({ setDisplay, darkMode, banner, sub }) {

    const [bannerPath, setBannerPath] = useState()
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
                setBannerDimensions({ width: img.width, height: img.height })
            }
        }
    }, [banner])

    return (
        <Container className={`${darkMode}`} >

            {
                bannerDimensions ?
                    <BannerPreviewer darkMode={darkMode} sub={sub} bannerPath={bannerPath} bannerDimensions={bannerDimensions} />
                    :
                    <p>Loading</p>
            }

            <BottomButtonsDiv style={{ maxWidth: "500px", alignSelf: "center", justifyContent: "center" }} className={darkMode}>

                <CancelButton className={`${darkMode}`} onClick={() => setDisplay(false)}
                >Cancel</CancelButton>

                <ConfirmButton className={`${darkMode} enabled`}
                    onClick={() => {
                        handleBannerSubmit(sub, banner)
                        setDisplay(false)
                    }}
                >Confirm</ConfirmButton>

            </BottomButtonsDiv>
        </Container>
    )
}


