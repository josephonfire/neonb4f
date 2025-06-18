"use client";
import '../../css/piechart.css';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

// Registrar os componentes necessários do Chart.js
ChartJS.register(ArcElement, Tooltip, Legend);

function DonnutChart() {
    const data = {
        //labels: ['Primavera', 'Verão', 'Outono', 'Inverno'],
        datasets: [{
            label: 'My First Dataset',
            data: [20, 45, 79, 100],
            backgroundColor: [
                '#521f90',
                '#bb1afb',
                '#751db4',
                '#981cd7'
            ],
            hoverOffset: 4
        }]
    };

    return (
        <div className="pc-box">
            <h2 className="pc-text">% Artista por Estação</h2>
            <div className="piechart">
                <Doughnut data={data} />
            </div>
        </div>
    );
}

export default DonnutChart;