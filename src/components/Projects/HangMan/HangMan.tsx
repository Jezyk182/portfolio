import img1 from "/ProjectAssets/HangMan/Home.png"
import img2 from "/ProjectAssets/HangMan/Win.png"
import img3 from "/ProjectAssets/HangMan/Lose.png"
import Slider from "../../Slider/Slider"

const HangMan = () => {
    const sliderImages = [
        {img: img1, alt: "Image of homescreen"},
        {img: img2, alt: "Image of adding note"},
        {img: img3, alt: "Image of note details page"}
    ]


    return ( 
        <div className="w-[30%] sticky top-0">
            <h2 className="text-xl mb-2">HangMan game</h2>
            <Slider images={sliderImages}/>
        </div>
     );
}
 
export default HangMan;
