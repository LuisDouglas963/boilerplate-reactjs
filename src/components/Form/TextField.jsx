import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { Input, FieldMessage, Label } from '@/components/Form/index.js'
import { PasswordInput } from '@/components/Form/PasswordInput.jsx'

export const TextField = ({ name, onChange, type, noMargins, label, value, isDisabled, isReadOnly, errorMessage, ...rest }) => {
  const { className, id } = rest
  const labelClasses = errorMessage !== '' ? 'text-red-600' : ''

  return (
    <div className={classNames({ 'mb-3': !noMargins }, className)}>
      {isReadOnly ? (
        <>
          <Label className={classNames(labelClasses)} text={label} htmlFor={id ?? name} isValid={errorMessage === ''} />
          <p tabIndex='-1' className='bg-gray-200 px-2 py-3 mt-1 cursor-not-allowed text-gray-400 rounded-lg'>
            {value}
          </p>
        </>
      ) : (
        <>
          <Label className={classNames(labelClasses)} text={label} htmlFor={id ?? name} isValid={errorMessage === ''} />

          {type === 'text' && (
            <Input
              onChange={onChange}
              value={value}
              id={id ?? name}
              name={name}
              isDisabled={isDisabled}
              isInvalid={errorMessage !== ''}
              {...rest}
            />
          )}

          {type === 'password' && (
            <PasswordInput
              onChange={onChange}
              value={value}
              id={id ?? name}
              name={name}
              isDisabled={isDisabled}
              isInvalid={errorMessage !== ''}
              {...rest}
            />
          )}

          {errorMessage && <FieldMessage message={errorMessage} />}
        </>
      )}
    </div>
  )
}

TextField.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  type: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  label: PropTypes.string,
  className: PropTypes.string,
  isDisabled: PropTypes.bool,
  isReadOnly: PropTypes.bool,
  errorMessage: PropTypes.string,
  noMargins: PropTypes.bool,
}

TextField.defaultProps = {
  label: '',
  value: '',
  type: 'text',
  className: '',
  isDisabled: false,
  isReadOnly: false,
  errorMessage: '',
  noMargins: false,
  onChange: () => {},
}
