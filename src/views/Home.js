import { useState } from 'react';
import { Data } from '../data/Data'

import { BsSearch } from 'react-icons/bs';
import BarChart from '../components/BarChart';

const Home = ({handleSubmit, data}) => {
    const [input, setInput] = useState('');
    const [dataChart, setDataChart] = useState({
        labels: Data.map(elem => elem.year),
        datasets:[{
            label:"Stock Price",
            data: Data.map(elem => elem.stockPrice),
            backgroundColor: ["orange"]
        }]
    });

    console.log('Desde Home:',data);

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
            {data 
            ?           
            <section className='p-5'>
                <h2 className='text-xl font-bold bg-gray-400 rounded-md p-2 mb-2'>{data.Name} <span>({data.Symbol})</span></h2>
                <BarChart chartData={dataChart}/>
                <p className='py-5 p-2 rounded-md bg-gray-400'><span className='font-bold'>Description: </span>{data.Description}</p>
            </section> 
            : 
            <p>Falta la Data</p>
            }
        </main>
     );
}
 
export default Home;