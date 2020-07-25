import React from 'react'

const Rank = ({ name, entries }) => {
  return (
    <div>
      <p className="white f3 mb1">
        {`${name}, your current entry count is...`}
      </p>
      <p className="white f2 mt2">{`${entries}`}</p>
    </div>
  )
}

export default Rank
