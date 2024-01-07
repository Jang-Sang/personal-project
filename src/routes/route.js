import { createBrowserRouter } from 'react-router-dom';
import { HomePage } from '../pages/Home';
import MainPage from 'pages/Main';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/main',
    element: <MainPage />,
  },
]);
export default router;
