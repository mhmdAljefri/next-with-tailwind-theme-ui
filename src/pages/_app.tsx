import 'src/styles/global.css'

import React from 'react'
import { AppProps } from 'next/app'

const Noop: React.FC = ({ children }) => <>{children}</>

const App: React.FC<AppProps> = ({ Component }) => {
  const Layout = (Component as any).Layout || Noop

  return (
    <Layout>
      <Component />
    </Layout>
  )
}

export default App
