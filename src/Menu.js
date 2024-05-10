import React from "react"
import { NavLink } from "react-router-dom"

function Menu() {
  return (
    <nav>
      <ul>
        {routes.map(route => (
          <li key={route.to}>
            <NavLink
            style={({ isActive }) => ({
              color: isActive ? "red" : "blue",
            })}
            to={route.to}
            >
              {route.Text}
            </NavLink>
          </li>
        ))}
        
      </ul>
    </nav>
  )
}
const routes = []
routes.push({ 
  to: "/",
  Text: "Home",
 })
routes.push({ 
  to: "/blog",
  Text: "Blog",
 })
routes.push({ 
  to: "/profile",
  Text: "Profile",
 })
routes.push({ 
  to: "/login",
  Text: "Login",
 })
routes.push({ 
  to: "/logout",
  Text: "Logout",
 })

export { Menu }
