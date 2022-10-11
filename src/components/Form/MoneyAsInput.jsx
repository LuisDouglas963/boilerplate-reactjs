import React from 'react'
import NumberFormat from 'react-number-format'
import { Input } from '@/components/Form/index.js'

export const MoneyAsInput = ({ value, precision = 2, ...rest }) => {
  const { className = '', placeholder, name, prefix = 'R$ ', suffix = '', onChange, disabled = false } = rest
  return (
    <NumberFormat
      thousandsGroupStyle='thousand'
      decimalScale={precision}
      onClick={e => e.target.select()}
      fixedDecimalScale={true}
      value={value}
      displayType='input'
      name={name}
      disabled={disabled}
      isNumericString
      onValueChange={values => onChange(values)}
      placeholder={placeholder}
      decimalSeparator=','
      thousandSeparator='.'
      className={className}
      customInput={Input}
      suffix={suffix}
      prefix={prefix}
    />
  )
}
