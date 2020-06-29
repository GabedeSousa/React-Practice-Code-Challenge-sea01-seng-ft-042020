import React from 'react'

const MoreButton = (props) => {
  const {ongetNextSushi} = props
    return <button onClick={ongetNextSushi}>
            More sushi!
          </button>
}

export default MoreButton 