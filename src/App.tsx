import { BrowserRouter } from 'react-router-dom';
import './App.scss';
import Routers from './routes/routes';

function App() {
  return (
    <BrowserRouter>
      <Routers />
    </BrowserRouter>
  );
}

export default App;
