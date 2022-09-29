import { Bar } from 'react-chartjs-2'
import { Chart as ChartJS} from 'chart.js/auto'

const BarChart = ({chartData}) => {
    return (
    <div className='m-auto w-full p-5'>
        <Bar data={chartData} /> 
    </div>
    );
}
 
export default BarChart;