import img1 from "/ProjectAssets/WeatherApp/Home.png"
import img2 from "/ProjectAssets/WeatherApp/Result.png"
import Slider from "../../Slider/Slider"

const WeatherApp = () => {
    const sliderImages = [
        {img: img1, alt: "Image of weather app home screen"},
        {img: img2, alt: "Image of weather result"},
    ]


    return ( 
        <div className="w-full sm:w-4/5 md:w-2/5 xl:w-2/6">
            <h2 className="text-xl mb-2">Weather App</h2>
            <Slider images={sliderImages}/>
        </div>
     );
}
 
export default WeatherApp;
