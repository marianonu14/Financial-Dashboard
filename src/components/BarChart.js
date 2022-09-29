import { Line } from 'react-chartjs-2'
import { Chart as ChartJS} from 'chart.js/auto'

const BarChart = ({chartData}) => {
    return (
    <div className='m-auto w-4/5 py-5'>
        <Line data={chartData} /> 
    </div>
    );
}
 
export default BarChart;