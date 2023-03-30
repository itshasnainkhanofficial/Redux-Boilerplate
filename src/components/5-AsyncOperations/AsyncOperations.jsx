import React, { useEffect, useState } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { fetchUsers } from './userActions'

const AsyncOperations = () => {

    const dispatch = useDispatch()

   const {isLoading, users, error} = useSelector( (state) => {
        return state
   } )


  // useEffect(() => {
  //   dispatch(fetchUsers())
     
  // }, [])


  const clickHandler = () => {
    dispatch(fetchUsers())
  }

const printUsers = () => {
  if(isLoading){
    
    return <div>loading</div>
  }
  
  if(error){
    
    return error
  }
  
  // return users.map( (user) => <p key={user.id}>{user.name}</p>)
  return users.map( (user) => <p key={user.id}>{user.title}</p>)
}

  return (
    <div>

    {printUsers()}
      
      <button onClick={clickHandler}>Load Users</button>
    </div>
  )
}

export default AsyncOperations