import React, { useContext } from 'react'
import data from '../ContextApi'

const Home = () => {
  const {userdata,setUserData} = useContext(data)
  console.log(userdata.firstName)
const booked=()=>{
  alert("TICKET BOOKED ENJOY THE MOVIE");
}

  const logout = ()=>{
    setUserData({})
  }
  return (
    
        <button className='btn' onClick={logout}>Logout</button>
    
  )
};


export default Home;