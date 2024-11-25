import React from 'react';
import Button from '@/components/Button';
import styles from './Results.module.scss';

const Results = ({ answers }: { answers: Record<string, string> }) => (
  <section className={styles.results}>
    {Object.keys(answers).length ? (
      <>
        <h1>Thank you!</h1>
        <ul className={styles.results_list}>
          {Object.entries(answers).map(([key, value]) => (
            <li key={key}>{`${key}: ${value}`}</li>
          ))}
        </ul>
      </>
    ) : (
      <p>empty</p>
    )}
    <Button
      onClick={() => {
        window.location.href = '/';
      }}
    >
      Home page
    </Button>
  </section>
);

export default Results;
