import { useNavigate } from "react-router-dom"
import Users from "./Users"
import Subs from "./Subs"

export default function Menu({ darkMode, subs, users, handleDisplay }) {

    const navigate = useNavigate()

    return (
        <div className={`${darkMode} displayed`}>

            <div className={`${darkMode} tile mouse-pointer horizontal flex`} style={{ gap: '0.3rem' }}>

                <svg
                    fill="currentColor" className={`${darkMode}`}
                    width="15px" height="15px"
                    viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M4,23H20a1,1,0,0,0,1-1V6a1,1,0,0,0-.293-.707l-4-4A1,1,0,0,0,16,1H4A1,1,0,0,0,3,2V22A1,1,0,0,0,4,23ZM5,3H15.586L19,6.414V21H5Zm11,9a1,1,0,0,1-1,1H13v2a1,1,0,0,1-2,0V13H9a1,1,0,0,1,0-2h2V9a1,1,0,0,1,2,0v2h2A1,1,0,0,1,16,12Z" />
                </svg>

                <p style={{ margin: '0', padding: '0' }}
                    onClick={() => {
                        navigate('/submit')
                        handleDisplay()
                    }}
                >Create Post</p>
            </div>

            <input id='dropdown-search'
                className={`${darkMode}`}
                placeholder={'Filter'}
            />

            <Subs darkMode={darkMode} subs={subs} handleDisplay={handleDisplay} />
            <Users darkMode={darkMode} users={users} handleDisplay={handleDisplay} />

            <p
                className={`${darkMode} tile mouse-pointer`}
                onClick={() => {
                    handleDisplay()
                    navigate('/')
                }}>Home</p>
        </div>
    )
}


