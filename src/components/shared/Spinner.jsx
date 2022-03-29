import loading from '../assets/loading.gif';

function Spinner() {
  return (
    <img
      src={loading}
      alt="Loading..."
      style={{ width: '500px', margin: 'auto', display: 'block' }}
    />
  );
}

export default Spinner;
