import React from 'react'
import "./Sideber.css"

function Sideber({ onAddNote, notes, onDeleteNote, activeNotes, setActiveNotes }) {
  return (
    <div className='app-sidebar'>
        <div className="app-sidebar-header">
            <h1>Note</h1>
            <button onClick={onAddNote}>Add</button>
        </div>
        <div className='app-sidebar-notes'>
        {notes.map((note) => {
            return (
                    <div 
                        className={`app-sidebar-note ${note.id === activeNotes && "active"}`}
                        key={note.id}
                        onClick={() => setActiveNotes(note.id)}
                    >
                        <div className="sidebar-note-title">
                            <strong>{note.title}</strong>
                            <button onClick={() => onDeleteNote(note.id)}>Delete</button>
                        </div>
                        <p>{note.contant}</p>
                        <small className="note-meta">
                            {new Date(note.modDate).toLocaleDateString("ja-JP", {
                                hour: "2-digit",
                                minute: "2-digit",
                            })}
                        </small>
                    </div>
            )
        })}
        </div>
    </div>
  )
}

export default Sideber