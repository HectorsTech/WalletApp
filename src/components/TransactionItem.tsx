import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoneyBill } from '@fortawesome/free-solid-svg-icons';


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
  transaction: Transaction;
};

const getDayLabel = (dateString: string): string => {
  const date = new Date(dateString);
  const now = new Date();
  const diff = (now.getTime() - date.getTime()) / (1000 * 60 * 60 * 24);
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

  if (diff <= 7) return days[date.getDay()];
  return date.toLocaleDateString();
};

const TransactionItem = ({ transaction }: Props) => {
  const {
    type,
    amount,
    name,
    description,
    date,
    status,
    authorizedUser
  } = transaction;

  const color = `hsl(${Math.floor(Math.random() * 360)}, 70%, 50%)`;

  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      marginBottom: '1rem',
      borderBottom: '1px solid #eee',
      paddingBottom: '0.5rem'
    }}>
      <div style={{
        backgroundColor: color,
        borderRadius: '50%',
        width: '40px',
        height: '40px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#fff',
        marginRight: '1rem'
      }}>
        <FontAwesomeIcon icon={faMoneyBill} />
      </div>
      <div style={{ flex: 1 }}>
        <div><strong>{name}</strong></div>
        <div style={{ fontSize: '0.85rem', color: 'gray' }}>
          {status === 'Pending' ? 'Pending – ' : ''}
          {description}
        </div>
        <div style={{ fontSize: '0.8rem', color: 'gray' }}>
          {authorizedUser ? `${authorizedUser} – ` : ''}{getDayLabel(date)}
        </div>
      </div>
      <div>
        <div style={{ textAlign: 'right', fontWeight: 'bold' }}>
          {type === 'Payment' ? '+' : '-'}${amount.toFixed(2)}
        </div>
        <div style={{ fontSize: '0.75rem', color: 'gray', textAlign: 'right' }}>3%</div>
      </div>
    </div>
  );
};

export default TransactionItem;
