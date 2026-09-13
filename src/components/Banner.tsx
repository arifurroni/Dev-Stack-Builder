import bannerImg from '../assets/banner-stack.png'

const Banner = () => {
    return (
        <div className='flex flex-col md:flex-row justify-between items-center max-w-7xl mx-auto px-5 lg:px-10 my-10'>
            <div>
                <h1 className='text-5xl font-bold'>Build Your Ideal <br /> <span className='bg-clip-text text-transparent' style={{ backgroundImage: "var(--brand-gradient)" }}>Development Stack</span></h1>
                <p className='my-4'>Explore frontend, backend, database, and tooling options, compare them side by side, and put together the stack that fits your next project.</p>
                <div className='flex flex-col md:flex-row items-center mt-10 gap-4'>
                    <button className='py-2 px-4 rounded-lg text-white cursor-pointer transition-all hover:scale-103' style={{ backgroundImage: "var(--brand-gradient)" }}>Explore Technologies</button>
                    <button className='border border-gray-300 py-2 px-10 rounded-lg cursor-pointer transition-all hover:scale-103 hover:bg-pink-50'>Learn More</button>
                </div>
            </div>
            <img src={bannerImg} alt="Banner Stack Image" />
        </div>
    );
};

export default Banner;