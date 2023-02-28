import React,{useState} from 'react'

export default function DropDownSub({ changeSub, darkMode, error, subs, setError }) {

    const [sub, setSub] = useState('null')

    const handleSelection = (e) => {

        if (e.target.value === 'null') {
            setSub('null')
            return
        }

        changeSub(e.target.value)
        setSub(e.target.value)
        setError(false)
    }

    return (

        <div
        >
            <select
                id='dropdown-create-post'
                className={`${darkMode}`}
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
