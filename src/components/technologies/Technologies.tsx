import React, { use } from 'react';

const Technologies = ({technologiesPromise}) => {
    console.log(technologiesPromise);
    const technologies = use(technologiesPromise)

    return (
        <div>
            
        </div>
    );
};

export default Technologies;