import { HStack, VStack } from '@chakra-ui/react'

import LegalHeading from './LegalHeading'
import LegalText from './LegalText'
import { Line } from './types'

export function markdownLikeRender(lines: Line[]) {
  return lines.map((line, i) => {
    if (line.type === 'header') {
      return (
        <HStack
          key={`${line.type}-${line.label}-${i}`}
          textStyle={{ lg: 'legal-header-lg', base: 'legal-header-base' }}
          align="start"
          width="100%"
          spacing={0}
        >
          {line.label && (
            <LegalHeading minW={{ base: '3rem', lg: '4.5rem' }} as="p">
              {line.label}
            </LegalHeading>
          )}
          {!!line.children ? (
            <VStack align="start">
              <LegalHeading>{line.value}</LegalHeading>
              {markdownLikeRender(line.children)}
            </VStack>
          ) : (
            <LegalHeading>{line.value}</LegalHeading>
          )}
        </HStack>
      )
    }

    return (
      <HStack
        key={`${line.type}-${line.label}-${i}`}
        textStyle={{ lg: 'legal-text-lg', base: 'legal-text-base' }}
        align="start"
        width="100%"
        spacing={0}
      >
        {line.label && (
          <LegalText minW={{ base: '3rem', lg: '4.5rem' }} as="p">
            {line.label}
          </LegalText>
        )}
        {!!line.children ? (
          <VStack align="start">
            <LegalText marginBottom={{ lg: '0.5rem' }}>{line.value}</LegalText>
            {markdownLikeRender(line.children)}
          </VStack>
        ) : (
          <LegalText marginBottom={{ lg: '0.5rem' }}>{line.value}</LegalText>
        )}
      </HStack>
    )
  })
}
