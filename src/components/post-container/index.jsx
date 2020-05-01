import React from 'react'

export const PostContainer = ({ html }) => (
  <div className="post" dangerouslySetInnerHTML={{ __html: html }} />
)
