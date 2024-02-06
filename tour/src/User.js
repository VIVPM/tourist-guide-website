import React, { useState, useEffect } from 'react'
import Userform from './Userform';
import Userdetails from './Userdetails'


export default function UsersData() {
  const [Users, fetchUsers] = useState([])

  const getData =async () => {
    
        const responce=await fetch('/api/places/allusers')
        const json=await responce.json()
        console.log(json.Name)
        if(responce.ok){
            fetchUsers(json)
        }
  }

  useEffect(() => {
    getData()
  }, [])

  function deletefunc(){
        console.log("hello delete")
  }
  return (
    <>
      <h2>All users</h2>
      <div className='container'>
      <div className='usercontainer'>
      {Users && Users.map((user)=>(
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