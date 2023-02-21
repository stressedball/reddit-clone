import React from 'react'

export default function DropDownSub({ error, sub, subs, setError, setSub }) {

    const handleSelection = (e) => {

        if (e.target.value === 'null') {
            setSub('null')
            return
        }

        setSub(e.target.value)
        setError(false)
    }

    return (

        <div
            id=''
        >
            <select
                value={sub}
                onChange={handleSelection}
            >
                <option
                    value={"null"}
                >Choose a sub</option>
                {
                    subs ?
                        subs.map(sub => {
                            return (
                                <option
                                    key={sub.id}
                                    value={sub.id}
                                >
                                    {sub.data.name}
                                </option>
                            )
                        }) : null
                }
            </select>

            {
                error ?
                    <p>please select a sub</p>
                    : null
            }

        </div>
    )
}
