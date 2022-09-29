import { DataStockPrice } from '../data/DataStockPrice'

import PieChart from '../components/PieChart';

const CashFlow = ({data}) => {
    const dataChart = {
        labels: DataStockPrice.map(elem => elem.year),
        datasets:[{
            label:"Stock Price",
            data: DataStockPrice.map(elem => elem.stockPrice),
            backgroundColor: ["orange","red","purple","black"]
        }]
    };

    const wrapperClass = 'bg-slate-300 rounded-md p-2 w-full text-lg'
    const titleCard = 'font-bold mb-3'

    return ( 
        <main>
            <h1 className="text-3xl p-4">Cash Flow</h1>
            <section className='flex flex-col-reverse md:flex-row pt-5'>
                <div className='flex flex-wrap gap-5 md:w-1/3 px-5'>
                    <div className={wrapperClass}>
                        <h2 className={titleCard}>Book Value</h2>
                        <p>{data.Currency} {data.BookValue}</p>
                    </div>
                    <div className={wrapperClass}>
                        <h2 className={titleCard}>Dividend Per Share</h2>
                        <p>{data.Currency} {data.DividendPerShare}</p>
                    </div>
                    <div className={wrapperClass}>
                        <h2 className={titleCard}>Beta</h2>
                        <p>{data.Beta}</p>
                    </div>
                    <div className={wrapperClass}>
                        <h2 className={titleCard}>Return To Equity</h2>
                        <p>{data.ReturnOnEquityTTM} %</p>
                    </div>
                </div>
                <PieChart chartData={dataChart}/>
            </section>
        </main>
     );
}
 
export default CashFlow;