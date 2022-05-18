import './App.css';
import './key';
import { Axios } from 'axios';
import { useState } from 'react';

function App() {

  const {query, setQuery} = useState("");

  const YOUR_APP_ID ="98ae48c9";
const YOUR_APP_KEY= "5dadbe216d63560310fe00f37bd98dec";

  var url =`https://api.edamam.com/search?q=chicken&app_id=
  98ae48c9&app_key=5dadbe216d63560310fe00f37bd98dec$from=0&to=3&
  calories=591-722&health=alcohol-free`;

  return (
    <div className="app">
      <h1>Food Recipe Plaza</h1>
      <form className='app__searchForm'>
      <input className='app__input' type="text" placeholder="enter ingredient"
      value={query} onChange={(e) => setQuery(e.target.value)} />
      <input  className='app__submit' type='submit' value='Search' />
      </form>
    </div>
  );
}

export default App;
