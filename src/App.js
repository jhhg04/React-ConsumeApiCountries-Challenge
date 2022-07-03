import { useState, useEffect } from 'react';
import CumtomsHooks from './components/CumtomsHooks';
import { useFetch } from './hooks/useFetch';

function App() {
  const [countries, setCountries] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    // const url = 'https://countriesnow.space/api/v0.1/countries/capital';
    // const res = await fetch(url);
    // const data = await res.json();
    // console.log(data.data);
    // setCountries(data.data);
  };

  const url = 'https://countriesnow.space/api/v0.1/countries/capital';
  // const data = useFetch(url);
  const { data, isLoading, error } = useFetch(url);
  // console.log(error);

  const searcher = (e) => {
    setSearch(e.target.value);
  };

  // let results = [];
  // if (!search) {
  //   results = countries;
  // } else {
  //   results = countries.filter((country) =>
  //     country.name.toLowerCase().includes(search.toLowerCase())
  //   );
  // }

  const results = !search
    ? data
    : data.filter((country) =>
        country.name.toLowerCase().includes(search.toLowerCase())
      );

  return (
    <div>
      {isLoading && <div>Loading...</div>}
      {error && <div>{error}</div>}
      <h1>Countries</h1>
      <input
        type='text'
        name='search'
        placeholder='Enter a Country'
        value={search}
        onChange={searcher}
      />
      <table>
        <thead>
          <tr>
            <th>Country</th>
            <th>Capital</th>
          </tr>
        </thead>
        <tbody>
          {results.map((country) => (
            <tr key={country.name}>
              <td>{country.name}</td>
              <td>{country.capital}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <CumtomsHooks />
    </div>
  );
}

export default App;
