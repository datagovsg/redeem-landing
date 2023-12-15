import { HStack, VStack, Text, Box, Flex } from '@chakra-ui/react'
import React from 'react'
import CenterChildWithFixHeightAndWidth from '~components/CenterChildWithFixHeightAndWidth'
import { Image } from '~components/Image'

type HowToSpendYourRSGRewardsInstructionProps = {
  stepIndex: number
  stepInstruction: string | React.ReactNode
  imageSrc: string
}

const HowToSpendYourRSGRewardsInstruction = ({
  stepIndex,
  stepInstruction,
  imageSrc,
}: HowToSpendYourRSGRewardsInstructionProps) => {
  return (
    <HStack alignItems="flex-start" spacing="24px">
      <CenterChildWithFixHeightAndWidth
        width="72px"
        height="72px"
        background="primary.100"
        borderRadius="50%"
      >
        <Image
          src={imageSrc}
          alt={`How to spend your RedeemSG Rewards Step: ${stepIndex}`}
        />
      </CenterChildWithFixHeightAndWidth>
      <VStack align="start" spacing="8px">
        <CenterChildWithFixHeightAndWidth
          width="20px"
          height="20px"
          borderRadius="3px"
          background="primary.400"
        >
          {/* This is a custom text style not in our design system */}
          <Text
            color="white"
            fontSize="0.75rem"
            fontWeight={600}
            lineHeight={20}
          >
            {stepIndex}
          </Text>
        </CenterChildWithFixHeightAndWidth>
        {stepInstruction}
      </VStack>
    </HStack>
  )
}

export default HowToSpendYourRSGRewardsInstruction
