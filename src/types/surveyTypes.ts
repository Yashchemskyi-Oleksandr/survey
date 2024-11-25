import { Component } from '@/components/RenderComponent/RenderComponent';

export type INext = string | Record<string, string>;

export interface IQuestion {
  id: string;
  type: 'singleChoice' | 'multiChoice' | 'text';
  screenStyle?: 'mediateScreen';
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
