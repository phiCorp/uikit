import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './routes/AppRoutes';
import './libs/css/neo.all.min.css';

const App = () => {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
};

export default App;
