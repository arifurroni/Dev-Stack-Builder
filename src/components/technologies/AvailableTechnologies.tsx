import React from 'react';
import TechnologyCard from './TechnologyCard';

const AvailableTechnologies = ({technologies}) => {
    return (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
  {technologies.map((technologies) => (
    <TechnologyCard
      key={technologies.id}
      technology={technologies}
    />
  ))}
</div>
        // <div>
        //     {
        //         technologies.map((technologies) => {
        //             return <div>{technologies.name}</div>
        //         })
        //     }
        // </div>
    );
};

export default AvailableTechnologies;