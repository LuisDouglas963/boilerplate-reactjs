import React from 'react'
import NumberFormat from 'react-number-format'
import classNames from 'classnames'

const MoneyAsText = ({ value, prefix = 'R$ ', precision = 2, ...rest }) => {
  const { className, suffix = '' } = rest
  let decimalSeparator = ','
  let thousandSeparator = '.'

  if (prefix.includes('U$')) {
    decimalSeparator = '.'
    thousandSeparator = ','
  }

  return (
    <NumberFormat
      decimalScale={precision}
      fixedDecimalScale={true}
      value={value}
      displayType='text'
      decimalSeparator={decimalSeparator}
      thousandSeparator={thousandSeparator}
      prefix={prefix}
      suffix={suffix}
      className={classNames(className, { 'text-red-600': value < 0 })}
    />
  )
}

export default MoneyAsText
