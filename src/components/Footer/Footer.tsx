import { Linkedin, Github, Mail, FileCv } from "../../icons/Socials";
import pdf from "../Landing/CV.pdf"

const Footer = () => {
    const d = new Date()
    const year = d.getFullYear()

    return ( 
        <div className="w-screen bg-bgMain border-y-4 border-zinc-500/20 z-10 py-8 text-center relative">
            <div className="flex gap-4 justify-center">
                <a
                    href="https://www.linkedin.com/in/patryk-plekaniec/"
                    className="w-8 h-8 inline-block transition-colors duration-200 fill-sky-400 hover:fill-sky-600"
                    target="_blank"
                >
                    <Linkedin />
                </a>
                <a
                    href="https://github.com/Jezyk182"
                    target="_blank"
                    className="w-8 h-8 inline-block transition-colors duration-200 fill-gray-400 hover:fill-gray-600"
                >
                    <Github />
                </a>
                <a
                    href="mailto:plekus73@gmail.com"
                    target="_blank"
                    className="w-8 h-8 inline-block transition-colors duration-200 fill-red-400 hover:fill-red-600"
                >
                    <Mail />
                </a>
                <a
                    href={pdf}
                    target="_blank"
                    className="w-8 h-8 inline-block transition-colors duration-200 stroke-green-400 hover:stroke-green-600"
                >
                    <FileCv />
                </a>
            </div>
            <p className="text-neutral-400 capitalize mt-4 text-md sm:text-xl lg:text-xl">Copyrights {year} &copy; Patryk Plekaniec</p>
        </div>
     );
}
 
export default Footer;