import img1 from "/ProjectAssets/SocialMedia/HomeImg.png"
import img2 from "/ProjectAssets/SocialMedia/addPost.png"
import img3 from "/ProjectAssets/SocialMedia/logInImg.png"
import img4 from "/ProjectAssets/SocialMedia/Register.png"
import img5 from "/ProjectAssets/SocialMedia/EditPost.png"
import Slider from "../../Slider/Slider"
import { Postgresql, React, ReactQueryIcon, ReactRouter, Express, Axios, Nodejs, JwtIcon, Javascript, Typescript, Tailwindcss } from "../../../icons/TechnologiesIcons"
import ShowTechnologies from "../../Technologies/ShowTechnologies"



const SocialMedia = () => {
    const sliderImages = [
        {img: img1, alt: "Image of Projects's home page"},
        {img: img2, alt: "Image of Adding Post"},
        {img: img5, alt: "Image of Editing Post"},
        {img: img3, alt: "Image of login page"},
        {img: img4, alt: "Image of Register Page"},
    ]


    return ( 
        <div className="flex mt-10 items-center justify-center flex-col gap-4 lg:flex-row lg:gap-10 2xl:gap-12">
            <div className="text-left w-full h-auto lg:w-1/3 2xl:w-2/5">
                <h2 className="text-xl font-semibold sm:text-2xl lg:text-3xl">Web Posts</h2>
                <p className="mt-4 text-md sm:text-lg">The biggest personal project I am still working on. </p>
                <p className="mt-1 text-md sm:text-lg">The project contains:</p>
                <ol className="list-disc ml-4 mt-1 text-md sm:text-lg">
                    <li>Register and Login (with password securely stored)</li>
                    <li>JWT user authorization</li>
                    <li>Database integration</li>
                    <li>CRUD functionality</li>
                    <li>API calls</li>
                    <li>Website state management</li>
                </ol>
                <div className="flex gap-4 mt-3">
                    <ShowTechnologies Icon={React} name="ReactJS" />
                    <ShowTechnologies Icon={Nodejs} name="NodeJS" />
                    <ShowTechnologies Icon={Express} name="ExpressJS" />
                    <ShowTechnologies Icon={Postgresql} name="PostreSQL" />
                    <ShowTechnologies Icon={Tailwindcss} name="TailwindCSS" />
                    <ShowTechnologies Icon={Javascript} name="JavaScript" />
                    <ShowTechnologies Icon={Typescript} name="TypeScript" />
                    <ShowTechnologies Icon={Axios} name="Axios" />
                    <ShowTechnologies Icon={JwtIcon} name="JWT" />
                    <ShowTechnologies Icon={ReactQueryIcon} name="React Query" />
                    <ShowTechnologies Icon={ReactRouter} name="React Router" />
                </div>
            </div>
            <div className="w-full lg:w-1/2 2xl:w-2/5">
                <a href="https://github.com/Jezyk182/Social-Media---Project" target="_blank">
                    <Slider images={sliderImages}/>
                </a>
            </div>
        </div>
     );
}
 
export default SocialMedia;
