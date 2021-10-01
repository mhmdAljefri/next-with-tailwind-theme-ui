import { Page } from '@types'
import { Flex, Link, Text } from 'theme-ui'

const Home: Page = () => {
  return (
    <Flex as="h1" className="h-screen justify-center items-center flex-col">
      <Text sx={{ fontSize: 5 }}>Next Tailwind with Theme UI</Text>
      <Link href="https://github.com/mhmdAljefri"> By @mhmdAljefri</Link>
    </Flex>
  )
}

Home.authenticate = 'both'

export default Home
