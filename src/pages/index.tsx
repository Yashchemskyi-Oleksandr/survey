import { useEffect, useState } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import PageLayout from '@/components/layouts/PageLayout';
import Welcome from '@/page-components/Welcome/Welcome';
import { surveyConfig } from '@/config';

export default function WelcomePage() {
  const [surveyTitle, setSurveyTitle] = useState<string>('');
  const [currentQuestionId, setCurrentQuestionId] = useState<string>('');
  const router = useRouter();

  useEffect(() => {
    // should be request for getting surveyConfig
    if (surveyConfig.questions.length) {
      const firstQuestionId = surveyConfig.questions[0].id;
      setSurveyTitle(surveyConfig.title);
      setCurrentQuestionId(firstQuestionId);
    }
  }, []);

  const startSurvey = () => {
    router.push(`/survey/${surveyConfig.questions[0].id}`);
  };
  return (
    <>
      <Head>
        <title>
          Nebula
          {surveyTitle}
        </title>
        <meta
          name='description'
          content={`Nebula ${surveyTitle}`}
        />
        <meta
          name='viewport'
          content='width=device-width, initial-scale=1'
        />
        <link
          rel='icon'
          href='/favicon.ico'
        />
      </Head>
      <Welcome
        surveyTitle={surveyTitle}
        currentQuestionId={currentQuestionId}
        startSurvey={startSurvey}
      />
    </>
  );
}

WelcomePage.getLayout = (page: React.ReactNode) => <PageLayout>{page}</PageLayout>;
