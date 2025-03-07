// page1.js
import {renderTempCO2Chart} from "./TemperatureCO2Chart.js";
import {renderTempSeaLevelChart} from "./TemperatureSeaLevelChart.js";

export function initPage1() {
    const pageElement = document.querySelector('#page1');

    // Initialize Visualizations for Climate Change Insights
    function initializeVisualizations() {
        // Dual-Axis Chart for Temperature & CO₂
        renderTempCO2Chart()
        // Sea Level Rise Visualization
        renderTempSeaLevelChart()
    }

    initializeVisualizations();

    pageElement.addEventListener('click', () => {
        console.log('Clicked Climate Change Insights Page');
    });
}