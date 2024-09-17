import SocialMedia from "./SocialMedia/SocialMedia";
import NoteKeeper from "./NoteKeeper/NoteKeeper";
import HangMan from "./HangMan/HangMan";


const Projects = () => {
    // const [isHover, setIsHover] = useState(false)
    // const [techName, setTechName] = useState("")
    
    // function handleHover(name: string) {
    //     setIsHover(true)
    //     setTechName(name)
    // }



    return (
        <div className="w-screen bg-bgMain border-y-4 border-zinc-500/20 z-10 py-24 text-center relative">
            <h1 className="text-4xl font-bold capitalize">Current Personal Project I am working on</h1>
            <div className="w-2/3 m-auto mt-12">
                <div className="flex flex-col gap-12">
                    <SocialMedia />
                </div>
                <h2 className="text-3xl font-bold capitalize mt-24 mb-12">Other, smaller personal projects</h2>
                <div className="flex flex-wrap gap-12 w-full justify-center">
                    <HangMan />
                    <NoteKeeper />
                </div>
            </div>
        </div>
    );
}
 
export default Projects;