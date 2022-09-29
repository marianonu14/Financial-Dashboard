import { Pie } from 'react-chartjs-2'
import { Chart as ChartJS} from 'chart.js/auto'

const PieChart = ({chartData}) => {
    return (
    <div className='m-auto md:w-1/2 p-5'>
        <Pie data={chartData} /> 
    </div>
    );
}
 
export default PieChart;