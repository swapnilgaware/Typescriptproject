import { useLoaderData } from 'react-router-dom';
import { LineChart, Line, XAxis, YAxis, Tooltip } from 'recharts';

interface StockData {
  symbol: string;
  price: number;
  retrievedAt: string;
}

interface PricePoint {
  date: string;
  close: number;
}

export default function Dashboard() {
  const data = useLoaderData() as StockData;
  const chart: PricePoint[] = [
    { date: new Date(data.retrievedAt).toLocaleDateString(), close: data.price },
  ];
  return (
    <div>
      <h2>{data.symbol} Latest Price</h2>
      <LineChart width={600} height={300} data={chart}>
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip />
        <Line type="monotone" dataKey="close" stroke="#8884d8" />
      </LineChart>
    </div>
  );
}
