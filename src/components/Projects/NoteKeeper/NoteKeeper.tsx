import img1 from "/ProjectAssets/NoteTaker/Home.png"
import img2 from "/ProjectAssets/NoteTaker/AddingNote.png"
import img3 from "/ProjectAssets/NoteTaker/NoteDetails.png"
import Slider from "../../Slider/Slider"

const NoteKeeper = () => {
    const sliderImages = [
        {img: img1, alt: "Image of homescreen"},
        {img: img2, alt: "Image of adding note"},
        {img: img3, alt: "Image of note details page"}
    ]


    return ( 
        <div className="flex mt-10 items-center justify-center">
            <div className="text-left w-1/2 h-auto">
                <h2 className="text-3xl font-semibold">2. Note Keeper</h2>
                <p className="mt-4 text-lg">Simple project using CRUD technique </p>
                <p className="mt-1 text-lg">Things I learned during this project:</p>
                <ol className="list-disc ml-4 mt-1 text-lg">
                    <li>Manipulating DOM using JS</li>
                    <li>Cutting string data types</li>
                    <li>Creating modals</li>
                </ol>
            </div>
            <div className="w-2/5 sticky top-0">
                <Slider images={sliderImages}/>
            </div>
        </div>
     );
}
 
export default NoteKeeper;
