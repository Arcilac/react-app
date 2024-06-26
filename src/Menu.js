import React from "react"
import { NavLink } from "react-router-dom"
import { useAuth } from "./auth"

function Menu() {
  const auth = useAuth()

 
  return (
    <nav>
      <ul>
        {routes.map(route => {
          if (route.publicOnly && auth.user) 
            return null 
          if (route.private && !auth.user) 
            return null 

          return (
            <li key={route.to}>
              <NavLink 
              style={({ isActive }) => ({
                color: isActive ? "red" : "blue",
              })}
              to={route.to} >
                {route.Text}
              </NavLink>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
const routes = []
routes.push({ 
  to: "/",
  Text: "Home",
  private: false,
 })
routes.push({ 
  to: "/blog",
  Text: "Blog",
  private: false,
 })
routes.push({ 
  to: "/profile",
  Text: "Profile",
  private: true,
 })
routes.push({ 
  to: "/login",
  Text: "Login",
  private: false,
  publicOnly: true,
 })
routes.push({ 
  to: "/logout",
  Text: "Logout",
  private: true,
 })

export { Menu }
