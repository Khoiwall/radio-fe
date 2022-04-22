import react, { useState, useEffect, useRef } from 'react';
import '../../asset/css/PirexChart.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-loading-skeleton/dist/skeleton.css'

function PirexChartLayout() {
    return (
        <div className="chart container">
            <div className="chart__display_flex">
                <div className="chart__title">
                    <h1>PirexChart</h1>
                </div>
                <div className="chart__icon_player">
                    play
                </div>
            </div>
        </div>
    )
}

export default PirexChartLayout;