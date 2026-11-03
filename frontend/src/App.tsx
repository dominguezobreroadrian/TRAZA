import { useEffect, useState } from 'react';

function App() {
  const [message, setMessage] = useState('Conectando...');
  const [error, setError] = useState('');

  useEffect(() => {
    fetch('http://localhost:3000')
      .then((response) => {
        if (!response.ok) throw new Error('La API respondió con un error');
        return response.text();
      })
      .then(setMessage)
      .catch(() => setError('No se pudo conectar con el backend'));
  }, []);

  return <main>{error || message}</main>;
}

export default App;