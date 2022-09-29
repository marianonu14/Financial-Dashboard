import { Line } from 'react-chartjs-2'
import { Chart as ChartJS} from 'chart.js/auto'

const LineChart = ({chartData}) => {
    return (
    <div className='m-auto md:w-4/5 py-5'>
        <Line data={chartData} /> 
    </div>
    );
}
 
export default LineChart;