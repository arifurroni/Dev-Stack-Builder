
import logo from '../assets/logo-text.png'
import hamburger from '../assets/hamburger.png'

const Nav = () => {
    return (
        <nav className=''>
            <div className='flex md:hidden justify-between items-center max-w-7xl mx-auto px-5 lg:px-10 my-3'>
                <div>
                    <a href="#menu"><img src={hamburger} alt="Hamburger Menu" /></a>
                </div>
                <img src={logo} alt="logo and text- Dev Stack" className='hover:cursor-pointer' />
                    
                <div className='flex justify-between items-center gap-5'>
                    <button className='py-2 px-4 cursor-pointer hover:bg-pink-100 hover:rounded-4xl font-bold'>Sign In</button>
                    <button className='bg-[#D91B7E] text-white rounded-4xl py-2 px-4 cursor-pointer font-bold hover:bg-[#fa0483]'>Sign Up</button>
                </div>
            </div>

            <div className='hidden md:flex justify-between items-center max-w-7xl mx-auto px-5 lg:px-10 my-3'>
                <img src={logo} alt="logo and text- Dev Stack" className='hover:cursor-pointer' />

                <ul className='flex justify-between items-center gap-5'>
                    <li className='hover:underline'><a href="#home">Home</a></li>
                    <li className='hover:underline'><a href="#technologies">Technologies</a></li>
                    <li className='hover:underline'><a href="#projects">Projects</a></li>
                    <li className='hover:underline'><a href="#about">About</a></li>
                    <li className='hover:underline'><a href="#contact">Contact</a></li>
                </ul>
                    
                <div className='flex justify-between items-center gap-5'>
                    <button className='py-2 px-4 cursor-pointer hover:bg-pink-100 hover:rounded-4xl font-bold'>Sign In</button>
                    <button className='bg-[#D91B7E] text-white rounded-4xl py-2 px-4 cursor-pointer font-bold hover:bg-[#fa0483]'>Sign Up</button>
                </div>
            </div>
        </nav>
    );
};

export default Nav;