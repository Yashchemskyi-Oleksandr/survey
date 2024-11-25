import GlobalLayout from '@/components/layouts/GlobalLayout';
import type { AppProps } from 'next/app';
import type { ReactElement, ReactNode } from 'react';
import '@/styles/globals.scss';

type NextPageWithLayout = {
  getLayout?: (page: ReactNode) => ReactElement;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};
export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout || ((page) => page);

  return <GlobalLayout>{getLayout(<Component {...pageProps} />)}</GlobalLayout>;
}
