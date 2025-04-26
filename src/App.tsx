import './App.css';
import { useState } from 'react';
import CardBalance from './components/CardBalance';
import DailyPoints from './components/DailyPoints';
import TransactionsList from './components/transactionsList';
import TransactionDetail from './components/TransactionDetail';
import NoPaymentDue from './components/NpPaymanetDue';

type Transaction = {
  id: number;
  type: 'Payment' | 'Credit';
  amount: number;
  name: string;
  description: string;
  date: string;
  status: string;
  authorizedUser?: string;
};

function App() {
  const [selectedTransaction, setSelectedTransaction] = useState<Transaction | null>(null);

  return (
    <div className="App" style={{ padding: '1rem' }}>
      {selectedTransaction ? (
        <TransactionDetail
          transaction={selectedTransaction}
          onBack={() => setSelectedTransaction(null)}
        />
      ) : (
        <>
          <div
  style={{
    display: 'grid',
    gridTemplateColumns: '1fr auto',
    gridTemplateRows: 'auto auto',
    gap: '1rem',
    marginBottom: '1rem',
    alignItems: 'stretch'
  }}
>
  <div style={{ gridColumn: '1', gridRow: '1' }}>
    <CardBalance />
  </div>

  <div style={{ gridColumn: '1', gridRow: '2' }}>
    <DailyPoints />
  </div>

  <div
    style={{
      gridColumn: '2',
      gridRow: '1 / span 2',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      padding: '1rem',
      borderRadius: '1rem',
      background: '#f8f8f8',
      minWidth: '160px'
    }}
  >
    <div>
      <strong>No Payment Due</strong>
      <p style={{ margin: 0, fontSize: '0.9rem' }}>You've paid your September balance.</p>
    </div>
    <div style={{ alignSelf: 'flex-end' }}>
      <span
        style={{
          background: '#eaeaea',
          borderRadius: '50%',
          width: '40px',
          height: '40px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '1.5rem'
        }}
      >
        ✔️
      </span>
    </div>
  </div>
</div>


          <TransactionsList onSelectTransaction={setSelectedTransaction} />
        </>
      )}
    </div>
  );
}

export default App;
