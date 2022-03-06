import React from 'react';
import Link from 'next/link'

export default function NavBar() {
  return (
    <nav className='flex bg-blue-400 p-3 text-white justify-between'>
    <Link href="/">
    <a>Home </a>
    </Link>

    <div className='space-x-3'>
    <Link href="/new">
    <a>Create Test </a>
    </Link>

    <Link href="/">
    <a>Edit </a>
    </Link>
        
    </div>

    </nav>
  );
}
