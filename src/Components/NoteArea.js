import React, { useState } from 'react';


function NoteArea(props){

    const [note, setNotes] = useState({
        title: "",
        content: ""
    });

    function handleChange(e){
        const {name, value} = e.target;
        setNotes(prevNote=>{
           return{
            ...prevNote,
            [name]:value
           };

        });
    }
    return(
        <div>
            <form>
                <input onChange={handleChange} name="title" value={note.title} placeholder="Title"/>
                <textarea onChange={handleChange} name="content" value={note.content} placeholder="What's in your mind?"/>
                <button onClick={
                    (e)=>{
                        props.onAdd(note)
                        setNotes({
                            title: "",
                            content: ""
                        })
                        e.preventDefault()}
                        }>Add</button>
            </form>
        </div>
    );
}

export default NoteArea;