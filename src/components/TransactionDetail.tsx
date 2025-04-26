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
  
    return (
      <div style={{ padding: '1rem' }}>
        <button onClick={onBack} style={{ marginBottom: '1rem' }}>← Back</button>
        <h1>${amount.toFixed(2)}</h1>
        <h2>{name}</h2>
        <p>{date}</p>
  
        <div style={{ border: '1px solid #ccc', padding: '1rem', borderRadius: '8px', marginTop: '1rem' }}>
          <p><strong>Status:</strong> {status}</p>
          <p><strong>Description:</strong> {description}</p>
          <p><strong>Total:</strong> ${amount.toFixed(2)}</p>
        </div>
      </div>
    );
  };
  
  export default TransactionDetail;
  