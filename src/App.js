import { Outlet } from 'react-router-dom';
import './App.css';
import { Navigation } from './Components/Navigation';
function App() {
  return (
    <>
      <Navigation/>
      <Outlet></Outlet>
    </>
  );
}

export default App;
