import { Provider } from 'react-redux';
import store from './store';
const Providers = ({ children = 'No content' }) => (
   <Provider store={store}>{children}</Provider>
);
export default Providers;
