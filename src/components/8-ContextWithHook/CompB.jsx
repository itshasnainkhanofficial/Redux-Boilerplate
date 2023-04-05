import  { useContext } from 'react'
import { UserContext } from './Context'
const CompB = () => {

  const {name , setName} = useContext(UserContext)
  const clickHandler = (name) => {
    setName(name)
  }

  return (
    <div>
        
        <h1>This is component B</h1>
        <div>Hello {name}</div>
        <button onClick={ () => clickHandler("Ali")}>Change Name</button>
    </div>
  )
}

export default CompB