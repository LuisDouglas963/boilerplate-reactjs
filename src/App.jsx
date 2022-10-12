import { Button, Loading, Logo, MoneyAsText } from "@/components";
import logo from '@/assets/react.svg'
import { Layout } from "@/Layout";

function App() {
  return (
    <div className='App'>
      <Layout>
      <Logo src={logo} className='animate-bounce' />
      <Loading />
      <Button text='Button' className='text-gray-100' />
      </Layout>
    </div>
  )
}

export default App
