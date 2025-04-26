import './App.css';
import { useState } from 'react';
import CardBalance from './components/CardBalance';
import DailyPoints from './components/DailyPoints';
import TransactionsList from './components/transactionsList';
import TransactionDetail from './components/TransactionDetail';

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
          <CardBalance />
          <DailyPoints />
          <TransactionsList onSelectTransaction={setSelectedTransaction} />
        </>
      )}
    </div>
  );
}

export default App;
