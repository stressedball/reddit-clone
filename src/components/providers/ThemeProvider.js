import React, { createContext, useEffect, useState } from 'react'

export const ThemeContext = createContext({
    darkMode: '',
    toggleDarkMode: () => { }
})

export function ThemeProvider({ children }) {

    const [darkMode, setDarkMode] = useState('')

    const toggleDarkMode = () => {
        darkMode === '' ? setDarkMode('dark') : setDarkMode('')
    }
    
    return (
        <ThemeContext.Provider value={{ darkMode, toggleDarkMode }}>
            {children}
        </ThemeContext.Provider>
    )
}
