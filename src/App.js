import { Routes, Route } from 'react-router-dom';
import Home

function App() {

  const API_KEY = '0c737845394f91bc29c3c0ea05729034';

  fetch(`https://financialmodelingprep.com/api/v3/income-statement/AAPL?limit=150&apikey=${API_KEY}`)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));

  fetch(`https://financialmodelingprep.com/api/v3/balance-sheet-statement/AAPL?limit=150&apikey=${API_KEY}`)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));

  fetch(`https://financialmodelingprep.com/api/v3/cash-flow-statement/AAPL?limit=150&apikey=${API_KEY}`)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));

  return (
    <>
      <div>Sidebar</div>
      <div>
        <Routes>
          <Route path element={<Home/>} />
        </Routes>
      </div>
    </>
  );
}

export default App;
