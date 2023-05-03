import {
  BrowserRouter,
  Routes,
  Route,
  useLocation
} from 'react-router-dom';
import Checkout from './pages/Checkout';
import HomePage from './pages/Home';
import LoginPage from './pages/Login';
import Signup from './pages/Signup';
import ItemDetails from './pages/ItemDetails';
import { useEffect } from 'react';
import Profile from './pages/Profile';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname])

  return null;
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/item/:itemId" element={<ItemDetails />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
