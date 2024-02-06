import { Flex, HStack, Text, VStack } from '@chakra-ui/react'

import CenterChildWithFixHeightAndWidth from '~components/CenterChildWithFixHeightAndWidth'
import { Image } from '~components/Image'

type RSGInstructionProps = {
  imageSrc: string
  stepIndex: number
  stepInstruction: React.ReactNode
  stepTitle: string
}

const RSGInstruction = ({
  imageSrc,
  stepIndex,
  stepInstruction,
  stepTitle,
}: RSGInstructionProps) => {
  return (
    <HStack
      alignItems={{
        lg: 'center',
        'md-lg': 'flex-start',
        sm: 'center',
        base: 'flex-start',
      }}
      spacing={{ lg: '28px', 'md-lg': '24px', sm: '20px', base: '20px' }}
    >
      <CenterChildWithFixHeightAndWidth
        width="72px"
        height="72px"
        background="primary.100"
        borderRadius="50%"
      >
        <Image
          src={imageSrc}
          alt={`How to spend your RedeemSG Step: ${stepIndex}`}
        />
      </CenterChildWithFixHeightAndWidth>
      <VStack align="start" spacing="4px">
        <Flex
          alignItems={{
            lg: 'center',
            'md-lg': 'flex-start',
            sm: 'center',
            base: 'flex-start',
          }}
          flexDirection={{
            lg: 'row',
            'md-lg': 'column',
            sm: 'row',
            base: 'column',
          }}
          gap="10px"
        >
          <CenterChildWithFixHeightAndWidth
            width="19px"
            height="19px"
            borderRadius="50%"
            background="rsgInstructionColors.background"
          >
            <Text
              textStyle="rsg-instruction-text"
              color="rsgInstructionColors.text"
            >
              {stepIndex}
            </Text>
          </CenterChildWithFixHeightAndWidth>
          <Text textStyle="h6" color="neutral.800">
            {stepTitle}
          </Text>
        </Flex>
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

export default RSGInstruction
