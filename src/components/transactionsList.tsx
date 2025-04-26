import { useEffect, useState } from 'react';
import rawTransactionsData from '../data/transactions.json';
import TransactionItem from './TransactionItem';

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

type Props = {
  onSelectTransaction: (tx: Transaction) => void;
};

const transactionsData = rawTransactionsData as Transaction[];

const TransactionsList = ({ onSelectTransaction }: Props) => {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  useEffect(() => {
    setTransactions(transactionsData.slice(0, 10));
  }, []);

  return (
    <div>
      <h2>Latest Transactions</h2>
      {transactions.map(tx => (
        <div key={tx.id} onClick={() => onSelectTransaction(tx)} style={{ cursor: 'pointer' }}>
          <TransactionItem transaction={tx} />
        </div>
      ))}
    </div>
  );
};

export default TransactionsList;
