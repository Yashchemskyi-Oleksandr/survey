import PageLayout from '@/components/layouts/PageLayout';
import Results from '@/page-components/Results/Results';
import { getAnswers } from '@/store/surveySlice';
import { useSelector } from 'react-redux';

export default function ResultsPage() {
  const answers = useSelector(getAnswers);

  return (<Results answers={answers} />);
}

ResultsPage.getLayout = (page: React.ReactNode) => <PageLayout>{page}</PageLayout>;
