import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ChartService {

  constructor() { }
  /**
  * Renders a line chart using the specified canvas element and data
  * @param canvas The canvas element to render the chart on
  * @param data Chart data with labels and values
  */
 renderLineChart(canvas: HTMLCanvasElement, data: { labels: string[], values: number[] }): void {
   // This is a placeholder for the actual chart library implementation
   // You would implement this using your preferred chart library
   console.log('Rendering line chart with data:', data);
   
   // Example implementation with Chart.js would be:
   // new Chart(canvas, {
   //   type: 'line',
   //   data: {
   //     labels: data.labels,
   //     datasets: [{
   //       label: 'User Activity',
   //       data: data.values,
   //       borderColor: '#1a73e8',
   //       backgroundColor: 'rgba(26, 115, 232, 0.1)',
   //       borderWidth: 2,
   //       tension: 0.4,
   //       fill: true
   //     }]
   //   },
   //   options: {
   //     // Chart options here
   //   }
   // });
 }
 
 /**
  * Renders a doughnut chart using the specified canvas element and data
  * @param canvas The canvas element to render the chart on
  * @param data Chart data with labels, values and colors
  */
 renderDoughnutChart(canvas: HTMLCanvasElement, data: { 
   labels: string[], 
   values: number[],
   colors: string[]
 }): void {
   // This is a placeholder for the actual chart library implementation
   // You would implement this using your preferred chart library
   console.log('Rendering doughnut chart with data:', data);
   
   // Example implementation with Chart.js would be:
   // new Chart(canvas, {
   //   type: 'doughnut',
   //   data: {
   //     labels: data.labels,
   //     datasets: [{
   //       data: data.values,
   //       backgroundColor: data.colors,
   //       borderWidth: 0
   //     }]
   //   },
   //   options: {
   //     // Chart options here
   //   }
   // });
 }
}
