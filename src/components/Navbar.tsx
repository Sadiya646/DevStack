
import Logo from '../assets/logo-text.png'
const Navbar = () => {

   
    return (
 <nav className='sticky top-0 z-50 bg-white shadow-sm w-full'>
    <div className='max-w-7xl mx-auto px-6 py-4 flex items-center justify-between'>
<div className='flex items-center md:hidden'>
                    <span className='text-gray-700 text-2xl cursor-pointer'>
                        ☰
                    </span>
                </div>
        


        
        <div className='flex items-center gap-2 mx-auto md:mx-0'>
            <img src={Logo} alt="Logo" className='h-8 w-auto' />
        </div>

        <ul className='hidden md:flex items-center gap-8 font-medium text-gray-600'>
            <li className='hover:text-pink-600 transition-colors'><a href="/">Home</a></li>
            <li className='hover:text-pink-600 transition-colors'><a href="">Technologies</a></li>
            <li className=' hover:text-pink-600 transition-colors'><a href="/projects">Projects</a></li>
            <li className='hover:text-pink-600 transition-colors'><a href="/about">About</a></li>
            <li className='hover:text-pink-600 transition-colors'><a href="/contact">Contact</a></li>
        </ul>
        
        <div className='flex items-center gap-4'>
            <button className='px-4 py-2 text-gray-700 font-medium hover:text-pink-600 transition-colors'
            
            >
                Sign in
            </button>
            <button className='px-5 py-2.5 bg-pink-600 text-white font-medium rounded-full hover:bg-pink-700 transition-colors shadow-sm'>
                Sign up
            </button>
        </div>

    </div>





</nav>
    );
};

export default Navbar;