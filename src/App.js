import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';
import Checkout from './pages/Checkout';
import HomePage from './pages/Home';
import LoginPage from './pages/Login';
import Footer from './components/Footer';
import Signup from './pages/Signup';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App;
