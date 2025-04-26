import { useEffect, useState } from 'react';
import { getTodayPoints } from '../utils/calculatePoints';

type Props = {
  style?: React.CSSProperties;
};

const DailyPoints = ({ style }: Props) => {
  const [points, setPoints] = useState<string>('0');

  useEffect(() => {
    const todayPoints = getTodayPoints();
  console.log('Today points:', todayPoints); // <-- AGREGAR ESTO
  setPoints(todayPoints);
  }, []);

  return (
    <div style={{
      border: '1px solid #ccc',
      borderRadius: '8px',
      padding: '1rem',
      marginBottom: '1rem',
      ...style
    }}>
      <div>
        <strong>Daily Points</strong>
        <p>{points === '0' ? 'No points yet' : `${points} points today`}</p>
      </div>
    </div>
  );
};

export default DailyPoints;
