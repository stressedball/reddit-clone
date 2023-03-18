import React, { createContext } from 'react'

export const DropDownContext = createContext({
    handleDropDownDisplay: () => { }
})

export function DropDownDisplayProvider({ children }) {

    const handleDropDownDisplay = () => {

    }

    return (
        <DropDownContext.Provider value={ handleDropDownDisplay}>
            {children}
        </DropDownContext.Provider>
    )
}
