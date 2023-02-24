import { useNavigate } from "react-router-dom"

export default function Menu({ darkMode, subs, users, handleDisplay }) {

    const navigate = useNavigate()

    return (
        <div className={`${darkMode} displayed`}>

            <div className={`${darkMode} tile mouse-pointer horizontal flex`} style={{ gap: '0.3rem' }}>

                <svg
                    fill="currentColor" className={`${darkMode}`}
                    width="15px" height="15px"
                    viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M4,23H20a1,1,0,0,0,1-1V6a1,1,0,0,0-.293-.707l-4-4A1,1,0,0,0,16,1H4A1,1,0,0,0,3,2V22A1,1,0,0,0,4,23ZM5,3H15.586L19,6.414V21H5Zm11,9a1,1,0,0,1-1,1H13v2a1,1,0,0,1-2,0V13H9a1,1,0,0,1,0-2h2V9a1,1,0,0,1,2,0v2h2A1,1,0,0,1,16,12Z" /></svg>

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

function Subs({ handleDisplay, darkMode, subs }) {

    const navigate = useNavigate()

    return (
        <>
            <p className={`${darkMode} tile mouse-pointer`} value='Subs'>Communities</p>

            <div className={`${darkMode} tile mouse-pointer horizontal flex`} style={{ gap: '0.3rem' }}>
                <svg
                    fill="currentColor" className={`${darkMode}`}
                    width="15px" height="15px"
                    viewBox="0 0 128 128" id="Layer_1" version="1.1" xmlSpace="preserve" xmlns="http://www.w3.org/2000/svg">
                    <g>
                        <path d="M64,42c-13.2,0-24,10.8-24,24s10.8,24,24,24s24-10.8,24-24S77.2,42,64,42z M64,82c-8.8,0-16-7.2-16-16s7.2-16,16-16   s16,7.2,16,16S72.8,82,64,82z" />
                        <path d="M64,100.8c-14.9,0-29.2,6.2-39.4,17.1l-2.7,2.9l5.8,5.5l2.7-2.9c8.8-9.4,20.7-14.6,33.6-14.6s24.8,5.2,33.6,14.6l2.7,2.9   l5.8-5.5l-2.7-2.9C93.2,107.1,78.9,100.8,64,100.8z" />
                        <path d="M97,47.9v8c9.4,0,18.1,3.8,24.6,10.7l5.8-5.5C119.6,52.7,108.5,47.9,97,47.9z" />
                        <path d="M116.1,20c0-10.5-8.6-19.1-19.1-19.1S77.9,9.5,77.9,20S86.5,39.1,97,39.1S116.1,30.5,116.1,20z M85.9,20   c0-6.1,5-11.1,11.1-11.1s11.1,5,11.1,11.1s-5,11.1-11.1,11.1S85.9,26.1,85.9,20z" />
                        <path d="M31,47.9c-11.5,0-22.6,4.8-30.4,13.2l5.8,5.5c6.4-6.9,15.2-10.7,24.6-10.7V47.9z" />
                        <path d="M50.1,20C50.1,9.5,41.5,0.9,31,0.9S11.9,9.5,11.9,20S20.5,39.1,31,39.1S50.1,30.5,50.1,20z M31,31.1   c-6.1,0-11.1-5-11.1-11.1S24.9,8.9,31,8.9s11.1,5,11.1,11.1S37.1,31.1,31,31.1z" />
                    </g>
                </svg>
                <p style={{ margin: '0', padding: '0' }}>Create community</p>
            </div>
            {
                subs.map(sub => {
                    return (
                        <p
                            key={sub.id}
                            onClick={() => {
                                navigate(`r/${sub.id}`)
                                handleDisplay()
                            }}
                            className={`${darkMode} tile mouse-pointer`}
                            value={sub.data.name}
                        >{sub.data.name}</p>
                    )
                })
            }
        </>
    )
}

function Users({ handleDisplay, darkMode, users }) {

    const navigate = useNavigate()

    return (
        <>
            <p className={`${darkMode} tile mouse-pointer`} value='Users'>Users</p>

            {
                users.map(user => {
                    return (
                        <p
                            key={user.id}
                            onClick={() => {
                                handleDisplay()
                                navigate(`u/${user.id}`)
                            }}
                            className={`${darkMode} tile mouse-pointer`}
                        >{user.data.userName}</p>
                    )
                })
            }
        </>
    )
}