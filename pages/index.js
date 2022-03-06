
import fetch from 'isomorphic-unfetch'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import styles from '../styles/Home.module.css'

export default function Home() {

  //console.log(notes)

  const [notes, setNotes]= useState(null)


  useEffect(() => {
    fetch('http://localhost:5000/postMessage')
    .then(response => response.json())
    .then(data => setNotes(data))
  }, [])

  console.log(notes)


  return (
    <div className=''>

      <div className='flex font-bold text-xl justify-center align-center'>
        <h3 className='p-2'>Task Messages</h3>
      </div>
      
      <div className='grid grid-cols-3 space-x-10 p-2'>
        {notes && notes.map(note =>(
          <div key={note._id}>

            <div className='p-3 bg-blue-100 w-30 h-30 border-b-2 border-orange-400 
            rounded-lg'>
            <h3 className='font-bold mb-3'>{note.title}</h3>
            <p className=''>{note.message}</p>

            <div className='mt-3 space-x-3'>
              
              <button className='bg-blue-500 text-white p-2 rounded-lg'> Details</button>
              
              
              <Link href='/edit'>
                <button className='p-2 bg-blue-500 text-white rounded-lg'>Edit</button></Link>
              
            </div>
          </div>
          </div>
        ))}
      </div>
      
    
    </div>
  )
}

