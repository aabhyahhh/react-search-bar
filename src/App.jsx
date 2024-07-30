import { useState } from 'react'
import './App.css'
import { SearchBar } from './components/SearchBar'
import { SearchResultsList } from './components/SearchResultsList';

function App() {

  const[results, setResults] = useState([]);
  

  return (
    <>
    <div className="App">
      <div className="Fyndit-search-container">
          <SearchBar setResults={setResults} />
          <SearchResultsList results={results} />
        </div>
      </div>      
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
