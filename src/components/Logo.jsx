import React from 'react'

export const Logo = ({ src, alt, className, ...rest }) => {
  return <img src={src} alt={alt} className={className} {...rest} />
}

