import React, { useState } from 'react';


function NoteArea(props){

    const [notes, setNotes] = useState({
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
                <input onChange={handleChange} name="title" placeholder="Title"/>
                <textarea name="Content" placeholder="What's in your mind?"/>
                <button onClick={
                    (e)=>{ 
                        e.preventDefault()}
                        }>Add</button>
            </form>
        </div>
    );
}

export default NoteArea;