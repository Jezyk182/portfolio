import { useState } from "react";

interface ShowTechNameProps {
  name: string;
  Icon: React.ElementType<any>;
}

const ShowTechnologies: React.FC<ShowTechNameProps> = ({ name, Icon }) => {
    const [isHover, setIsHover] = useState(false)

    function handleHover() {
        setIsHover(true)
    }

    function handleMouseLeave() {
        setIsHover(false)
    }

    return (
      <div className="w-fit h-fit relative hover:scale-125 duration-100 ease-out" onMouseOver={handleHover} onMouseLeave={handleMouseLeave}>
          {isHover && <div className="absolute -top-12 -left-1/2 bg-purple-800 py-2 px-3 rounded-md w-max text-sm">{name}</div>}
          <Icon />
      </div>
    );
};
 
export default ShowTechnologies;