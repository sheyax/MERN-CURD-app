import React, { useState } from 'react';
import {useRouter} from 'next/router'
export default function editMessage() {

    const [title, setTitle]= useState('')
    const [message, setMessage]= useState('')

    const router= useRouter();

    const handleSubmit= async (e) =>{
        e.preventDefault();
        if(title && message){
            createNote();
            alert('Success')
        }


    }

    const createNote= async () =>{

        try {const res= await fetch('http://localhost:5000/postMessage', {
            method: 'POST',
            headers:{
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                title,
                message
            })

        })

        router.push('/')
    }catch (error){

    }

    }

    const handleChange =(e) =>{
        setForm({
            ...title,
            [e.target.name]: e.target.value
        })

    }

  return (
    <div className="flex flex-col space-y-5 ">

        <h1 className="p-2 font-bold">Create New Note</h1>

        <div className=''>
            <form onSubmit={handleSubmit} 
            className='grid space-y-5 p-2'>

                <input
                className='border-2 border-gray-400 p-2'
                 type="text" placeholder="title" label="title"
                 value={title}
                 onChange={e=> setTitle(e.target.value)}/>
                <textarea 
                value={message}
                className='border-2 border-gray-400 p-1'
                placeholder="Message" maxLength="500"
                onChange={e=> setMessage(e.target.value)}/>

                <button 
                className='bg-blue-400 p-2 text-white'
                type="submit">Submit</button>

            </form>
        </div>
    
    </div>
  );
}
