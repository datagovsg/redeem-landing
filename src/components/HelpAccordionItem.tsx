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
  children: React.ReactNode
}

export const HelpAccordionItem = ({
  title,
  children,
}: HelpAccordionItemProps) => {
  return (
    <AccordionItem>
      <AccordionButton>
        <Text
          textStyle="subhead-1"
          flex="1"
          color="secondary.500"
          textAlign="left"
        >
          {title}
        </Text>
        <AccordionIcon />
      </AccordionButton>
      <AccordionPanel paddingBottom={4}>{children}</AccordionPanel>
    </AccordionItem>
  )
}
