import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Fib = (props) => {
  const [seenIndexes, setSeenIndexes] = useState([]);
  const [values, setValues] = useState({});
  const [index, setIndex] = useState('');

  const fetchValues = async () => {
    const values = await axios.get('/api/values/current');
    setValues(values);
  };
  const fetchIndexes = async () => axios.get();

  useEffect(() => {
    axios.get('/api/values/all')
    .then(({ data: index }) => {
      setSeenIndexes(index);
    });
  }, []);

  const renderValues = () => {
    const entries = [];
    for (let key in values) {
      entries.push(
        <div key={key}>For index {key} I calculated {values[key]} </div>
      )
    }
    return entries;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post('/api/values', {
      index,
    });
    setIndex('');
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="index">Enter your index</label>
        <input type="text" id="index" value={index} onChange={({ target }) => setIndex(target.value)} />
        <input type="submit" value="Submit"/>
      </form>

      <h3>Indexes I have Seen</h3>
      {seenIndexes.map((index) => index).join(', ')}
      <h3>Calculated Values</h3>
      {renderValues()}
    </div>
  )
};

export default Fib;
