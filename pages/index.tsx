import type { NextPage } from 'next'
import Calculator from '../components/Calculator'
import Layout from '../components/layout/LayoutPrimary'

const Home: NextPage = () => {
  return (
    <Layout>
      <Calculator />
    </Layout>
  )
}

export default Home
