
import logo from '../assets/logo-text.png'

const Nav = () => {
    return (
        <nav className=''>
            <div className='flex justify-between items-center mx-[10%] my-3'>
                <img src={logo} alt="logo and text- Dev Stack" className='hover:cursor-pointer' />

                <ul className='flex justify-between items-center gap-5'>
                    <li className='hover:underline'><a href="#home">Home</a></li>
                    <li className='hover:underline'><a href="#technologies">Technologies</a></li>
                    <li className='hover:underline'><a href="#projects">Projects</a></li>
                    <li className='hover:underline'><a href="#about">About</a></li>
                    <li className='hover:underline'><a href="#contact">Contact</a></li>
                </ul>
                    
                <div className='flex justify-between items-center gap-5'>
                    <button className='py-2 px-4 cursor-pointer hover:bg-pink-50 hover:rounded-4xl font-bold'>Sign In</button>
                    <button className='bg-[#D91B7E] text-white rounded-4xl py-2 px-4 cursor-pointer font-bold'>Sign Up</button>
                </div>
            </div>
        </nav>
    );
};

export default Nav;