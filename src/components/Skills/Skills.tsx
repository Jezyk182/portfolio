import { React, Javascript, Typescript, ReactQueryIcon, ReactRouter, Html5, Css3, Tailwindcss, Axios, Jquery } from "../../icons/TechnologiesIcons";
import { Express, Postgresql, JwtIcon, Nodejs, Mysql, PostmanIcon } from "../../icons/TechnologiesIcons";
import { Git, GithubIcon, Gitlab, Sourcetree } from "../../icons/TechnologiesIcons";
import ShowTechnologies from "../Technologies/ShowTechnologies";


const Skills = () => {

    return ( 
        <div className="w-screen z-10 py-24 relative">
            <h1 className="text-4xl font-bold text-center capitalize mb-16">Skills I mastered</h1>
            <div className="flex justify-center container m-auto gap-12 flex-wrap">
                <div className="w-1/3 border-4 border-zinc-500/20 rounded-xl py-4 px-8 bg-bgMain bg-opacity-80 h-fit">
                    <h2 className="text-2xl font-semibold mb-6">Front-End</h2>
                    <p className="text-neutral-400 mt-2">As a Junior Developer, I use the most popular frameworks and libraries. </p>
                    <p className="text-neutral-400 mt-2">They have wide documentation which is making them easy to learn.</p>
                    <div className="flex gap-4 items-center flex-wrap mt-4 w-3/5">
                        <ShowTechnologies Icon={Html5} name="HTML"/>
                        <ShowTechnologies Icon={Css3} name="CSS"/>
                        <ShowTechnologies Icon={Javascript} name="JavaScript"/>
                        <ShowTechnologies Icon={Typescript} name="TypeScript"/>
                        <ShowTechnologies Icon={Jquery} name="jQuery"/>
                        <ShowTechnologies Icon={Tailwindcss} name="TailwindCSS"/>
                        <ShowTechnologies Icon={React} name="ReactJS"/>
                        <ShowTechnologies Icon={ReactQueryIcon} name="React Query"/>
                        <ShowTechnologies Icon={ReactRouter} name="React Router"/>
                        <ShowTechnologies Icon={Axios} name="Axios"/>
                    </div>
                </div>
                <div className="w-1/3 border-4 border-zinc-500/20 rounded-xl py-4 px-8 bg-bgMain bg-opacity-80 h-fit">
                    <h2 className="text-2xl font-semibold mb-6">Back-End</h2>
                    <p className="text-neutral-400 mt-2">
                        I use well-known tools and frameworks to create the behind-the-scenes parts of applications. These help make sure everything runs smoothly, handling data and keeping the system reliable, fast and safe. 
                    </p>
                    <div className="flex gap-4 items-center flex-wrap mt-4 w-3/5">
                        <ShowTechnologies Icon={Express} name="ExpressJS"/>
                        <ShowTechnologies Icon={Postgresql} name="PostreSQL"/>
                        <ShowTechnologies Icon={Mysql} name="MySQL"/>
                        <ShowTechnologies Icon={JwtIcon} name="JWT"/>
                        <ShowTechnologies Icon={Nodejs} name="NodeJS"/>
                        <ShowTechnologies Icon={PostmanIcon} name="PostMan"/>
                    </div>
                </div>
                <div className="w-1/3 border-4 border-zinc-500/20 rounded-xl py-4 px-8 bg-bgMain bg-opacity-80 h-fit">
                    <h2 className="text-2xl font-semibold mb-6">Version Control</h2>
                    <p className="text-neutral-400 mt-2">
                        These tools help track changes in code, making it easier to collaborate, manage different project versions, and ensure nothing important is lost.
                    </p>
                    <div className="flex gap-4 items-center flex-wrap mt-4 w-3/5">
                        <ShowTechnologies Icon={Git} name="Git"/>
                        <ShowTechnologies Icon={GithubIcon} name="GitHub"/>
                        <ShowTechnologies Icon={Gitlab} name="GitLab"/>
                        <ShowTechnologies Icon={Sourcetree} name="SourceTree"/>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Skills;