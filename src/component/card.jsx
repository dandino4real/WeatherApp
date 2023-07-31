import React from 'react'

const Card = ({name,bg,onClick}) => {
  return (
    <div className={`py-8 px-9 rounded-md text-white ${bg} uppercase cursor-pointer`} onClick={onClick}>
              {name}
    </div>
  )
}

export default Card