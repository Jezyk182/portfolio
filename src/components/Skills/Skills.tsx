import FrontEnd from "./Cards/FrontEnd";
import BackEnd from "./Cards/BackEnd";
import VersionControl from "./Cards/VersionControl";


const Skills = () => {

    return ( 
        <div className="w-screen z-10 py-24 relative">
            <h1 className="text-4xl font-bold text-center capitalize mb-16">Skills</h1>
            <div className="flex justify-center container m-auto gap-12 flex-wrap flex-col items-center lg:flex-row">
                <FrontEnd />
                <BackEnd />
                <VersionControl />
            </div>
        </div>
     );
}
 
export default Skills;