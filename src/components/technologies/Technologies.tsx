import React, { use } from 'react';
import type { Itechnologies } from '../../type/technologiesType';

interface TechnologiesProps {
    technologiesPromise: Promise<Itechnologies[]>
}

const Technologies = ({technologiesPromise}:TechnologiesProps) => {
    console.log(technologiesPromise);
    const technologies = use(technologiesPromise);
    

    return (
        <div>
            
        </div>
    );
};

export default Technologies;