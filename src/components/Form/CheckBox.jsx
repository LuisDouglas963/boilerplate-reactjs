import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

export const CheckBox = ({ label, name, className, labelClassName, textClassName, ...rest }) => {
  const inputClassName = classNames('p-2', className)
  const lbClassName = classNames('flex flex-row gap-2 items-baseline', labelClassName)
  return (
    <label className={lbClassName}>
      <input type='checkbox' name={name} {...rest} className={inputClassName} />
      <span className={textClassName}>{label}</span>
    </label>
  )
}

CheckBox.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  className: PropTypes.string,
  labelClassName: PropTypes.string,
  textClassName: PropTypes.string,
}
