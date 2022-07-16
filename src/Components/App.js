import React, { useState } from "react";
import Footer from "./Footer";
// import reactDOM from "react-dom";
import Heading from "./Heading";
import NoteArea from "./NoteArea";
import Notes from "./Notes";


function App() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  
  return (
    <div className="App">
      <Heading />
      <NoteArea/>
      <Notes key={1} title="Note title" content="Note content" />
      <Footer/>
    </div>
  );
}

export default App;
