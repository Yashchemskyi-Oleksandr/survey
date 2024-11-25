import { INext } from '@/types/surveyTypes';

export const getNextQuestionId = ({
  answer,
  answers,
  dependsOn,
  next,
}: {
  answer: string;
  answers: Record<string, string>;
  dependsOn?: string;
  next: INext

}): string => {
  if (dependsOn && typeof next === 'object') {
    const dependencyAnswer = answers[dependsOn];

    return dependencyAnswer && next[dependencyAnswer] ? next[dependencyAnswer] : '';
  }

  if (typeof next === 'string') {
    return next;
  }

  if (typeof next === 'object') {
    return next[answer] || '';
  }

  return '';
};
