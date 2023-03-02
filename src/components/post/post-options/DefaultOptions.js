import React from 'react'

export default function DefaultOptions({darkMode}) {

  return (
    <div className={`${darkMode} post-exposed-options vertical flex`}>
      <button>Report</button>
    </div>
  )
}
