import React from 'react';


function NoteArea(){

    return(
        <div>
            <form>
                <input name="title" placeholder="Title"/>
                <textarea name="Content" placeholder="What's in your mind?"/>
                <button>Add</button>
            </form>
        </div>
    );
}

export default NoteArea;