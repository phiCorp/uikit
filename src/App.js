import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './routes/AppRoutes';
import './libs/neo.all.min.css';

const App = () => {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
};

export default App;
