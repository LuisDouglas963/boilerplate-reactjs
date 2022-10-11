import React from 'react'
import classNames from 'classnames'
import { MdError } from 'react-icons/md'
import PropTypes from 'prop-types'

export const FieldMessage = ({ message, icon, className }) => {
  const IconElement = icon
  return (
    message && (
      <div className={classNames('flex flex-row text-sm items-center gap-1 mt-1 text-red-500', className)}>
        <IconElement />
        {message}
      </div>
    )
  )
}

FieldMessage.propTypes = {
  message: PropTypes.string.isRequired,
  icon: PropTypes.elementType,
  className: PropTypes.string,
}

FieldMessage.defaultProps = {
  message: '',
  className: '',
  icon: MdError,
}
