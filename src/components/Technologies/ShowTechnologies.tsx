import { React, Javascript, Typescript, Express, Nodejs, Zod, Postgresql, Axios, ReactQueryIcon, ReactRouter } from "../../icons/TechnologiesIcons";

import { useRef } from "react";

interface ShowTechNameProps {
  name: string;
}

const ShowTechnologies: React.FC<ShowTechNameProps> = ({ name }) => {
    console.log(name)



    return (
      <div className="text-red-600 absolute">
        <p>{name}</p>
        <Express />
      </div>
    );
  };
 
export default ShowTechnologies;