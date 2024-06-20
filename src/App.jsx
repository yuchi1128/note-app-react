import { useState } from 'react';
import './App.css';
import Main from './conponents/Main';
import Sideber from './conponents/Sideber';
import uuid from 'react-uuid';

function App() {
  const [notes, setNotes] = useState([]);
  const [activeNotes, setActiveNotes] = useState("");

  const onAddNote = () => {
    const newNote = {
      id: uuid(),
      title: "a",
      contant: "q",
      modDate: Date.now()
    }
    setNotes([...notes, newNote])
  };

  const onDeleteNote = (id) => {
    const filterNote = notes.filter((note) => note.id !== id);
    setNotes(filterNote);
  };

  const getActiveNote = () => {
    return notes.find((note) => note.id === activeNotes)
  }
  
  return (
    <div className="App">
      <Sideber onAddNote={onAddNote}
               notes={notes} 
               onDeleteNote={onDeleteNote} 
               activeNotes={activeNotes} 
               setActiveNotes={setActiveNotes}
      />
      <Main 
               activeNotes={getActiveNote()} 
      />
    </div>
  );
}

export default App;
