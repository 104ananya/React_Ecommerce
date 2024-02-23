import React from 'react'
import { NavLink } from 'react-router-dom'

const PageNavigation = ({title}) => {
  return (
    <div className="padding-x py-5 text-lg" >
        <NavLink to={"/"} className="text-coral-red">Home </NavLink> / {title}
    </div>
  )
}

export default PageNavigation