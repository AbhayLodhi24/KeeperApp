import { useEffect, useState } from 'react'
import './App.css'
import Header from './Components/Header'
import Note from './Components/Note'
import Footer from './Components/Footer'
import { notes } from './assets/notes'
import CreateArea from './Components/CreateArea'
function App() {
const [notes, setNotes] = useState([]);
const [size , setSize] = useState(0);

const handleDelete = (noteObj)=>{
  let updatedNote = notes.filter((note)=> note.id !== noteObj.id);
  setNotes(updatedNote);
  setSize(updatedNote.length);
  localStorage.setItem("notes", JSON.stringify(updatedNote));
}

useEffect(()=>{
  setNotes(JSON.parse(localStorage.getItem("notes")));
},[size]);

  return (
    <>
     <Header/>
     <CreateArea size={size} setSize={setSize}/>
     {
        notes.map((note , index) => { 
          return <Note key={index} note={note} title={note.title} content={note.content} handleDelete={handleDelete} />
        })
     }
     <Footer/>
    </>
  )
}

export default App
