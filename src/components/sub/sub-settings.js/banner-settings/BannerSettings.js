import React, { useEffect, useState } from 'react'
import BannerPage from './BannerPage'

export default function BannerSettings({ sub, darkMode }) {

  const [display, setDisplay] = useState(false)
  const [banner, setBanner] = useState()

  async function handleClick() {
    const data = await createInput()
    setBanner(data)
    setDisplay(true)
  }

  return (
    <div>
      <p
        onClick={handleClick}
        className='mouse-pointer'
        style={{ textDecoration: "underline" }}>Add a banner to your sub!</p>

      {
        display ? <BannerPage darkMode={darkMode} banner={banner} setDisplay={setDisplay} sub={sub} /> : null
      }

    </div>
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



