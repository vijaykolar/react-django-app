import React from 'react';
import {Link} from 'react-router-dom'

function Header() {
  return (
    <header className='bg-gray-700'>
        <div className='container mx-auto'>
            <div className='flex justify-between'>
                <div>
                    <Link  className='text-white py-3 inline-block' to="/">Logo</Link>
                </div>
                <div>
                    <ul className='flex'>
                        <li>
                            <Link className='p-3 inline-block text-gray-300 hover:text-white transition duration-150' to="/cart">cart</Link> </li>
                        <li>
                            <Link className='p-3 inline-block text-gray-300 hover:text-white transition duration-150' to="/login">login</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </header>
  )
}

export default Header