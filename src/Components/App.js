import React, {useState} from "react";
import Footer from "./Footer";
// import reactDOM from "react-dom";
import Heading from "./Heading";
import NoteArea from "./NoteArea";
import Notes from "./Notes";


function App() {
  const [notes, setNotes] = useState([])

  function AddNote(newNote){
      setNotes( prevNotes =>  {
       return [...prevNotes, newNote];
      });
      
  }

  function DeleteNote(id){
    setNotes(prevNotes=>{
      return prevNotes.filter((items,index)=>{
        return index !== id;
      });
    });
  }

  return (
    <div className="App">
      <Heading />
      <NoteArea onAdd={AddNote}/>
      {notes.map((items,index)=>{
        return(
          <Notes 
          key={index} 
          id={index} 
          title={items.title} 
          content={items.content} 
          onClickDelete={DeleteNote}

          />
          );
      })}
      <Footer/>
    </div>
  );
}

export default App;
