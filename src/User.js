import React, { useState, useEffect } from 'react'
import Userform from './Userform';
import Userdetails from './Userdetails'

export default function UsersData() {
  const [users, fetchUsers] = useState([])

  const getData = async () => {
    try {
      const response = await fetch('https://tourist-guide-website.onrender.com/api/places/allusers')
      if (!response.ok) {
        throw new Error('Failed to fetch data')
      }
      const json = await response.json()
      console.log(json)
      fetchUsers(json)
    } catch (error) {
      console.error('Error fetching users:', error)
    }
  }

  useEffect(() => {
    getData()
  }, [])


  return (
    <>
      <h2>All users</h2>
      <div className='container'>
      <div className='usercontainer'>
      {users && users.map((user)=>(
          <Userdetails key={user._id} user={user}></Userdetails>
      ))}
      </div>
      <div className='userform'>
          <Userform/>
      </div>
      </div>
     
    </>
  )
}