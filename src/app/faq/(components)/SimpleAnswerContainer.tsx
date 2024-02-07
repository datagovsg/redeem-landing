import { Text } from '@chakra-ui/react'

import AnswerContainer from './AnswerContainer'

import TextWithLink, { TextWithLinkProps } from '~components/TextWithLink'

type SimpleQuestionContainerProps = {
  answers: (string | TextWithLinkProps)[]
}

// Container for answer that are basic formatted (i.e no bullet points, or tables etc)
const SimpleAnswerContainer = ({ answers }: SimpleQuestionContainerProps) => {
  return (
    <AnswerContainer textStyle="body-2" align="start">
      {answers.map((answer) =>
        typeof answer === 'string' ? (
          <Text key={answer}>{answer}</Text>
        ) : (
          <TextWithLink
            {...answer}
            // Increases the randomness of the key incase of clash
            key={`${answer.beforeLinkText}-${answer.linkText}-${answer.afterLinkText}`}
          />
        ),
      )}
    </AnswerContainer>
  )
}

export default SimpleAnswerContainer
