import NavMenu from '~components/NavMenu'
import { VStack } from '~components/chakra'
import Hero from './Hero'
import LayoutForEntitiesInformation from './LayoutForEntitiesInformation'

export default function Home() {
  return (
    <VStack as="main" align="stretch" flexGrow={1} spacing={0}>
      <Hero />
      <LayoutForEntitiesInformation />
    </VStack>
  )
}
