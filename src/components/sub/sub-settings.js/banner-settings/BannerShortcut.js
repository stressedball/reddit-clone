import { useState } from 'react'
import BannerPage from './BannerPage'
import styled from 'styled-components'
import { Blue, bottomBoxColor, darkBorder, darkTwo, lightBackgroundColor, lightBorder } from '../../../../sc-css/COLORS'

export default function BannerShortcut({ sub, darkMode }) {

  const [display, setDisplay] = useState(false)
  const [banner, setBanner] = useState()

  async function handleClick() {
    const data = await createInput()
    setBanner(data)
    setDisplay(!display)
  }

  return (
    <>
      <Shortcut onClick={handleClick} className={darkMode}>
        <Text>Add a banner to your sub!</Text>
        <Text className='hint'>Max height : 200px. Max width : {window.innerWidth}px</Text>
      </Shortcut>

      {
        display ? <BannerPage darkMode={darkMode} banner={banner} setDisplay={setDisplay} sub={sub} /> : null
      }

    </>
  )
}

function createInput() {
  const imageUpload = document.createElement('input')

  imageUpload.type = 'file'

  return new Promise((res) => {
    imageUpload.onchange = (e) => {
      res(e.target.files[0])
    }
    imageUpload.click()
  })
}

const Shortcut = styled.div`
  width: 100%;
  box-sizing:border-box;
  border: 1px solid ${lightBorder};
  margin-top : 18px;
  position:relative;
  background-color:${bottomBoxColor};
  padding-top: 20px;

  &::before {
    background-color: ${Blue};
    position:absolute;
    left:0;
    top:0;
    content:"";
    width:100%;
    height:100%;
    border-radius : inherit;
    opacity: 0;
  }
  
  &:hover {
    cursor: pointer;
  }

  &:hover::before {
    opacity: 0.08;
  }
  
  &.dark {
    border: 1px solid ${darkBorder};
    background-color:${darkTwo};
  }

  &.dark::before {
    background-color:${lightBackgroundColor};
  }
`


const Text = styled.p`
  text-align:center;
  margin:0;

  &.hint{
    padding-bottom:8px;
    font-size:12px;
  }
  
`