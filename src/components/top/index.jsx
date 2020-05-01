import React from 'react'
import { Link } from 'gatsby'
import { GitHubIcon } from '../social-share/github-icon'

import './index.scss'

export const Top = ({ title }) => {
  return (
    <div className="top">
      <h1>{title}</h1>
    </div>
  )
}
