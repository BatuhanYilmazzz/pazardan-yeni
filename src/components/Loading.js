import { Spinner } from 'react-bootstrap';

function Loading() {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        position: 'absolute',
        left: '50%',
        top: '40%',
        transform: 'translate(-50%, -50%)',
        zIndex: 9999,
      }}
    >
      <Spinner animation='border' variant='success' />
    </div>
  );
}

export default Loading;
