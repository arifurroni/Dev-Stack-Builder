import { useState, type Dispatch, type SetStateAction } from "react";
import type { Itechnologies } from "../../type/technologiesType";
import { toast } from "react-toastify";



interface TechnologyCardProps {
  technology: Itechnologies;
  yourStack: Itechnologies[];
  setYourStack: Dispatch<SetStateAction<Itechnologies[]>>
}


const TechnologyCard = ({ technology, yourStack, setYourStack }: TechnologyCardProps) => {

    const [isSelected, setIsSelected] = useState(false)

    const handleSelectTechnology = () => {
        setIsSelected(true)
        if (isSelected === false) {
            toast(`${technology.name} is added successfully`, {position: "bottom-right"});
        } else {
            toast(`Already added`);
        }

        // Your Stack Logic
        setYourStack([...yourStack, technology])
    }

  const {
    name,
    category,
    description,
    icon,
    rating,
    difficulty,
    badge,
  } = technology;

  return (
    <div className="group rounded-2xl border border-gray-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      {/* Header */}
      <div className="flex items-start justify-between gap-2">
        <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gray-50 p-3">
          <img
            src={icon}
            alt={`${name} icon`}
            className="h-full w-full object-contain"
          />
        </div>

        <span className={`bg-blue-50 text-blue-500 border-blue-100 rounded-full px-3 py-1 text-xs font-semibold`}>
          {badge}
        </span>
      </div>

      {/* Content */}
      <div className="mt-5">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-bold text-gray-900">
            {name}
          </h2>
        </div>

        <p className="mt-3 line-clamp-2 text-sm leading-6 text-gray-600">
          {description}
        </p>
      </div>

      {/* Rating & Difficulty */}
      <div className="mt-6 flex items-center justify-between border-t border-gray-100 pt-4">
        <span className="text-sm font-medium text-gray-500 bg-gray-100 py-1 px-2 rounded-lg">
            {category}
        </span>

        <span className="rounded-lg px-3 py-1.5 text-sm">
          {difficulty}
        </span>

        <div className="flex items-center gap-1">
          <span className="text-yellow-400">★</span>
          <span className="text-sm font-semibold text-gray-700">
            {rating}
          </span>
        </div>

      </div>


        <button onClick={()=> handleSelectTechnology()} disabled={isSelected === true ? true : false} className="btn btn-primary w-full rounded-xl mt-5 py-1 shadow-md transition-all hover:scale-103">{isSelected === true ? "✓ Added to Stack" : "Add to Stack"}</button>

    </div>
  );
};

export default TechnologyCard;
