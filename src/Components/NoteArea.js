import React, { useState } from 'react';
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import { Zoom } from '@mui/material';

function NoteArea(props){

    const [note, setNotes] = useState({
        title: "",
        content: ""
    });
    const [clicked, isClicked] = useState(false);

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
            <form className='create-note'>
                {clicked && <input onChange={handleChange} name="title" value={note.title} placeholder="Title"/>}
                <textarea onClick={()=>{
                    isClicked(true)
                    }} rows={`${clicked ? 3:1}`} onChange={handleChange} name="content" value={note.content} placeholder="What's in your mind?"/>
                 <Zoom in={clicked}>
                    <Fab onClick={
                        (e)=>{
                            props.onAdd(note)
                            setNotes({
                                title: "",
                                content: ""
                            })
                            e.preventDefault()}
                            }>

                        <AddIcon/>
                    </Fab>
                 </Zoom> 
            </form>
        </div>
    );
}

export default NoteArea;