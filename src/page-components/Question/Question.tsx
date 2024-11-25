import React, { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import RenderComponent from '@/components/RenderComponent/RenderComponent';
import { formatQuestion, getNextQuestionId } from '@/services/surveyService';
import {
  getAnswers, resetSurvey, setAnswer, setQuestionIdToHistory,
} from '@/store/surveySlice';
import { QuestionProps, QuestionType } from '@/types/surveyTypes';
import { toast } from 'react-toastify';
import styles from './Question.module.scss';

const Question = ({ currentQuestion, initialQuestionId }: QuestionProps) => {
  const router = useRouter();
  const dispatch = useDispatch();
  const isInitialVisit = useRef(true);
  const answers = useSelector(getAnswers);

  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
  const [textValue, setTextValue] = useState<string>('');

  const isMultiChoice = [QuestionType.multiChoice].includes(currentQuestion.type);
  const showNextButton = [QuestionType.multiChoice, QuestionType.text].includes(currentQuestion.type);
  const isTextType = [QuestionType.text].includes(currentQuestion.type);
  const answerNotSelected = (isTextType && !textValue) || (isMultiChoice && !selectedOptions.length);

  const redirectAnswer = (nextQuestionId: string) => {
    if (nextQuestionId) {
      if (nextQuestionId.startsWith('/')) {
        router.push(nextQuestionId);
      } else {
        router.push(`/survey/${nextQuestionId}`);
        dispatch(setQuestionIdToHistory(currentQuestion.id));
      }
    } else {
      toast.warn('No valid next question found!');
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
    if (answerNotSelected) {
      toast.warn('Please complete question');
      return;
    }
    dispatch(setAnswer({ questionId: currentQuestion.id, answer }));

    const nextQuestionId = getNextQuestionId({
      answer, answers, dependsOn: currentQuestion.dependsOn, next: currentQuestion.next,
    });
    redirectAnswer(nextQuestionId);
  };

  const handleTextAnswer = (answer: string) => {
    setTextValue(answer);
  };

  const handleMultiAnswers = (answer: string) => {
    setSelectedOptions(
      (prevSelected) => (prevSelected.includes(answer)
        ? prevSelected.filter((item) => item !== answer)
        : [...prevSelected, answer]),
    );
  };

  return (
    <section className={styles.survey}>
      <div className={styles.survey_question}>
        <h1 className={styles.title}>{formatQuestion(currentQuestion.question, answers)}</h1>
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
          } else if (isTextType) {
            handleTextAnswer(answer);
          } else {
            handleAnswer(answer);
          }
        }}
        nextQuestion={() => {
          if (isMultiChoice) {
            handleAnswer(selectedOptions.join(', '));
            setSelectedOptions([]);
          } else if (isTextType) {
            handleAnswer(textValue);
            setTextValue('');
          }
        }}
      />
      )}
    </section>
  );
};

export default Question;
