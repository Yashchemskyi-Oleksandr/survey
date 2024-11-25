import { store } from '@/store/store';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

type GlobalLayoutProps = {
  children: React.ReactNode;
};

const GlobalLayout: React.FC<GlobalLayoutProps> = ({ children }) => (
  <Provider store={store}>
    {children}
    <ToastContainer
      closeOnClick
      limit={3}
    />
  </Provider>
);

export default GlobalLayout;
