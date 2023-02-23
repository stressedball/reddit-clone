import React from 'react'

export default function SearchBar({ darkMode }) {

    return (
        <input
            className={`${darkMode}`}
            placeholder='Search RedditClone'
        ></input>
    )
}
