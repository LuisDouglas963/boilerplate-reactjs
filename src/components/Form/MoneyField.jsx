import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { FieldMessage, Label, MoneyAsInput } from '@/components/Form/index.js'

export const MoneyField = ({ name, onChange, noMargins, label, value, isDisabled, isReadOnly, errorMessage, ...rest }) => {
  const { className, id } = rest
  const labelClasses = errorMessage !== '' ? 'text-red-600' : ''
  return (
    <div className={classNames({ 'mb-3': !noMargins }, className)}>
      {isReadOnly ? (
        <>
          <Label className={classNames(labelClasses)} text={label} htmlFor={id ?? name} isValid={errorMessage === ''} />
          <p tabIndex='-1' className='bg-gray-300 p-2 mt-1 cursor-not-allowed text-gray-400 rounded-lg'>
            {value}
          </p>
        </>
      ) : (
        <>
          <Label className={classNames(labelClasses)} text={label} htmlFor={id ?? name} isValid={errorMessage === ''} />
          <MoneyAsInput onChange={onChange} value={value} name={name} disabled={isDisabled} {...rest} />
          {errorMessage && <FieldMessage message={errorMessage} />}
        </>
      )}
    </div>
  )
}

MoneyField.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  onChange: PropTypes.func.isRequired,
  label: PropTypes.string,
  className: PropTypes.string,
  isDisabled: PropTypes.bool,
  isReadOnly: PropTypes.bool,
  errorMessage: PropTypes.string,
  noMargins: PropTypes.bool,
}

MoneyField.defaultProps = {
  onChange: () => {},
  label: '',
  value: '',
  className: '',
  isDisabled: false,
  isReadOnly: false,
  errorMessage: '',
  noMargins: false,
}
