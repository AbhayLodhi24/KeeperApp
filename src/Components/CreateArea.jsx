import React from "react";

function CreateArea({size ,setSize}) {
    const handleSubmit = (e)=>{
        e.preventDefault();
        
        
        const title = e.target.children[0].value;
        const content = e.target.children[1].value;
        
        // Retrieve existing notes from local storage, or initialize as an empty array
        const notes = JSON.parse(localStorage.getItem("notes")) || [];

        
        // Create a new note object
        const newNote = {
            id: Date.now(), // Generate a unique ID based on the current timestamp
            title: title,
            content: content
        };

        // Add the new note to the array
        notes.push(newNote);
       
        // Save the updated array back to local storage
        localStorage.setItem("notes", JSON.stringify(notes));

        // Optional: Clear the form fields after submission
        e.target.children[0].value = "";
        e.target.children[1].value = ""; 
        setSize(notes.length)
    }
  return (
    <div >
      <form onSubmit={handleSubmit}>
        <input name="title" placeholder="Title" />
        <textarea name="content" placeholder="Take a note..." rows="3" />
        <button type="Submit">Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
