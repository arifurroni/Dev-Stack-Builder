// import React from 'react';
import TechnologyCard from './TechnologyCard';
import type { Itechnologies } from '../../type/technologiesType';
import type { Dispatch, SetStateAction } from 'react';

interface TechnologyCardProps {
  technologies: Itechnologies[];
  yourStack: Itechnologies[];
  setYourStack: Dispatch<SetStateAction<Itechnologies[]>>
}

const AvailableTechnologies = ({technologies, yourStack, setYourStack}: TechnologyCardProps) => {
    return (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
  {technologies.map((technologies) => (
    <TechnologyCard
      key={technologies.id}
      technology={technologies} yourStack={yourStack} setYourStack={setYourStack}
    />
  ))}
</div>
      
    );
};

export default AvailableTechnologies;