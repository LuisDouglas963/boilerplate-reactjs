import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

export const Button = ({ text, type, className, isDisabled, isLoading, children, onClick, ...rest }) => {
  const buttonClasses = classNames('py-3 px-7 text-white rounded-lg bg-blue-500/50', className, {
    'bg-gray-500 hover:bg-gray-500 text-gray-200': isDisabled,
  })
  return (
    <button type={type} className={buttonClasses} onClick={onClick} disabled={isDisabled} {...rest}>
      {isLoading && '-'}
      {text !== '' ? text : children}
    </button>
  )
}

Button.propTypes = {
  text: PropTypes.string,
  type: PropTypes.oneOf(['button', 'submit']),
  className: PropTypes.string,
  isDisabled: PropTypes.bool,
  isLoading: PropTypes.bool,
  children: PropTypes.node,
  onClick: PropTypes.func,
}

Button.defaultProps = {
  text: '',
  type: 'button',
  className: '',
  isLoading: false,
  isDisabled: false,
  children: null,
  onClick: () => {},
}
