import classNames from 'classnames'
import PropTypes from 'prop-types'

export const Label = ({ text, className, children, htmlFor, isValid = true }) => {
  return (
    <label className={classNames('mb-1 block', className, { 'text-red-600': !isValid })} htmlFor={htmlFor}>
      {children ?? text}
    </label>
  )
}

Label.propTypes = {
  text: PropTypes.string,
  className: PropTypes.string,
  htmlFor: PropTypes.string,
  isValid: PropTypes.bool,
  children: PropTypes.node,
}

Label.defaultProps = {
  isValid: false,
}
