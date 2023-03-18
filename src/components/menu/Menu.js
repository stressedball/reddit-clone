import { useNavigate } from "react-router-dom"
import Users from "./Users"
import Subs from "./Subs"
import { useContext } from "react"
import { GlobalContext } from "../providers/GlobalProvider"
import { ThemeContext } from "../providers/ThemeProvider"
import { Tile, HorizontalFlex } from "../../sc-css/atomic"

export default function Menu({ dropdownMenu, handleMenuDisplay }) {

    const navigate = useNavigate()
    const { subs, users } = useContext(GlobalContext)
    const { darkMode } = useContext(ThemeContext)

    return (
        <div className={`${darkMode} drop-down-menu`}>

            <div style={{display:"flex", justifyContent:"end", alignItems:"center"}} onClick={() => handleMenuDisplay()}>
                {
                    dropdownMenu ? null :
                        <svg width="30px" height="30px" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg">
                            <g id="icomoon-ignore"></g>
                            <path d="M10.722 9.969l-0.754 0.754 5.278 5.278-5.253 5.253 0.754 0.754 5.253-5.253 5.253 5.253 0.754-0.754-5.253-5.253 5.278-5.278-0.754-0.754-5.278 5.278z" fill="currentColor"></path>
                        </svg>
                }
            </div>

            <Tile className={`${darkMode} drop-down-menu`} style={{ gap: '0.3rem' }}
                onClick={() => { navigate('/submit') }}            >

                <svg
                    fill="currentColor" className={`${darkMode}`}
                    width="15px" height="15px"
                    viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M4,23H20a1,1,0,0,0,1-1V6a1,1,0,0,0-.293-.707l-4-4A1,1,0,0,0,16,1H4A1,1,0,0,0,3,2V22A1,1,0,0,0,4,23ZM5,3H15.586L19,6.414V21H5Zm11,9a1,1,0,0,1-1,1H13v2a1,1,0,0,1-2,0V13H9a1,1,0,0,1,0-2h2V9a1,1,0,0,1,2,0v2h2A1,1,0,0,1,16,12Z" />
                </svg>

                <p style={{ margin: '0', padding: '0' }} className='drop-down-menu'>Create Post</p>
            </Tile>

            <Tile>
                <input id='dropdown-search' className={`${darkMode} drop-down-menu`} placeholder={'Filter'} />
            </Tile>

            <Subs darkMode={darkMode} subs={subs} />
            <Users darkMode={darkMode} users={users} />

            <Tile
                className={`${darkMode} drop-down-menu`}
                onClick={() => { navigate('/') }}>Home</Tile>
        </div>
    )
}


