import React, { useEffect, useState } from 'react';
import {useRouter} from 'next/router';

export default function Note() {

  const [notes, setNotes]= useState(null)
  const router= useRouter()


  useEffect(() => {
    fetch(`http://localhost:5000/postMessage/${id}`)
    .then(response => response.json())
    .then(data => setNotes(data))

    console.log(notes)
  }, [])


  return (
    <div>
    
    </div>
  );
}
