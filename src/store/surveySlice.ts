import { Answers } from '@/types/surveyTypes';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface SurveyState {
  answers: Answers;
  questionHistory: string[];
}

const initialState: SurveyState = {
  answers: {},
  questionHistory: [],
};

const surveySlice = createSlice({
  name: 'survey',
  initialState,
  reducers: {
    setAnswer: (state, action: PayloadAction<{ questionId: string; answer: string }>) => {
      const { questionId, answer } = action.payload;
      state.answers[questionId] = answer;
    },
    setQuestionIdToHistory: (state, action: PayloadAction<string>) => {
      state.questionHistory.push(action.payload);
    },
    goToPreviousQuestion: (state, action: PayloadAction<string>) => {
      state.questionHistory = state.questionHistory.slice(0, -1);
      delete state.answers[action.payload];
    },
    resetSurvey: () => initialState,
  },
  selectors: {
    getAnswers: (state) => state.answers,
    getQuestionHistory: (state) => state.questionHistory,
  },
});

export const {
  setAnswer, resetSurvey, setQuestionIdToHistory, goToPreviousQuestion,
} = surveySlice.actions;

export const { getAnswers, getQuestionHistory } = surveySlice.selectors;
export default surveySlice.reducer;
