import { useRouter } from 'next/router';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Image from 'next/image';
import { getQuestionHistory, goToPreviousQuestion } from '@/store/surveySlice';
import styles from './Header.module.scss';

const Header = ({ withBackButton }: { withBackButton?: boolean }) => {
  const router = useRouter();
  const dispatch = useDispatch();
  const questionHistory = useSelector(getQuestionHistory);

  return (
    <header className={styles.header}>
      {/* Also it's possible to make it by router.back() */}
      {/* <button onClick={() => router.back()} type='button'>
      Previous question
    </button> */}
      {questionHistory.length && withBackButton ? (
        <button
          className={styles.backButton}
          onClick={() => {
            const previousQuestionId = questionHistory[questionHistory.length - 1];
            router.push(`/survey/${previousQuestionId}`);
            dispatch(goToPreviousQuestion(previousQuestionId));
          }}
          type='button'
          aria-label={`Back to question ${questionHistory[questionHistory.length - 1]}`}
        >
          <Image
            height={24}
            width={24}
            src='/arrow_black.svg'
            alt='logo'
          />
        </button>
      ) : null}
      <Image
        height={24}
        width={24}
        className={styles.logo}
        src='/logo.webp'
        alt='logo'
      />
    </header>
  );
};

export default Header;
