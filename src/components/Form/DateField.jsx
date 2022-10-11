import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { FieldMessage, Label, Input } from '@/components/Form/index.js'

export const DateField = ({ name, onChange, label, noMargins, value, isDisabled, isReadOnly, errorMessage, ...rest }) => {
  const { className, id } = rest
  const labelClasses = errorMessage !== '' ? 'text-red-600' : ''

  return (
    <div className={classNames({ 'mb-3': !noMargins }, className)}>
      {isReadOnly ? (
        <>
          <Label className={labelClasses} text={label} htmlFor={id ?? name} isValid={errorMessage === ''} />
          <p tabIndex='-1' className='bg-gray-300 p-2 mt-1 cursor-not-allowed text-gray-400 rounded-lg'>
            {value}
          </p>
        </>
      ) : (
        <>
          <div className='flex justify-between items-center'>
            <Label className={labelClasses} text={label} htmlFor={id ?? name} isValid={errorMessage === ''} />
            <p tabIndex='-1' className=' text-gray-400 text-xs'>
              dd/mm/aaaa
            </p>
          </div>
          <Input
            pattern='[0-9]{2}/[0-9]{2}/[0-9]{4}'
            name={name}
            type='date'
            disabled={isDisabled}
            value={value}
            onChange={onChange}
            placeholder='dd/mm/aaaa'
            inputClasses={classNames({
              'text-gray-400 p-2 border border-gray-300 hover:border-primary focus:border-primary bg-white appearance-none rounded w-full h-[2.5rem]':
                value == '',
            })}
            {...rest}
          />
          {errorMessage && <FieldMessage message={errorMessage} />}
        </>
      )}
    </div>
  )
}

DateField.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  label: PropTypes.string,
  className: PropTypes.string,
  isDisabled: PropTypes.bool,
  isReadOnly: PropTypes.bool,
  errorMessage: PropTypes.string,
  noMargins: PropTypes.bool,
}

DateField.defaultProps = {
  onChange: () => {},
  label: '',
  value: '',
  className: '',
  isDisabled: false,
  isReadOnly: false,
  errorMessage: '',
  noMargins: false,
}
