import type { Dispatch, SetStateAction } from "react";
import type { Itechnologies } from "../../type/technologiesType";
// import { TbTrash } from "react-icons/tb";
import { IoClose } from "react-icons/io5";


// import TechnologyCard from "./TechnologyCard";
// import Technologies from "./Technologies";


interface IYourStackProps {
    yourStack: Itechnologies[];
    setYourStack: Dispatch<SetStateAction<Itechnologies[]>>
}

const YourStack = ({yourStack, setYourStack}: IYourStackProps) => {
    // console.log(yourStack, "from your stack");

    const handleRemoveTechnology = (Technologies:Itechnologies) => {
        const restTechnology = yourStack.filter(yourStack => yourStack.name != Technologies.name)
        // console.log(restTechnology);
        setYourStack(restTechnology)
    }

    return (
        <div className="border rounded-lg p-3 w-150">
            <h2 className="text-xl font-bold">Your Stack</h2>
            {/* <p className="text-sm">No technologies selected yet.</p>
         <div className="border border-dashed rounded-lg p-3">
            <p className="text-sm">Your stack is empty.</p>
         </div> */}

            {yourStack.map((Technologies: Itechnologies) => {
                // return Technologies.name;
                // return <TechnologyCard technology={Technologies} />
                return (
                    <div className="border-[#c6cace] border-2 rounded-lg p-2 m-2 flex justify-between items-center">
                        <div className="flex items-center gap-2">
                            <img src={Technologies.icon} alt="Technology Icon" className="h-10 w-10" />
                            <div>
                                <h2 className="text-md font-bold">{Technologies.name}</h2>
                                <p className="text-sm text-[#8896A9]">{Technologies.category}</p>
                            </div>
                        </div>
                        <div>
                            {/* <span className="text-red-500">
                                <TbTrash />
                            </span> */}
                            <span className="text-[#94A3B8] cursor-pointer" onClick={() => handleRemoveTechnology(Technologies)}>
                                <IoClose size={35} />
                            </span>
                        </div>
                    </div>
                )
            })}

            <button className="text-red-500 font-bold border border-red-500 rounded-lg w-full my-5 p-2">Remove All</button>
        
        </div>
    );
};

export default YourStack;