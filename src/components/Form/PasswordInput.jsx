import React, { useState } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { Input } from '@/components/Form/Input.jsx'
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai'

export const PasswordInput = ({ name, className, value, onChange, ...rest }) => {
  const [visible, setVisible] = useState(false)

  const inputClassName = classNames(
    'w-full block text-[1rem] text-[#212529] bg-white bg-clip-padding py-[0.375rem] px-[0.75rem] border border-[#ced4da] rounded-[.375rem]',
    className
  )
  return (
    <div className='flex flex-row relative'>
      <Input
        type={visible ? 'text' : 'password'}
        name={name}
        value={value}
        onChange={onChange}
        className={inputClassName}
        {...rest}
      />
      <button
        type='button'
        onClick={() => setVisible(!visible)}
        className={classNames('absolute cursor-pointer', {
          'right-[7px] top-[7px]': !visible,
          'right-[7px] top-[6.5px]': visible,
        })}
      >
        {visible ? <AiOutlineEye size={25} /> : <AiOutlineEyeInvisible size={25} />}
      </button>
    </div>
  )
}

PasswordInput.propTypes = {
  name: PropTypes.string.isRequired,
  className: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
}

PasswordInput.defaultProps = {
  value: '',
  onChange: () => {},
}
