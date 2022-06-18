import React, { useState } from 'react';
import DisplayEntries from './Components/DisplayEntries/DisplayEntries';
import AddEntryForm from './Components/AddEntry/AddEntryForm';


function App() {

  const [entries, setEntries] = useState([{weight: 160, date: '6-18-2022'}, {weight: 159, date: '6-19-2022'}])

  return (
    <div>
      <DisplayEntries parentEntries={entries} />
      <AddEntryForm />
    </div>
  );
}

export default App;
