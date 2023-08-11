import { BrowserRouter } from 'react-router-dom';
import './App.css';
import RouteComponent from './Component/RouteComponent';
import LinkComponent from './Component/LinkComponent';
function App() {
  return (
    <>
    <BrowserRouter>
      <LinkComponent/>
      <RouteComponent/>
    </BrowserRouter>
  </>
  );
}

export default App;
