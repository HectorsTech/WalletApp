import { useEffect, useState } from 'react';
import { getTodayPoints } from '../utils/calculatePoints';

const DailyPoints = () => {
  const [points, setPoints] = useState<string>('0');

  useEffect(() => {
    setPoints(getTodayPoints());
  }, []);

  return (
    <div style={{ border: '1px solid #ccc', borderRadius: '8px', padding: '1rem', marginBottom: '1rem' }}>
      <div>
        <strong>Daily Points</strong>
        <p>{points}</p>
      </div>
    </div>
  );
};

export default DailyPoints;
