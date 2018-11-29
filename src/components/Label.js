import React from 'react'

const Label = ( {labels} ) => {
  return(
    labels.map( (x) => (
      <span class="label label-warning">{x}</span>
    )
  )
  )
}

export default Label