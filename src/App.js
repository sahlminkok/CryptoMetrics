import { Routes, Route } from 'react-router-dom';
import CryptosList from './components/CryptosList';
import Navbar from './components/Navbar';
import Details from './components/Details';

const App = () => (
  <>
    <Navbar />
    <Routes>
      <Route path="/" element={<CryptosList />} />
      <Route path="/:id" element={<Details />} />
    </Routes>
  </>
);

export default App;
