import footerLogo from '../assets/logo-text.png'

const Footer = () => {
    return (
        <div>
            <div className="mx-[8%] my-10">
                <div>
                    <div>
                        <img src={footerLogo} alt="Logo Dev Stack" />
                        <p className='my-5'>Curated tools, technologies, and resources for developers building modern software.</p>
                    </div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                <div className="flex justify-between my-10">
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