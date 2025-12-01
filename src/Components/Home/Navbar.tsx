import { useNavigate } from 'react-router-dom'
import LogoButton from './LogoButton'
import { InputGroup, InputGroupAddon, InputGroupInput } from '../ui/input-group';
import { Search } from 'lucide-react';
import { useState } from 'react';

function Navbar () {
    const navigate = useNavigate();
    const [isOpen, setisOpen] = useState(false);
  return (
    <header>
        <nav className='flex bg-green-600 p-4 text-white h-16 justify-between'>
            <div className='px-8'><LogoButton /></div>
            <div className='flex gap-6'>
                <button onClick={() => navigate('/home')} className='hover:text-orange-300 font-medium'>Home</button>
                <button onClick={() => navigate('/productpage')} className='hover:text-orange-300 font-medium'>Products</button>
                <button onClick={() => navigate('/wishlistpage')} className='hover:text-orange-300 font-medium'>Wishlist</button>
                <div className='relative inline-block'>
                <button
                onClick={() => setisOpen(!isOpen)}
                className='hover:text-orange-300 font-medium'
                >Choose</button>
                {
                    isOpen && (
                        <div>
                        <div className='w-48 text-black rounded shadow-lg z-20'>
                            <ul className='py-2 bg-gray-400 opacity-60'>
                                <li className='border-black border-b-2'>
                                    <a className='block px-4 py-2 hover:bg-gray-200'>Hello</a>
                                </li>
                                <li className='border-black border-b-2'>
                                    <a  className='block px-4 py-2 hover:bg-gray-200'>Hello</a>
                                </li>
                                <li className='border-black border-b-2'>
                                    <a  className='block px-4 py-2 hover:bg-gray-200'>Hello</a>
                                </li>
                                <li className='border-black border-b-2'>
                                    <a  className='block px-4 py-2 hover:bg-gray-200'>Hello</a>
                                </li>
                            </ul>
                            </div>
                            </div>
                    )
                }
                </div>
            </div>
            <div className='flex gap-6'>
                <InputGroup className='bg-gray-300 opacity-50'>
                <InputGroupInput placeholder='search...' className=''/>
                <InputGroupAddon>
                <Search />
                </InputGroupAddon>
                </InputGroup>
                <button onClick={() => navigate('/signin')} className='hover:text-orange-300 font-medium'>Sign In</button>
                <button onClick={() => navigate('/account')} className='hover:text-orange-300 font-medium'>Account</button>
            </div>
        </nav>
    </header>
  )
}

export default Navbar
