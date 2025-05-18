import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './routes/AppRoutes';
import './assets/libs/css/neo.all.min.css';
import './assets/css/App.css'
import { ThemeProvider } from './context/ThemeContext';

const App = () => {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
