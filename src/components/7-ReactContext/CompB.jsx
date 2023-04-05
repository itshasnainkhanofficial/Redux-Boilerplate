import React from 'react'
import {ContextConsumer} from './Context'
const CompB = () => {
  return (
    <div>
        
        <h1>This is component B</h1>
        <ContextConsumer>
            {
                (username) => {
                    return <div>Hello {username}</div>
                }
            }
        </ContextConsumer>
    </div>
  )
}

export default CompB