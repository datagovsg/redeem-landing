import {
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Text,
  TextProps,
} from '@chakra-ui/react'
import React from 'react'

interface HelpAccordionItemProps {
  title: string
  questionTitleColor?: string
  answerTextColor?: string
  children: React.ReactNode
  questionTextStyle?: TextProps['textStyle']
  answerTextStyle?: TextProps['textStyle']
}

export const HelpAccordionItem = ({
  title,
  children,
  questionTitleColor = 'content.strong',
  answerTextColor = 'content.default',
  questionTextStyle,
  answerTextStyle,
}: HelpAccordionItemProps) => {
  return (
    <AccordionItem>
      <AccordionButton padding={{ base: '12px 16px', lg: '20px 16px' }}>
        <Text
          textStyle={questionTextStyle}
          flex="1"
          color={questionTitleColor}
          textAlign="left"
        >
          {title}
        </Text>
        <AccordionIcon />
      </AccordionButton>
      <AccordionPanel
        textStyle={answerTextStyle}
        paddingBottom={{ base: '24px' }}
        color={answerTextColor}
      >
        {children}
      </AccordionPanel>
    </AccordionItem>
  )
}
