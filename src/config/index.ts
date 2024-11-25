import { survey } from './survey';
import { surveyWithAllComponents } from './survey_with_all_components';

const basicConfig = true;
export const surveyConfig = basicConfig ? survey : surveyWithAllComponents;
