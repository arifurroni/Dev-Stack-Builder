import footerLogo from '../assets/logo-text.png'

const Footer = () => {
    return (
        <div>
            <div className="mx-[8%] my-10">
                <div className='flex gap-10'>
                    <div>
                        <img src={footerLogo} alt="Logo Dev Stack" />
                        <p className='my-5'>Curated tools, technologies, and resources for developers building modern software.</p>
                        <div className='flex gap-5 my-10'>
                            <a href="#github">GitHub</a>
                            <a href="#twitter">Twitter</a>
                            <a href="#linkedin">LinkedIn</a>
                        </div>
                    </div>
                    <div className=''>
                        <h2 className='font-bold'>PRODUCT</h2>
                        <ul>
                            <li><a href="#github">GitHub</a></li>
                            <li><a href="#twitter">Twitter</a></li>
                            <li><a href="#linkedin">LinkedIn</a></li>
                        </ul>
                        
                        
                        
                    </div>
                    <div></div>
                    <div></div>
                </div>
                <div className="flex justify-between items-center my-10">
                    <p className="text-gray-400">&copy; 2026 Dev Stack. All rights reserved.</p>
                    <ul className="flex justify-between gap-5 text-gray-400">
                        <li><a href="#privacy" target="_blank">Privacy</a></li>
                        <li><a href="#terms" target="_blank">Terms</a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Footer;