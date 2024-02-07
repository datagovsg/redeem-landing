import { Accordion, Text, TextProps, VStack } from '@chakra-ui/react'

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

  headerTextStyle?: TextProps['textStyle']
  sectionTitleTextStyle?: TextProps['textStyle']
  questionTextStyle?: TextProps['textStyle']
  answerTextStyle?: TextProps['textStyle']
}

const FAQWithHeaderAndListOfQuestionsAndAnswers = ({
  header,
  sectionTitleAndQuestionAndAnswers,
  headerTextColor = 'primary.500',
  sectionTitleColor = 'primary.500',
  questionTitleColor = 'content.strong',
  answerTextColor = 'content.default',
  headerTextStyle = { base: 'h4', md: 'h3-semibold' },
  sectionTitleTextStyle = 'h6',
  questionTextStyle = { base: 'subhead-2', lg: 'subhead-1' },
  answerTextStyle = 'body-2',
}: FAQWithHeaderAndListOfQuestionsAndAnswersProps) => {
  return (
    <VStack align="start" width="100%" spacing={{ base: '16px', md: '24px' }}>
      <Text textStyle={headerTextStyle} color={headerTextColor}>
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
              <Text textStyle={sectionTitleTextStyle} color={sectionTitleColor}>
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
                      questionTextStyle={questionTextStyle}
                      answerTextStyle={answerTextStyle}
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
