import React from 'react';

const AvailableTechnologies = ({technologies}) => {
    return (
        <div>
            {
                technologies.map((technologies) => {
                    return <div>
                        {technologies.name}
                    </div>
                })
            }
        </div>
    );
};

export default AvailableTechnologies;