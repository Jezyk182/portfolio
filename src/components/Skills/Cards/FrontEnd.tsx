import { React, Javascript, Typescript, ReactQueryIcon, ReactRouter, Html5, Css3, Tailwindcss, Axios, Jquery } from "../../../icons/TechnologiesIcons";
import ShowTechnologies from "../../Technologies/ShowTechnologies";


const FrontEnd = () => {
    return ( 
        <div className="w-4/5 border-4 border-zinc-500/20 rounded-xl py-4 px-8 bg-bgMain bg-opacity-80 h-fit lg:w-2/5">
            <h2 className="text-2xl font-semibold mb-6">Front-End</h2>
            <p className="text-neutral-400 mt-2">As a Junior Developer, I use the most popular frameworks and libraries. </p>
            <p className="text-neutral-400 mt-2">They have wide documentation which is making them easy to learn.</p>
            <div className="flex gap-4 items-center flex-wrap mt-4 w-3/5">
                <ShowTechnologies Icon={Html5} name="HTML"/>
                <ShowTechnologies Icon={Css3} name="CSS"/>
                <ShowTechnologies Icon={Javascript} name="JavaScript"/>
                <ShowTechnologies Icon={Typescript} name="TypeScript"/>
                <ShowTechnologies Icon={Jquery} name="jQuery"/>
                <ShowTechnologies Icon={Tailwindcss} name="TailwindCSS"/>
                <ShowTechnologies Icon={React} name="ReactJS"/>
                <ShowTechnologies Icon={ReactQueryIcon} name="React Query"/>
                <ShowTechnologies Icon={ReactRouter} name="React Router"/>
                <ShowTechnologies Icon={Axios} name="Axios"/>
            </div>
        </div>
     );
}
 
export default FrontEnd;