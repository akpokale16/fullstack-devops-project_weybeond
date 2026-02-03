import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    axios.get('/api/data').then(res => setData(res.data));
  }, []);

  return (
    <div className="App">
      <h1>Full Stack DevOps App</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}

export default App;
