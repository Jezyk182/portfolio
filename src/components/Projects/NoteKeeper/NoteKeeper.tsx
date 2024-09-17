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
        <div className="w-full sm:w-4/5 md:w-2/5 xl:w-2/6">
            <h2 className="text-xl mb-2">Note Keeper</h2>
            <Slider images={sliderImages}/>
        </div>
     );
}
 
export default NoteKeeper;
