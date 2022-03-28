import React from 'react'
import { NavLink } from 'react-router-dom'
import { useLocation } from 'react-router-dom'

const Nav = () => {
  const location = useLocation();
  console.log(location.pathname === "/sites" || "/");
  return (
    <div className='border-b-2 mb-5 h-24 relative'>
        <div className='flex items-center absolute -bottom-0 left-0 mb-1.5'>
          <NavLink to="/sites" className={`py-3 pr-3 border-b-2 hover:text-primary ${location.pathname === "/sites" ? "border-primary text-primary" : "" || location.pathname === "/" ? "border-primary text-primary" : ""}`}>My Sites</NavLink>
          <NavLink to="/users" className={`py-3 pr-3 border-b-2 hover:text-primary ${location.pathname === "/users" ? "border-primary text-primary" : ""}`}>My Users</NavLink>
        </div>
    </div>
  )
}

export default Nav;