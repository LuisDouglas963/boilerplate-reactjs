import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

export const Input = ({ name, type, className, value, onChange, ...rest }) => {
  const inputClassName = classNames(
    'w-full block text-[1rem] text-[#212529] bg-white bg-clip-padding py-[0.375rem] px-[0.75rem] border border-[#ced4da] rounded-[.375rem]',
    className
  )
  return <input type={type} name={name} value={value} onChange={onChange} className={inputClassName} {...rest} />
}

Input.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
  className: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
}

Input.defaultProps = {
  type: 'text',
  value: '',
  onChange: () => {},
}
