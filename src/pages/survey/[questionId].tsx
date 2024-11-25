import { GetStaticPaths, GetStaticProps } from 'next';
import SurveyLayout from '@/components/layouts/SurveyLayout';
import { QuestionProps } from '@/types/surveyTypes';
import Question from '@/page-components/Question/Question';
import surveyConfig from '../../config/survey.json';

const QuestionPage = ({ currentQuestion, initialQuestionId }: QuestionProps) => (
  <Question
    currentQuestion={currentQuestion}
    initialQuestionId={initialQuestionId}
  />
);

export default QuestionPage;

// should use api for getStaticPaths and getStaticProps
// Generate static paths for all questions
export const getStaticPaths: GetStaticPaths = async () => {
  const paths = surveyConfig.questions.map((question) => ({
    params: { questionId: question.id },
  }));

  return { paths, fallback: false };
};

// Fetch question data based on the questionId
export const getStaticProps: GetStaticProps = async (context) => {
  const questionId = context.params?.questionId;
  const question = surveyConfig.questions.find((q) => q.id === questionId);

  if (!question) {
    return { notFound: true };
  }

  return {
    props: { currentQuestion: question, initialQuestionId: surveyConfig.questions[0].id },
  };
};

QuestionPage.getLayout = (page: React.ReactNode) => <SurveyLayout>{page}</SurveyLayout>;
