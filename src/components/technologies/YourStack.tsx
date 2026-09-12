import type { Dispatch, SetStateAction } from "react";
import type { Itechnologies } from "../../type/technologiesType";



interface IyourStackProps {
    yourStack: Itechnologies[];
    setYourStack: Dispatch<SetStateAction<Itechnologies[]>>;
}

const YourStack = ({yourStack, setYourStack}: IyourStackProps) => {
    
    return (
        <div>
            <h2>Your Stack</h2>
         <div>
          
         </div>
        </div>
    );
};

export default YourStack;