import { Flex, Text, VStack } from '@chakra-ui/react'

import SectionContainer from '~components/SectionContainer'

type CommonLegalHeaderProps = {
  header: string
  versionAndUpdatedAt: string
  backgroundColor?: string
}

const CommonLegalHeader = ({
  header,
  versionAndUpdatedAt,
  backgroundColor = 'primary.200',
}: CommonLegalHeaderProps) => {
  return (
    <SectionContainer backgroundColor={backgroundColor}>
      <Flex
        alignItems="center"
        justifyContent={{ base: 'initial', md: 'space-between' }}
        flexDirection={{ base: 'column', md: 'row' }}
        flexGrow={1}
        gap={{ base: '24px', md: '0px' }}
        maxWidth="800px"
        padding={{ base: '32px 24px 40px', sm: '44px 80px', lg: '44px 264px' }}
        boxSizing="content-box"
      >
        <VStack align="start" spacing="16px">
          <Text textStyle="display-2" color="primary.700">
            {header}
          </Text>
          <Text textStyle="body-1" color="neutral.900">
            {versionAndUpdatedAt}
          </Text>
        </VStack>
      </Flex>
    </SectionContainer>
  )
}

export default CommonLegalHeader
