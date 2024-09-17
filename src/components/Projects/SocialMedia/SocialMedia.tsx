import img1 from "/ProjectAssets/SocialMedia/addPost.png"
import img2 from "/ProjectAssets/SocialMedia/HomeImg.png"
import img3 from "/ProjectAssets/SocialMedia/logInImg.png"
import Slider from "../../Slider/Slider"

const SocialMedia = () => {
    const sliderImages = [
        {img: img1, alt: "Image of Adding Post"},
        {img: img2, alt: "Image of Projects's home page"},
        {img: img3, alt: "Image of login page"}
    ]


    return ( 
        <div className="flex mt-10 items-center justify-center">
            <div className="text-left w-1/2 h-auto">
                <h2 className="text-3xl font-semibold">Web Posts</h2>
                <p className="mt-4 text-lg">The biggest personal project I am still working on. </p>
                <p className="mt-1 text-lg">This project contains most things that every functional Post website should have:</p>
                <ol className="list-disc ml-4 mt-1 text-lg">
                    <li>Register and Login (with password securely stored)</li>
                    <li>JWT user authorization</li>
                    <li>Database integration</li>
                    <li>CRUD functionality</li>
                    <li>API calls</li>
                    <li>Website state management</li>
                </ol>
            </div>
            <div className="w-2/5 sticky top-0">
                <Slider images={sliderImages}/>
            </div>
        </div>
     );
}
 
export default SocialMedia;
