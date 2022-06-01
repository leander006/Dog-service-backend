import React from 'react'

function Options(opt) {
  return (
    <>
      <option value={opt._id}>{opt}</option>
    </>
  )
}

export default Options