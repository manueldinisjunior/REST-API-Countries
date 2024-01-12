import React, { Suspense, lazy, useState } from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Loader from './loader';
import axios from 'axios';  // Import axios library
const Navbar = lazy(() => import('./Navbar'));
const MainPage = lazy(() => import('./mainPage'));
const CountryDetail = lazy(() => import('./CountryDetail'));

const App = () => {
  // State to store search term and results
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  // Function to handle country search
  const handleSearch = async () => {
    try {
      // Make API request to Rest Countries API using axios
      const response = await axios.get(`https://restcountries.com/v3.1/name/${searchTerm}`);
      setSearchResults(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
      setSearchResults([]);
    }
  };

  return (
    <>
      <Navbar />
      <Suspense fallback={<Loader />}>
        <Router>
          <Routes>
            <Route
              path='/'
              element={<MainPage setSearchTerm={setSearchTerm} handleSearch={handleSearch} />}
            />
            <Route path='/country/:alpha3Code' element={<CountryDetail />} />
          </Routes>
        </Router>
      </Suspense>
    </>
  );
};

export default App;

