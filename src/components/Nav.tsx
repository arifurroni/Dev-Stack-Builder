
import logo from '../assets/logo-text.png'
import hamburger from '../assets/hamburger.png'

const Nav = () => {
    return (
        <nav className='sticky top-0 z-50 shadow-md bg-white'>
            {/* Mobile view */}
            <div className='flex md:hidden justify-between items-center max-w-7xl mx-auto px-5 lg:px-10 my-2'>
                <div>
                    <img src={hamburger} alt="Hamburger Menu" />
                </div>
                <img src={logo} alt="logo and text- Dev Stack" className='hover:cursor-pointer h-7' />
                    
                <div className='flex justify-between items-center gap-2'>
                    <button className='py-1 px-4 cursor-pointer hover:bg-pink-100 hover:rounded-4xl font-bold text-sm'>Sign In</button>
                    <button className='bg-[#D91B7E] text-white rounded-4xl py-1 px-4 my-2 cursor-pointer font-bold hover:bg-[#fa0483] text-sm'>Sign Up</button>
                </div>
            </div>

            {/* PC view */}
            <div className='hidden md:flex justify-between items-center max-w-7xl mx-auto px-5 lg:px-10 my-2'>
                <img src={logo} alt="logo and text- Dev Stack" className='hover:cursor-pointer h-8' />

                <ul className='flex justify-between items-center gap-3'>
                    <li className='hover:underline'><a href="#home">Home</a></li>
                    <li className='hover:underline'><a href="#technologies">Technologies</a></li>
                    <li className='hover:underline'><a href="#projects">Projects</a></li>
                    <li className='hover:underline'><a href="#about">About</a></li>
                    <li className='hover:underline'><a href="#contact">Contact</a></li>
                </ul>
                    
                <div className='flex justify-between items-center gap-2'>
                    <button className='py-1 px-4 cursor-pointer hover:bg-pink-100 hover:rounded-4xl font-bold text-sm'>Sign In</button>
                    <button className='bg-[#D91B7E] text-white rounded-4xl py-1 px-4 my-2 cursor-pointer font-bold hover:bg-[#fa0483] text-sm'>Sign Up</button>
                </div>
            </div>
        </nav>
    );
};

export default Nav;