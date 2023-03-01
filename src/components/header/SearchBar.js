import React from 'react'

export default function SearchBar({ darkMode }) {

    return (
        <input
            className={`${darkMode}`}
            placeholder='Search RedditClone'
            style={{
                height: "38px", borderRadius: "4px", border: "1px solid rgb(102, 102, 102)"
            }}
        ></input>
    )
}
