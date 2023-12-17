import { Accordion, Text, VStack } from '@chakra-ui/react'

import { HelpAccordionItem } from '~components/HelpAccordionItem'

type QuestionAndAnswerResponse = {
  questionTitle: string
  AnswerResponse: () => React.ReactNode | JSX.Element
}

type SectionTitleAndQuestionAndAnswers = {
  sectionTitle: string
  questionsAndAnswerResponses: ReadonlyArray<QuestionAndAnswerResponse>
}

type FAQWithHeaderAndListOfQuestionsAndAnswersProps = {
  header: string
  sectionTitleAndQuestionAndAnswers: ReadonlyArray<SectionTitleAndQuestionAndAnswers>
  headerTextColor?: string
  sectionTitleColor?: string
  questionTitleColor?: string
  answerTextColor?: string
}

const FAQWithHeaderAndListOfQuestionsAndAnswers = ({
  header,
  sectionTitleAndQuestionAndAnswers,
  headerTextColor = 'primary.500',
  sectionTitleColor = 'primary.500',
  questionTitleColor = 'content.strong',
  answerTextColor = 'content.default',
}: FAQWithHeaderAndListOfQuestionsAndAnswersProps) => {
  return (
    <VStack align="start" width="100%" spacing={{ base: '16px', md: '24px' }}>
      <Text
        textStyle={{ base: 'h4', md: 'h3-semibold' }}
        color={headerTextColor}
      >
        {header}
      </Text>
      <VStack align="start" width="100%" spacing={{ base: '48px', md: '72px' }}>
        {sectionTitleAndQuestionAndAnswers.map(
          ({ sectionTitle, questionsAndAnswerResponses }) => (
            <VStack
              key={sectionTitle}
              align="start"
              width="100%"
              spacing="24px"
            >
              <Text textStyle="h6" color={sectionTitleColor}>
                {sectionTitle}
              </Text>
              <Accordion
                width="100%"
                whiteSpace="pre-wrap"
                allowMultiple
                variant="medium"
              >
                {questionsAndAnswerResponses.map(
                  ({ questionTitle, AnswerResponse }) => (
                    <HelpAccordionItem
                      key={questionTitle}
                      title={questionTitle}
                      questionTitleColor={questionTitleColor}
                      answerTextColor={answerTextColor}
                    >
                      <AnswerResponse />
                    </HelpAccordionItem>
                  ),
                )}
              </Accordion>
            </VStack>
          ),
        )}
      </VStack>
    </VStack>
  )
}

export default FAQWithHeaderAndListOfQuestionsAndAnswers
