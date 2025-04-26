import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

type Props = {
  style?: React.CSSProperties;
};

const NoPaymentDue = ({ style }: Props) => {
  return (
    <div style={{
      border: '1px solid #ccc',
      borderRadius: '8px',
      padding: '1rem',
      flex: 1,
      minWidth: '140px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      ...style
    }}>
      <div>
        <strong style={{ fontSize: '0.9rem' }}>No Payment Due</strong>
        <p style={{ fontSize: '0.8rem', marginTop: '0.3rem' }}>You've paid your September balance.</p>
      </div>
      <div style={{ textAlign: 'right', marginTop: '1rem' }}>
        <FontAwesomeIcon icon={faCheck} size="2x" color="gray" />
      </div>
    </div>
  );
};

export default NoPaymentDue;
