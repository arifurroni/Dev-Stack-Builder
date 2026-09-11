import footerLogo from '../assets/logo-text.png'

const Footer = () => {
    return (
        <div>
            <div className="mx-[8%] my-10">
                <div className='flex flex-col md:flex-row justify-between gap-10'>
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
                        <ul className='my-5 flex flex-col gap-2'>
                            <li><a href="#github" target='_blank'>GitHub</a></li>
                            <li><a href="#twitter" target='_blank'>Twitter</a></li>
                            <li><a href="#linkedin" target='_blank'>LinkedIn</a></li>
                        </ul>  
                    </div>
                    <div>
                        <h2 className='font-bold'>COMPANY</h2>
                        <ul className='my-5 flex flex-col gap-2'>
                            <li><a href="#about" target='_blank'>About</a></li>
                            <li><a href="#contact" target='_blank'>Contact</a></li>
                            <li><a href="#careers" target='_blank'>Careers</a></li>
                        </ul>
                    </div>
                    <div>
                        <h2 className='font-bold'>LEGAL</h2>
                        <ul className='my-5 flex flex-col gap-2'>
                            <li><a href="#privacy" target='_blank'>Privacy Policy</a></li>
                            <li><a href="#terms" target='_blank'>Terms of Service</a></li>
                        </ul>
                    </div>
                </div>
                <div className="flex flex-col md:flex-row justify-between items-center my-10">
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