import React, { useState } from 'react';
import DisplayEntries from './Components/DisplayEntries/DisplayEntries';
import AddEntryForm from './Components/AddEntry/AddEntryForm';
import EntriesChartTracker from './Components/EntriesChartTracker/EntriesChartTracker';

function App() {

  const [entries, setEntries] = useState([{weight: 160, date: '6-18-2022'}, {weight: 159, date: '6-19-2022'}])

  function addNewEntry(entry){

    let tempEntries = [...entries, entry];

    setEntries(tempEntries);
  }

  return (
    <div className='container-fluid'>
      <div className='row'>
        <div className='col-md-6'>
          <DisplayEntries parentEntries={entries} />
          <AddEntryForm addNewEntryProperty={addNewEntry} />
        </div>
        <div className='col-md-6'>
        <EntriesChartTracker parentEntries={entries}/> 
        </div>
      </div>
    </div>
  );
}

export default App;
