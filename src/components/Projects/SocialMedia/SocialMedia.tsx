import img1 from "/ProjectAssets/SocialMedia/HomeImg.png"
import img2 from "/ProjectAssets/SocialMedia/addPost.png"
import img3 from "/ProjectAssets/SocialMedia/logInImg.png"
import img4 from "/ProjectAssets/SocialMedia/Register.png"
import img5 from "/ProjectAssets/SocialMedia/EditPost.png"
import Slider from "../../Slider/Slider"

const SocialMedia = () => {
    const sliderImages = [
        {img: img3, alt: "Image of login page"},
        {img: img4, alt: "Image of Register Page"},
        {img: img1, alt: "Image of Adding Post"},
        {img: img2, alt: "Image of Projects's home page"},
        {img: img5, alt: "Image of Editing Post"},
    ]


    return ( 
        <div className="flex mt-10 items-center justify-center flex-col gap-4 lg:flex-row lg:gap-10 2xl:gap-12">
            <div className="text-left w-full h-auto lg:w-1/3 2xl:w-2/5">
                <h2 className="text-xl font-semibold sm:text-2xl lg:text-3xl">Web Posts</h2>
                <p className="mt-4 text-md sm:text-lg">The biggest personal project I am still working on. </p>
                <p className="mt-1 text-md sm:text-lg">This project contains most things that every functional Post website should have:</p>
                <ol className="list-disc ml-4 mt-1 text-md sm:text-lg">
                    <li>Register and Login (with password securely stored)</li>
                    <li>JWT user authorization</li>
                    <li>Database integration</li>
                    <li>CRUD functionality</li>
                    <li>API calls</li>
                    <li>Website state management</li>
                </ol>
            </div>
            <div className="w-full lg:w-1/2 2xl:w-2/5">
                <Slider images={sliderImages}/>
            </div>
        </div>
     );
}
 
export default SocialMedia;
