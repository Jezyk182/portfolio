import img1 from "/ProjectAssets/VowelCounter/Home.png"
import img2 from "/ProjectAssets/VowelCounter/Vowels.png"
import Slider from "../../Slider/Slider"

const Vowels = () => {
    const sliderImages = [
        {img: img1, alt: "Image of homescreen"},
        {img: img2, alt: "Image of adding note"},
    ]


    return ( 
        <div className="w-full sm:w-4/5 md:w-2/5 xl:w-2/6">
            <h2 className="text-xl mb-2">Note Keeper</h2>
            <Slider images={sliderImages}/>
        </div>
     );
}
 
export default Vowels;
