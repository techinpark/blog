import React from 'react'
import { Link } from 'gatsby'
import './index.scss'
import { ThemeSwitch } from '../theme-switch'


export const Header = ({ title, location, rootPath }) => {
  return (
    (
      <header className="home-header">
        <Link to={`/`} className="link">
          {title}
        </Link>
        <ThemeSwitch />
      </header>
    )
  )
}
