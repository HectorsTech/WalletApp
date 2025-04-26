import { useEffect, useState } from 'react';

const MAX_LIMIT = 1500;

const CardBalance = () => {
  const [balance, setBalance] = useState<number>(0);

  useEffect(() => {
    const randomBalance = Math.random() * MAX_LIMIT;
    setBalance(parseFloat(randomBalance.toFixed(2)));
  }, []);

  const available = MAX_LIMIT - balance;

  return (
    <div style={{ border: '1px solid #ccc', borderRadius: '8px', padding: '1rem', marginBottom: '1rem' }}>
      <div>
        <strong>Card Balance</strong>
        <p>${balance.toFixed(2)}</p>
        <p style={{ fontSize: '0.9rem', color: 'gray' }}>${available.toFixed(2)} Available</p>
      </div>
    </div>
  );
};

export default CardBalance;
