import React, { ReactNode } from 'react';
import Header from '../Header/Header';

const SurveyLayout = ({ children }: { children: ReactNode }) => (
  <main>
    <Header withBackButton />
    {children}
  </main>
);

export default SurveyLayout;
