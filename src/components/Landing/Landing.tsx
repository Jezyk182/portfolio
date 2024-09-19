import { useState, useEffect } from 'react';
import useMousePosition from '../../hooks/useMousePosition';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, FileCv } from '../../icons/Socials';
import { Location } from '../../icons/Assets';
import pdf from "./CV.pdf"

const Landing = () => {
    const taleSize = 36; // Width and height of each tale
    const {mouseX, mouseY} = useMousePosition()

    const [dimensions, setDimensions] = useState({
        screenWidth: 0,
        screenHeight: 0
    });

    useEffect(() => {
        const initialWidth = window.innerWidth + 50;
        const initialHeight = window.innerHeight + 50;
        setDimensions({
            screenWidth: initialWidth,
            screenHeight: initialHeight
        });
    }, []);

    document.addEventListener("resize", () => {
        const initialWidth = window.innerWidth + 50;
        const initialHeight = window.innerHeight + 50;
        setDimensions({
            screenWidth: initialWidth,
            screenHeight: initialHeight
        });
    })


    const talesX = Math.ceil(dimensions.screenWidth / (taleSize));
    const talesY = dimensions.screenHeight / (taleSize);
    const allTales = talesX * talesY;

    function showTales() {
        const tales = [];
        for (let i = 0; i < allTales; i++) {
            tales.push(
                <div key={i} className="bg-zinc-950/20 border-2 border-stone-800/20 w-9 h-9 z-10 backdrop:blur-3xl"></div>
            );
        }
        return tales;
    }

    

    return (
        <div className="relative z-10">
            <div className="fixed h-screen w-screen bg-bgMain"></div>
            <div className="relative lg:-mb-36"> {/* Removed h-screen */}
                <div
                    className="fixed flex flex-wrap overflow-hidden"
                    style={{
                        width: talesX * taleSize, // Exact width to fit tales
                        height: talesY * taleSize, // Exact height to fit tales
                    }}
                >
                    <div
                        className="absolute w-[400px] h-[400px] bg-purple-900/20 -translate-x-1/2 -translate-y-1/2 blur-[124px] rounded-blob"
                        style={{
                            top: mouseY,
                            left: mouseX,
                        }}
                    ></div>

                    {/* //! BLOBS */}
                    <motion.div
                        className="absolute w-[400px] h-[400px] bg-cyan-600/20 right-0 blur-[124px]"
                        animate={{
                            scale: [1, 1.3, 1],
                            top: ['20%', '0%', '20%'],
                            right: ['0%', '10%', '0%'],
                        }}
                        transition={{
                            duration: 5,
                            ease: 'easeInOut',
                            times: [0, 0.5, 1],
                            repeat: Infinity,
                        }}
                    ></motion.div>
                    <motion.div
                        className="absolute w-[400px] h-[400px] bg-rose-600/20 right-0 blur-[124px]"
                        animate={{
                            scale: [1, 1.3, 1],
                            top: ['40%', '80%', '40%'],
                            left: ['20%', '50%', '20%'],
                        }}
                        transition={{
                            duration: 10,
                            ease: 'easeInOut',
                            times: [0, 0.5, 1],
                            repeat: Infinity,
                        }}
                    ></motion.div>
                    <motion.div
                        className="absolute w-[300px] h-[300px] bg-yellow-600/20 blur-[124px]"
                        animate={{
                            scale: [1, 1.3, 1],
                            left: ['0%', '30%', '0%'],
                            top: ['-20%'],
                            translateY: ['50%', '50%', '50%'],
                        }}
                        transition={{
                            duration: 5,
                            ease: 'easeInOut',
                            times: [0, 0.5, 1],
                            repeat: Infinity,
                        }}
                    ></motion.div>

                    {showTales()}
                </div>

                {/* <div className="font-semibold flex gap-10 items-center w-screen h-screen z-50 relative -top-[10%] justify-center flex-wrap text-center"> */}
                <div className="font-semibold flex gap-0 items-center w-screen h-screen z-50 -top-[10%] relative justify-center flex-wrap text-center md:flex-col md:gap-10 lg:flex-row lg:text-left xl:gap-24 2xl:gap-36">
                    <img src="./prof.jpg" alt="" className="w-80 rounded-lg shadow-2xl my-0" />
                    <div className='relative'>
                        <p>Hi there! I'm</p>
                        <h1 className="text-5xl md:text-7xl">
                            Patryk <span className="bg-gradient-to-r from-purple-100 to-purple-700 text-transparent bg-clip-text">Plekaniec</span>
                        </h1>
                        <p className="text-md mt-4 font-light w-2/3 mx-auto text-center md:text-lg lg:text-left lg:w-auto">
                            A{' '}
                            <span className="underline decoration-2 decoration-purple-600 font-normal">
                                Front-End Developer
                            </span>{' '}
                            who is ready to <br /> work on exciting web applications using modern technologies.
                        </p>
                        <div className="mt-4 flex gap-4 justify-center lg:justify-start">
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
                                href="https://www.linkedin.com/in/patryk-plekaniec/"
                                className="w-8 h-8 inline-block transition-colors duration-200 fill-sky-400 hover:fill-sky-600"
                                target="_blank"
                            >
                                <Linkedin />
                            </a>
                            <a
                                href={pdf}
                                target="_blank"
                                className="w-8 h-8 inline-block transition-colors duration-200 stroke-green-400 hover:stroke-green-600"
                            >
                                <FileCv />
                            </a>
                        </div>
                        <div className='flex items-center justify-center absolute -bottom-10 left-0 right-0 gap-1 fill-red-500 lg:top-0 lg:bottom-auto lg:right-0 lg:left-auto'>
                            <Location />
                            <p className='text-sm'>Poland, <span className='text-neutral-300'>Silesia</span></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Landing;
