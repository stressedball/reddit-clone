import { HorizontalFlex, SubAvatar } from "../../../../sc-css/atomic"
import { ImageContainer } from "../subSettingsStyle"
import styled from "styled-components"
import { darkTwo, lightBackgroundColor } from "../../../../sc-css/COLORS"

export default function BannerPreviewer({ sub, darkMode, bannerPath, bannerDimensions }) {

    if (!sub) return

    return (
        <HorizontalFlex style={{ position: 'relative' }}>

            <Menu>Menu</Menu>

            <StyledDiv className={`${darkMode}`} >

                <ImageContainer id="image-container" height={`${bannerDimensions.height}`}
                    width={`${bannerDimensions.width}`}>

                    <img id='banner' src={`${bannerPath}`} style={{ height: `${bannerDimensions.height}px`, width: `${bannerDimensions.width}px`, maxWidth: "calc(100vw - 270px)" }} />

                </ImageContainer >

                <HorizontalFlex style={{ marginTop: "-14px", justifyContent: "space-between", padding: "0 24px" }}>

                    <HorizontalFlex >

                        <SubAvatar src={`${sub.data.avatar}`} />

                        <TitleDiv>
                            <H1 style={{}}>{sub.data.name}</H1>
                            <H2>r/{sub.data.name}</H2>
                        </TitleDiv>

                    </HorizontalFlex>
                </HorizontalFlex>
            </StyledDiv>
        </HorizontalFlex >
    )
}

const Menu = styled.div`
    color:white;
    height: 100%;
    min-width:270px;
`

const StyledDiv = styled.div`
  background-color:${lightBackgroundColor};
  padding-bottom:12px;

  &.dark {
    background-color: ${darkTwo};
    color: inherit;
  }
`

const H1 = styled.h1`
  font-size: 28px;
  font-weight: 700;
  margin:0;
  padding-bottom: 4px;
  padding-right: 24px;
`

const H2 = styled.h2`
  font-size: 14px;
  color:#7c7c7c;
  font-weight: 600;
  margin:0;

  &.dark {
    color:#818384;
  }
`

const TitleDiv = styled.div`
  display:flex;
  flex-direction:column;
  padding-left: 16px;
  margin-top: 24px;
`