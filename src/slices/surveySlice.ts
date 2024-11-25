import { createSlice } from '@reduxjs/toolkit';

interface SurveyState {
  answers: Record<string, string>;
  questionHistory: string[];
}

const initialState: SurveyState = {
  answers: {},
  questionHistory: [],
};

const surveySlice = createSlice({
  name: 'survey',
  initialState,
  reducers: {},
});

export default surveySlice.reducer;
