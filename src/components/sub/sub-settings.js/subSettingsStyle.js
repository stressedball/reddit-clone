import styled from "styled-components";
import { lightBorder,lightBackgroundColor, darkTwo, darkBorder, darkHoverLight, darkDefaultBorder } from "../../../sc-css/COLORS";

// SubSettings
export const MainDiv = styled.div`
    margin-right: 12px;
    flex: 1;
    max-width: 740px;
    border: 1px solid ${lightBorder};
    border-radius:4px;
    padding: 8px 40px;
    background-color: ${lightBackgroundColor};

    &.dark {
        background-color: ${darkTwo};
        border: 1px solid ${darkBorder};
    }
`

export const H2 = styled.h2`
    margin: 0;
    padding-right: 4px;
`

export const Text = styled.p`
    margin :0;
    padding-right: 4px;

    &.bold {
        font-size: 14px;
        font-weight: 500;
    }

    &.legend {
        padding-bottom : 8px;
        font-size: 16px;
        font-weight:600;
    }
`

// BannerPage
export const Container = styled.div`
    position:absolute;
    top: 47px;
    left: 0;
    z-index: 40;
    min-height: calc(100vh - 47px);
    width: 100%;
    background-color: ${darkDefaultBorder};
    display:flex;
    flex-direction:column;
`

export const PixelSelector = styled.div`
    min-height:150px;
    position:fixed;
    top:0;
    left:0;
    width : calc(100vw - 270px);
    border: 2px solid ${lightBackgroundColor};
`

export const ImageContainer = styled.div`
    position:relative;
`