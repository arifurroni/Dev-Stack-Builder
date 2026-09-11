// import React from 'react';
import TechnologyCard from './TechnologyCard';
import type { Itechnologies } from '../../type/technologiesType';

interface TechnologyCardProps {
  technologies: Itechnologies[];
}

const AvailableTechnologies = ({technologies}: TechnologyCardProps) => {
    return (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
  {technologies.map((technologies) => (
    <TechnologyCard
      key={technologies.id}
      technology={technologies}
    />
  ))}
</div>
      
    );
};

export default AvailableTechnologies;