import React from "react"

const Footer = () => {
  return (
    <footer className="page-footer">
      <p>
        {" "}
        &copy; {new Date().getFullYear()} <span>Winston Recipes</span>. Built
        with <a href="google.com"> Gatsby</a>
      </p>
    </footer>
  )
}

export default Footer
