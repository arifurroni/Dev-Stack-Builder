import type { Dispatch, SetStateAction } from "react";
import type { Itechnologies } from "../../type/technologiesType";



interface IyourStackProps {
    yourStack: Itechnologies[];
    setYourStack: Dispatch<SetStateAction<Itechnologies[]>>;
}

const YourStack = ({yourStack, setYourStack}: IyourStackProps) => {
    
    return (
        <div className="border rounded-lg p-3">
            <h2 className="text-xl font-bold">Your Stack</h2>
            <p className="text-sm">No technologies selected yet.</p>
         <div className="border border-dashed rounded-lg p-3">
            <p className="text-sm">Your stack is empty.</p>
         </div>
        </div>
    );
};

export default YourStack;