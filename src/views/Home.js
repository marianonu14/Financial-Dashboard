import { useState } from 'react';
import { DataStockPrice } from '../data/DataStockPrice'

import { BsSearch } from 'react-icons/bs';
import LineChart from '../components/LineChart';

const Home = ({handleSubmit, data}) => {
    const [input, setInput] = useState('');
    
    const dataChart = {
        labels: DataStockPrice.map(elem => elem.year),
        datasets:[{
            label:"Stock Price",
            data: DataStockPrice.map(elem => elem.stockPrice),
            backgroundColor: ["orange"]
        }]
    };

    console.log('Desde Home:',data);
    console.log(typeof(data));

    return ( 
        <main>
            <h1 className="text-3xl p-4">General Information</h1>
            <form 
                onSubmit={e => {
                e.preventDefault();
                handleSubmit(input)}} 
                className="flex items-center gap-5 p-5"
                >
                <BsSearch size={25}/>
                <input
                className="w-full p-1 md:p-2 rounded-md bg-white" 
                type="text" 
                name="search"
                value={input}
                placeholder='Search Ticker...'
                onChange={(e) => setInput(e.target.value)} 
                />
            </form>
            {Object.entries(data).length !== 0
            ?           
            <section className='p-5'>
                <h2 className='text-xl font-bold bg-gray-300 rounded-md p-2 mb-2'>{data.Name} <span>({data.Symbol})</span></h2>
                <LineChart chartData={dataChart}/>
                <p className='py-5 p-2 rounded-md bg-gray-300'><span className='font-bold'>Description: </span>{data.Description}</p>
            </section> 
            : 
            <p className='flex justify-center'>Data Not Founded</p>
            }
        </main>
     );
}
 
export default Home;