import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { laptopBuy } from './features/laptopSlice'
import {fetchUsers} from './features/usersSlice'

const ToolKitWithThunk = () => {
    const [laptopValue, setlaptopValue] = useState(1)

    const qty = useSelector((state) => state.laptopReducer.qty)

    const users = useSelector((state) => state.userReducer)

    const dispatch = useDispatch()

    const changeHandler = (e) => {
        setlaptopValue(parseInt(e.target.value))
    }

    const clickHandler = () => {
        
        dispatch(laptopBuy(laptopValue))
    }

    useEffect(() => {

      dispatch(fetchUsers())
    }, [])
    

  return (
    <div>
        <h1>ToolKitWithThunk</h1>
        <div>Current: {qty}</div>
        <input type="text" value={laptopValue}  onChange={changeHandler}/>
        <button onClick={clickHandler}>Buy laptop now</button>
        <h2>List of Users</h2>
        {/* <div>{users.users.map((user) => {user.name})}</div> */}
        {users.isLoading && <div> Loading...</div>} 
        {!users.isLoading && users.error ? <div>Error: {users.error}</div> : null }
        {!users.isLoading && users.users.length ? (
          <ul>
            {
              users.users.map( (res)  => (
                // <li key={res.id}>{res.name}</li>
                <li key={res.id}>{res.title}</li>
              ))
            }
          </ul>
        ) : null}

    </div>

  )
}

export default ToolKitWithThunk