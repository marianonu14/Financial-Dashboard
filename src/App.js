import { Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import Layout from './components/Layout';
import Sidebar from './components/Sidebar';
import Balance from './views/Balance';
import CashFlow from './views/CashFlow';
import Home from './views/Home'
import Income from './views/Income';
import NotFounded from './views/NotFounded';

function App() {

  const API_KEY = '0c737845394f91bc29c3c0ea05729034';

  // fetch(`https://financialmodelingprep.com/api/v3/income-statement/AAPL?limit=150&apikey=${API_KEY}`)
	// .then(response => response.json())
	// .then(response => console.log(response))
	// .catch(err => console.error(err));

  // fetch(`https://financialmodelingprep.com/api/v3/balance-sheet-statement/AAPL?limit=150&apikey=${API_KEY}`)
	// .then(response => response.json())
	// .then(response => console.log(response))
	// .catch(err => console.error(err));

  // fetch(`https://financialmodelingprep.com/api/v3/cash-flow-statement/AAPL?limit=150&apikey=${API_KEY}`)
	// .then(response => response.json())
	// .then(response => console.log(response))
	// .catch(err => console.error(err));

  return (
    <>
      <Sidebar />
      <Layout>
        <Routes>
          <Route index element={<Home/>} />
          <Route path='income' element={<Income/>} />
          <Route path='balance' element={<Balance/>} />
          <Route path='cashflow' element={<CashFlow/>} />
          <Route path='*' element={<NotFounded/>} />
        </Routes>
        <Footer />
      </Layout>
    </>
  );
}

export default App;
