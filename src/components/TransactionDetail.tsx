type Props = {
    transaction: {
      id: number;
      type: 'Payment' | 'Credit';
      amount: number;
      name: string;
      description: string;
      date: string;
      status: string;
      authorizedUser?: string;
    };
    onBack: () => void;
  };
  
  const TransactionDetail = ({ transaction, onBack }: Props) => {
    const { amount, name, description, date, status } = transaction;
    const fullDate = new Date(date).toLocaleString();
  
    return (
      <div style={{ padding: '1rem', fontFamily: 'Arial, sans-serif' }}>
        <button onClick={onBack} style={{
          marginBottom: '1rem',
          background: 'none',
          border: 'none',
          fontSize: '1rem',
          cursor: 'pointer',
          color: '#007bff'
        }}>← Back</button>
  
        <h1 style={{ fontSize: '2.5rem', margin: '0' }}>${amount.toFixed(2)}</h1>
        <h2 style={{ fontSize: '1rem', fontWeight: 'normal', color: '#555' }}>{name}</h2>
        <p style={{ fontSize: '0.9rem', color: 'gray' }}>{fullDate}</p>
  
        <div style={{
          backgroundColor: '#f5f5f5',
          padding: '1rem',
          borderRadius: '8px',
          marginTop: '1rem'
        }}>
          <p><strong>Status:</strong> {status}</p>
          <p style={{ color: '#555' }}>{description}</p>
        </div>
  
        <div style={{ marginTop: '1rem' }}>
          <p><strong>Total:</strong> ${amount.toFixed(2)}</p>
        </div>
      </div>
    );
  };
  
  export default TransactionDetail;
  
  