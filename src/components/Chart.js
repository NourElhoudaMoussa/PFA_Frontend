import React, { useEffect } from 'react';
import Chart from 'chart.js/auto';
const ChartComponent = () => {
  useEffect(() => {
    (async function() {
        const data = [
            { month: 'Jan', count: 10 },
            { month: 'Feb', count: 20 },
            { month: 'Mar', count: 15 },
            { month: 'Apr', count: 25 },
            { month: 'May', count: 22 },           
          ];

      new Chart(
        document.getElementById('acquisitions'),
        {
          type: 'bar',
          data: {
            labels: data.map(row => row.month),
            datasets: [
                {
                label: 'عدد الشكاوي حسب كل شهر لسنة 2024',
                data: data.map(row => row.count)
                }
            ]
          }
        }
      );
    })();
  }, []);

  return (
    <div>
      <canvas id="acquisitions" width="400" height="200"></canvas>
    </div>
  );
};

export default ChartComponent;