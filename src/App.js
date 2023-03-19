import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Checkout from './pages/Checkout';
import HomePage from './pages/Home';
import LoginPage from './pages/Login';
import RootLayout from './pages/RootLayout';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'checkout', element: <Checkout /> },
      { path: 'login', element: <LoginPage /> },
    ]
  },
  {}
]);

function App() {
  return <RouterProvider router={router} />
}

export default App;
