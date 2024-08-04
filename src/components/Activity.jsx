import { useState, useEffect } from 'react';
import Chart from 'react-apexcharts';

const generateRandomOddNumbers = (count) => {
  const oddNumbers = [];
  while (oddNumbers.length < count) {
    const randomNum = Math.floor(Math.random() * 100);
    if (randomNum % 2 !== 0 && !oddNumbers.includes(randomNum)) {
      oddNumbers.push(randomNum);
    }
  }
  return oddNumbers;
};

const Activity = () => {
  const [timeframe, setTimeframe] = useState('Weekly');
  const [isMobile, setIsMobile] = useState(false);
  const oddNumbers = generateRandomOddNumbers(24);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640);
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);


  const options = {
    colors: ['#7197fe'],
    chart: {
      type: 'bar',
      height: '320px',
      fontFamily: 'Inter, sans-serif',
      toolbar: {
        show: false,
      },
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '70%',
        borderRadiusApplication: 'end',
        borderRadius: 8,
      },
    },
    tooltip: {
      shared: true,
      intersect: false,
      style: {
        fontFamily: 'Inter, sans-serif',
      },
    },
    states: {
      hover: {
        filter: {
          type: 'darken',
          value: 1,
        },
      },
    },
    stroke: {
      show: false,
      width: 0,
      colors: ['transparent'],
    },
    grid: {
      show: true,
      strokeDashArray: 0,
      padding: {
        left: 0,
        right: 0,
        top: -10,
      },
    },
    dataLabels: {
      enabled: false,
    },
    legend: {
      show: false,
    },
    xaxis: {
      floating: false,
      labels: {
        show: !isMobile,
        style: {
          fontFamily: 'Inter, sans-serif',
          cssClass: 'text-xs font-normal fill-gray-500 dark:fill-gray-400',
        },
        formatter: (val) => `${val}`,
      },
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      categories: oddNumbers,
    },
    yaxis: {
      show: true,
      tickAmount: 3,
      labels: {
        show: true,
        style: {
          fontFamily: 'Inter, sans-serif',
          cssClass: 'text-xs font-normal fill-gray-500 dark:fill-gray-400',
        },
        formatter: (value) => `${value}k`,
      },
    },
    fill: {
      opacity: 1,
    },
  };

  const series = [
    {
      name: 'Activity',
      data: Array.from({ length: 24 }, () => Math.floor(Math.random() * 15000)),
    },
  ];

  return (
    <div className="bg-[#1f2029] p-5 rounded-md h-full">
      <div className="flex justify-between items-center mb-5">
        <h2 className="text-white">Activity</h2>
        <select
          className="bg-gray-800 outline-none text-gray-300 border-none p-1 rounded"
          value={timeframe}
          onChange={(e) => setTimeframe(e.target.value)}
        >
          <option value="Weekly">Weekly</option>
          <option value="Daily">Daily</option>
          <option value="Monthly">Monthly</option>
        </select>
      </div>
      <div id="column-chart" className='h-56'>
        <Chart options={options} series={series} type="bar" height={250} />
      </div>
    </div>
  );
};

export default Activity;
