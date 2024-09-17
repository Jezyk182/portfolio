import { Express, Postgresql, JwtIcon, Nodejs, Mysql, PostmanIcon } from "../../../icons/TechnologiesIcons";
import ShowTechnologies from "../../Technologies/ShowTechnologies";

const BackEnd = () => {
    return ( 
        <div className="w-4/5 border-4 border-zinc-500/20 rounded-xl py-4 px-8 bg-bgMain bg-opacity-80 h-fit lg:w-2/5">
            <h2 className="text-2xl font-semibold mb-6">Back-End</h2>
            <p className="text-neutral-400 mt-2">
                I use well-known tools and frameworks to create the behind-the-scenes parts of applications. These help make sure everything runs smoothly, handling data and keeping the system reliable, fast and safe. 
            </p>
            <div className="flex gap-4 items-center flex-wrap mt-4 w-3/5">
                <ShowTechnologies Icon={Express} name="ExpressJS"/>
                <ShowTechnologies Icon={Postgresql} name="PostreSQL"/>
                <ShowTechnologies Icon={Mysql} name="MySQL"/>
                <ShowTechnologies Icon={JwtIcon} name="JWT"/>
                <ShowTechnologies Icon={Nodejs} name="NodeJS"/>
                <ShowTechnologies Icon={PostmanIcon} name="PostMan"/>
            </div>
        </div>
     );
}
 
export default BackEnd;