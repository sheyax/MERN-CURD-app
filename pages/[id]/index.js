import React, { useEffect, useState } from 'react';
import {useRouter} from 'next/router';



export default function Note() {



  const [notes, setNotes]= useState('')
  const router= useRouter()

  const NoteId= router.query.id


  useEffect(() => {
    try{
    fetch(`http://localhost:5000/postMessage/${NoteId}`)
    .then(response => response.json())
    .then(data => setNotes(data))
  }catch(err){

  }

  console.log(notes)


  }, [])



  const handleDelete= async () =>{
    try {

      const deleted= await fetch(`http://localhost:5000/postMessage/${NoteId}`, {
        method: 'DELETE'
      })

      router.push('/')
      
    } catch (error) {
      
    }
  }

  return (
    <div className='p-3 space-y-5'>

      
      <h1 className='font-bold text-xl'>{notes.title}</h1>
      <p>{notes.message}</p>

      <button 
      className="p-2 rounded-lg bg-red-500 text-white"
      onClick={handleDelete}>
        Delete</button>
    
    </div>
  );
}
