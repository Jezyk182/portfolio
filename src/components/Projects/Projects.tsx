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
        <div className="w-screen min-h-96 bg-bgMain border-t-4 border-zinc-500/20 z-50 absolute pt-24 text-center">
            <h1 className="text-4xl font-bold capitalize">Personal Projects I was working on</h1>
            <div className="w-2/3 m-auto pb-[1000px] mt-12">
                <div className="flex flex-col gap-12">
                    <SocialMedia />
                    <NoteKeeper />
                    <HangMan />
                </div>
            </div>
        </div>
     );
}
 
export default Projects;