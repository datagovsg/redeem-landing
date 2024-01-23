import { Text, VStack } from '@chakra-ui/react'
import { Button } from '@opengovsg/design-system-react'
import { BiRightArrowAlt } from 'react-icons/bi'

import { Image } from '~components/Image'
import SectionContainer from '~components/SectionContainer'
import { openInNewTab } from '~helper'
import CTAToSetUpRSGRewardsImage from '~images/CTAToSetupRSGRewards.svg'

type CTAToSetUpCampaignProps = {
  title: string
  description: string
  buttonText: string
  buttonURL: string
}

const CTAToSetUpCampaign = ({
  title,
  description,
  buttonText,
  buttonURL,
}: CTAToSetUpCampaignProps) => {
  return (
    <SectionContainer background="primary.700">
      <VStack
        alignItems="center"
        maxWidth="1440px"
        padding={{ base: '56px 24px', md: '88px 128px', lg: '88px 148px' }}
        textAlign="center"
        boxSizing="content-box"
        spacing="32px"
      >
        <Image
          src={CTAToSetUpRSGRewardsImage}
          alt="Ready to set up your own campaign?"
        />
        <VStack spacing={{ base: '32px', md: '8px', lg: '8px' }}>
          <Text
            textStyle={{ base: 'responsive-heading.heavy', md: 'h2', lg: 'h1' }}
            color="white"
          >
            {title}
          </Text>
          <Text
            textStyle={{ base: 'body-1', md: 'body-2', lg: 'body-1' }}
            color="white"
            whiteSpace="pre-line"
          >
            {description}
          </Text>
        </VStack>
        <Button
          colorScheme="outline-white"
          variant="outline"
          rightIcon={<BiRightArrowAlt />}
          onClick={() => openInNewTab(buttonURL)}
        >
          {buttonText}
        </Button>
      </VStack>
    </SectionContainer>
  )
}

export default CTAToSetUpCampaign
