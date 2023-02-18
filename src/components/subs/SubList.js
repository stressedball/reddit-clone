import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { GlobalContext } from '../providers/GlobalProvider';
import '../../css/sub-list.css'

export default function SubList() {

    const navigate = useNavigate()
    const { subs } = useContext(GlobalContext)

    if (subs === undefined) {
        return <div>Loading data, sit tight</div>
    }

    return (
        <div id='subs-container'>
            {
                subs.map(sub => {
                    return (
                        <p
                            className='sub-preview'
                            key={`${sub.id}`}
                            onClick={() => navigate(`/${sub.id}`)}
                        >{sub.data.name}</p>
                    )
                })
            }
        </div>
    )

}
