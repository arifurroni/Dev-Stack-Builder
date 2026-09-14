import { use, useState, type Dispatch, type SetStateAction } from 'react';
import type { Itechnologies } from '../../type/technologiesType';
import AvailableTechnologies from './AvailableTechnologies';
import YourStack from './YourStack';


interface TechnologiesProps {
    technologiesPromise: Promise<Itechnologies[]>
    yourStack: Itechnologies[];
    setYourStack: Dispatch<SetStateAction<Itechnologies[]>>
}

const Technologies = ({technologiesPromise}:TechnologiesProps) => {
    
    const technologies = use(technologiesPromise);

    const [yourStack, setYourStack] = useState<Itechnologies[]>([])
    

    return (
        <div className='max-w-7xl mx-auto px-5 lg:px-10 my-10'>
            <div><h2 className='text-4xl font-bold'>Explore the <span className='bg-clip-text text-transparent' style={{ backgroundImage: "var(--brand-gradient)" }}>Technologies</span></h2></div>
            <div><p className='text-[#64748B] mt-3 mb-10'>Pick one technology per category to build your ideal stack.</p></div>

            <div className='flex flex-col md:flex-row justify-between gap-4'>
                <div>
                <AvailableTechnologies technologies = {technologies} yourStack={yourStack} setYourStack={setYourStack} />
                </div>


                <YourStack yourStack={yourStack} setYourStack={setYourStack} />


            </div>
        </div>
    );
};

export default Technologies;