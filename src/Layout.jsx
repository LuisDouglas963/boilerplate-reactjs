
export const Layout = ({ children }) => {
  return (
    <div className='flex justify-center bg-blue-900 h-screen'>
      <main className='container m-3'>
        {children}
      </main>
    </div>
  )
}
