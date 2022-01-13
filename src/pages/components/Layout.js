import React from "react"
import Navbar from "./Navbar"
import Footer from "./Footer"

import "../assets/css/normalize.css"
import "../assets/css/style.css"

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  )
}

export default Layout
