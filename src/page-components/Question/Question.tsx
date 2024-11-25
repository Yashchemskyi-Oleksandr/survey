import React, { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import RenderComponent from '@/components/RenderComponent/RenderComponent';
import { getNextQuestionId } from '@/services/surveyService';
import {
  getAnswers, resetSurvey, setAnswer, setQuestionIdToHistory,
} from '@/store/surveySlice';
import { QuestionProps, QuestionType } from '@/types/surveyTypes';
import styles from './Question.module.scss';

const Question = ({ currentQuestion, initialQuestionId }: QuestionProps) => {
  const router = useRouter();
  const dispatch = useDispatch();
  const isInitialVisit = useRef(true);
  const answers = useSelector(getAnswers);

  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
  const isMultiChoice = [QuestionType.multiChoice].includes(currentQuestion.type);
  const showNextButton = [QuestionType.multiChoice, QuestionType.text].includes(currentQuestion.type);

  const redirectAnswer = (nextQuestionId: string) => {
    if (nextQuestionId) {
      if (nextQuestionId.startsWith('/')) {
        router.push(nextQuestionId);
      } else {
        router.push(`/survey/${nextQuestionId}`);
        dispatch(setQuestionIdToHistory(currentQuestion.id));
      }
    } else {
      // eslint-disable-next-line no-alert
      alert('No valid next question found!');
      router.push('/');
      dispatch(resetSurvey());
    }
  };

  useEffect(() => {
    if (isInitialVisit.current) {
      isInitialVisit.current = false;
      router.push(`/survey/${initialQuestionId}`);
    }
  }, [router, initialQuestionId]);

  const handleAnswer = (answer: string) => {
    dispatch(setAnswer({ questionId: currentQuestion.id, answer }));

    const nextQuestionId = getNextQuestionId({
      answer, answers, dependsOn: currentQuestion.dependsOn, next: currentQuestion.next,
    });
    redirectAnswer(nextQuestionId);
  };

  const handleMultiAnswers = (answer: string) => {
    setSelectedOptions(
      (prevSelected) => (prevSelected.includes(answer)
        ? prevSelected.filter((item) => item !== answer)
        : [...prevSelected, answer]),
    );
  };

  const formatQuestion = (question: string) => {
    if (!question) return '';
    return question.replace(/\{(\w+)\}/g, (_, key) => answers[key] || '');
  };
  return (
    <section className={styles.survey}>
      <div className={styles.survey_question}>
        <h1 className={styles.title}>{formatQuestion(currentQuestion.question)}</h1>
        {currentQuestion.quote && <p className={styles.quote}>{currentQuestion.quote}</p>}
      </div>
      {currentQuestion?.component && (
      <RenderComponent
        component={currentQuestion.component}
        selectedOptions={selectedOptions}
        showNextButton={showNextButton}
        setAnswer={(answer: string) => {
          if (isMultiChoice) {
            handleMultiAnswers(answer);
          } else {
            handleAnswer(answer);
          }
        }}
        nextQuestion={() => {
          if (isMultiChoice) {
            handleAnswer(selectedOptions.join(', '));
            setSelectedOptions([]);
          } else {
            handleAnswer(currentQuestion.next as string);
          }
        }}
      />
      )}
    </section>
  );
};

export default Question;
