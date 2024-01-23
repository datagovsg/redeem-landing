import { HStack, Text, VStack } from '@chakra-ui/react'
import React from 'react'

import CenterChildWithFixHeightAndWidth from '~components/CenterChildWithFixHeightAndWidth'
import { Image } from '~components/Image'

type RSGRewardsInstructionProps = {
  imageSrc: string
  stepIndex: number
  stepInstruction: React.ReactNode
}

const RSGRewardsInstruction = ({
  imageSrc,
  stepIndex,
  stepInstruction,
}: RSGRewardsInstructionProps) => {
  return (
    <HStack alignItems="flex-start" spacing="24px">
      <CenterChildWithFixHeightAndWidth
        width={{ lg: '72px', md: '60px', base: '76px' }}
        height={{ lg: '72px', md: '60px', base: '76px' }}
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
        {typeof stepInstruction === 'string' ? (
          <Text textStyle="body-1" color="neutral.700">
            {stepInstruction}
          </Text>
        ) : (
          stepInstruction
        )}
      </VStack>
    </HStack>
  )
}

export default RSGRewardsInstruction
