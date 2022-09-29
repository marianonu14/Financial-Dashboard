import { DataStockPrice } from '../data/DataStockPrice'
import BarChart from '../components/BarChart';

const Balance = ({data}) => {
    const dataChart = {
        labels: DataStockPrice.map(elem => elem.year),
        datasets:[{
            label:"Balance Stament",
            data: DataStockPrice.map(elem => elem.stockPrice),
            backgroundColor: ["red"]
        }]
    };

    return ( 
        <main>
            <h1 className="text-3xl p-4">Balance</h1>
            <BarChart chartData={dataChart}/>
            <div className='bg-slate-300 rounded-md m-2 p-2 md:text-xl'>
                <h2 className='font-bold'>Market Cap: <span className='font-thin'>{new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'USD' }).format(data.MarketCapitalization)}</span></h2>
            </div>
        </main>

     );
}
 
export default Balance;