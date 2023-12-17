import {
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Text,
} from '@chakra-ui/react'
import React from 'react'

interface HelpAccordionItemProps {
  title: string
  questionTitleColor?: string
  answerTextColor?: string
  children: React.ReactNode
}

export const HelpAccordionItem = ({
  title,
  children,
  questionTitleColor = 'content.strong',
  answerTextColor = 'content.default',
}: HelpAccordionItemProps) => {
  return (
    <AccordionItem>
      <AccordionButton padding={{ base: '12px 16px', md: '20px 16px' }}>
        <Text
          textStyle={{ base: 'subhead-2', md: 'subhead-1' }}
          flex="1"
          color={questionTitleColor}
          textAlign="left"
        >
          {title}
        </Text>
        <AccordionIcon />
      </AccordionButton>
      <AccordionPanel paddingBottom={{ base: '24px' }} color={answerTextColor}>
        {children}
      </AccordionPanel>
    </AccordionItem>
  )
}
