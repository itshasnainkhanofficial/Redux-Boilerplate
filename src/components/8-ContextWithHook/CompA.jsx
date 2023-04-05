import React from 'react'
import CompB from './CompB'

const CompA = () => {
  return (
    <div>
        <h1>This is component A and calling component B</h1>
        <CompB />
    </div>
  )
}

export default CompA