import React from 'react'
import { useLocation } from 'react-router-dom'
import { useAuth } from '@/contexts/AuthContext'
import { Navigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import classNames from 'classnames'
import { Loading } from './Loading'

export const ScreenLoading = () => {

  const { loading } = useAuth()

  return (
    <div
      className={classNames(
        'flex flex-col w-screen h-screen justify-center none items-center bg-gray-200 transition-all duration-300 ease-in-out',
        { 'opacity-100': loading, 'opacity-0 hide': !loading }
      )}
    >
      <Loading width={80} />
      <span>{t('global.screenLoadingText')}</span>
    </div>
  )
}

export const PrivateRoute = ({ children }) => {
  const { token, tokenAdmin, loading } = useAuth()
  const location = useLocation()
  // return <ScreenLoading />
  return loading ? (
    <ScreenLoading />
  ) : token || tokenAdmin ? (
    children
  ) : (
    <Navigate to='/sign-in' replace state={{ from: location }} />
  )
}
