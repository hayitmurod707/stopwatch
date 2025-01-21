import { createRoot } from 'react-dom/client';
import App from './App';
import Providers from './Providers';
import './style.css';
const root = createRoot(document.getElementById('root'));
root.render(
   <Providers>
      <App />
   </Providers>
);
