import { format } from 'date-fns'
import { enUS, ptBR } from 'date-fns/locale'
import PropTypes from 'prop-types'

export const DateAsText = ({ date, locale = 'ptBR', type = 'date', fallbackText = '-' }) => {
  const dateToBeUsed = new Date(date)
  const locales = { enUS, ptBR }
  let dateFormat = type === 'datetime' ? 'yyyy-MM-dd HH:mm' : 'yyyy-MM-dd'
  if (locale === 'ptBR') dateFormat = type === 'datetime' ? 'dd/MM/yyyy HH:mm' : 'dd/MM/yyyy'
  return (
    <span>
      {date
        ? format(dateToBeUsed, dateFormat, {
            locale: locales[locale],
          })
        : fallbackText}
    </span>
  )
}

DateAsText.propTypes = {
  date: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  type: PropTypes.oneOf(['date', 'datetime']),
  fallbackText: PropTypes.string,
  locale: PropTypes.oneOf(['enUS', 'ptBR']),
}

DateAsText.defaultProps = {
  type: 'date',
  fallbackText: '-',
  locale: 'ptBR',
}
