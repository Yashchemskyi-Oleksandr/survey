import { store } from '@/store/store';
import { Provider } from 'react-redux';

type GlobalLayoutProps = {
  children: React.ReactNode;
};

const GlobalLayout: React.FC<GlobalLayoutProps> = ({ children }) => (
  <Provider store={store}>{children}</Provider>
);

export default GlobalLayout;
