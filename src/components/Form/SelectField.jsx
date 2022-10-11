import classNames from 'classnames'
import { FieldMessage } from './FieldMessage.jsx'
import { Label } from './Label.jsx'
import PropTypes from 'prop-types'

export const SelectField = ({
  options = [],
  label,
  onChange,
  isDisabled,
  name,
  errorMessage,
  value,
  optionPrimary,
  className,
}) => {
  const labelClasses = errorMessage !== '' ? 'text-red-600' : 'text-white'

  return (
    <div className='mb-3'>
      <Label className={classNames(labelClasses)} text={label} htmlFor={name} isValid={errorMessage === ''} />
      <select
        className={classNames(
          'p-2 border border-gray-300 hover:border-primary focus:border-primary bg-white rounded',
          className,
          {
            'text-gray-400': value == '',
          }
        )}
        name={name}
        value={value}
        onChange={onChange}
        disabled={isDisabled}
      >
        <option value='' className='text-gray-400'>
          {optionPrimary}
        </option>
        {options.map(item => {
          return (
            <option value={item.value} key={item.value}>
              {item.name}
            </option>
          )
        })}
      </select>
      {errorMessage && <FieldMessage message={errorMessage} />}
    </div>
  )
}

SelectField.propTypes = {
  name: PropTypes.string.isRequired,
  className: PropTypes.string,
  value: PropTypes.string.isRequired,
  options: PropTypes.array,
  onChange: PropTypes.func,
  label: PropTypes.string,
  isDisabled: PropTypes.bool,
  errorMessage: PropTypes.string,
  optionPrimary: PropTypes.string,
}

SelectField.defaultProps = {
  label: '',
  value: '',
  isDisabled: false,
  errorMessage: '',
  onChange: () => {},
}
