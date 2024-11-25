import React from 'react';
import styles from './Welcome.module.scss';

interface IWelcome {
  surveyTitle: string;
  currentQuestionId: string;
  startSurvey: () => void;
}
const Welcome = ({ surveyTitle, currentQuestionId, startSurvey }: IWelcome) => (
  <section className={styles.welcome}>
    <h1>
      Welcome to the Nebula
      {surveyTitle}
      !
    </h1>
    {currentQuestionId ? (
      <button
        type='button'
        className='button'
        aria-label='Start survey'
        onClick={startSurvey}
      >
        Start Survey
      </button>
    ) : (
      <h1>Please add config file</h1>
    )}
  </section>
);

export default Welcome;
