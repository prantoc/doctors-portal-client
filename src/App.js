import { RouterProvider } from 'react-router-dom';
import './App.css';
import { router } from './Routes/Router/Router';
import './assets/css/main/main.css'
import { Toaster } from 'react-hot-toast';
function App() {
  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
