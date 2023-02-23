import { ThemeContext } from '../../providers/ThemeProvider'
import React, { useContext } from 'react'

export default function Theme() {

    const { darkMode, toggleDarkMode } = useContext(ThemeContext)

    const handleTheme = () => {
        toggleDarkMode()
    }

    return (
        <div
            className={`${darkMode} tile mouse-pointer`}
            onClick={handleTheme}
        >Switch to <span>
                {
                    darkMode === 'dark' ?
                        'light' : 'dark'
                }
            </span> mode</div>
    )
}