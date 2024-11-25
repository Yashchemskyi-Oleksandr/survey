import { Component } from '@/components/RenderComponent/RenderComponent';

export type INext = string | Record<string, string>;

export enum QuestionType {
  singleChoice = 'singleChoice',
  multiChoice = 'multiChoice',
  text = 'text',
}
export interface IQuestion {
  id: string;
  type: QuestionType;
  question: string;
  quote?: string;
  component?: Component;
  options?: string[];
  dependsOn?: string;
  next: INext;

}
export type QuestionProps = {
  currentQuestion: IQuestion;
  initialQuestionId: string;
};
