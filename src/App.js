import { Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';

import Layout from './components/Layout';
import Sidebar from './components/Sidebar';
import Home from './views/Home'
import Income from './views/Income';
import Balance from './views/Balance';
import CashFlow from './views/CashFlow';
import Footer from './components/Footer';
import NotFounded from './views/NotFounded';

const App = () => {
  const [data, setData] = useState([]);

  const API_KEY = 'ORYRJ141YOY5WRFB';

  useEffect(() => {
      fetch(`https://www.alphavantage.co/query?function=OVERVIEW&symbol=AAPL&apikey=${API_KEY}`)
      .then(response => response.json())
      .then(response => setData(response))
      .catch(err => console.error(err));
  },[])

  const handleSubmit = (input) => {
      if(!input) return

      fetch(`https://www.alphavantage.co/query?function=OVERVIEW&symbol=${input}&apikey=${API_KEY}`)
          .then(response => response.json())
          .then(response => setData(response))
          .catch(err => console.error(err));
  }

  return (
    <>
      <Sidebar />
      <Layout>
        <Routes>
          <Route index element={<Home handleSubmit={handleSubmit} data={data}/>} />
          <Route path='income' element={<Income data={data}/>} />
          <Route path='balance' element={<Balance data={data}/>} />
          <Route path='cashflow' element={<CashFlow data={data}/>} />
          <Route path='*' element={<NotFounded/>} />
        </Routes>
        <Footer />
      </Layout>
    </>
  );
}

export default App;
