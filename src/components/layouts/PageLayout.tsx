import React, { ReactNode } from 'react';
import Header from '../Header/Header';

const PageLayout = ({ children }: { children: ReactNode }) => (
  <main>
    <Header />
    {children}
  </main>
);

export default PageLayout;
