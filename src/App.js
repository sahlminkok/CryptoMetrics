import { Routes, Route } from 'react-router-dom';
import CryptosList from './components/CryptosList';
import Navbar from './components/Navbar';
import Details from './components/Details';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<CryptosList />} />
        <Route path="/:id" element={<Details />} />
      </Routes>
    </>
  );
}

export default App;
