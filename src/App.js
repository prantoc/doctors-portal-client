import { RouterProvider } from 'react-router-dom';
import './App.css';
import { router } from './Routes/Router/Router';
import './assets/css/main/main.css'
function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
