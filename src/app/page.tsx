import NavMenu from '~components/NavMenu'
import { VStack, Text } from '~components/chakra'

export default function Home() {
  return (
    <VStack as="main" align="stretch" flexGrow={1} spacing={0}>
      <Text>Home page bro!</Text>
    </VStack>
  )
}
