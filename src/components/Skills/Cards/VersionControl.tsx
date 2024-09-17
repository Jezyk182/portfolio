import { Git, GithubIcon, Gitlab, Sourcetree } from "../../../icons/TechnologiesIcons";
import ShowTechnologies from "../../Technologies/ShowTechnologies";

const VersionControl = () => {
    return ( 
        <div className="w-4/5 border-4 border-zinc-500/20 rounded-xl py-4 px-8 bg-bgMain bg-opacity-80 h-fit lg:w-2/5">
            <h2 className="text-2xl font-semibold mb-6">Version Control</h2>
            <p className="text-neutral-400 mt-2">
                These tools help track changes in code, making it easier to collaborate, manage different project versions, and ensure nothing important is lost.
            </p>
            <div className="flex gap-4 items-center flex-wrap mt-4 w-3/5">
                <ShowTechnologies Icon={Git} name="Git"/>
                <ShowTechnologies Icon={GithubIcon} name="GitHub"/>
                <ShowTechnologies Icon={Gitlab} name="GitLab"/>
                <ShowTechnologies Icon={Sourcetree} name="SourceTree"/>
            </div>
        </div>
     );
}
 
export default VersionControl;