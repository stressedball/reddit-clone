import React from 'react'
import DeleteButton from '../../multi-usage/DeleteButton'
import EditButton from '../../multi-usage/EditButton'

export default function AdminOptions({ darkMode }) {

  return (

    <div className={`${darkMode} post-exposed-options vertical flex`}>

      {/* Edit */}
      <div className={`horizontal flex hover ${darkMode} post-option`}>
        <EditButton darkMode={darkMode} />
      </div>

      {/* delete */}
      <div className={`horizontal flex hover ${darkMode} post-option`}>
        <DeleteButton darkMode={darkMode} />
      </div>
    </div>
  )
}
