import AppFooter from '~components/AppFooter'
import NavMenu from '~components/NavMenu'
import { VStack } from '~components/chakra'
import Hero from './Hero'

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <VStack as="main" align="stretch" flexGrow={1} spacing={0}>
      <NavMenu />
      <VStack padding="0 148px">
        <Hero />
        {children}
      </VStack>
      <AppFooter />
    </VStack>
  )
}
