import { useState, useEffect } from 'react';
import useMousePosition from '../hooks/useMousePosition';

const Landing = () => {
    const taleSize = 36; // Width and height of each tale
    const {mouseX, mouseY} = useMousePosition()


    const [dimensions, setDimensions] = useState({
        screenWidth: 0,
        screenHeight: 0
    });

    useEffect(() => {
        const initialWidth = window.innerWidth
        const initialHeight = window.innerHeight
        setDimensions({
            screenWidth: initialWidth,
            screenHeight: initialHeight
        });
    }, []);

    const talesX = Math.ceil(dimensions.screenWidth / (taleSize))
    const talesY = dimensions.screenHeight / (taleSize)
    const allTales = talesX * talesY


    function showTales() {
        const tales = []
        for (let i = 0; i < allTales; i++) {
            tales.push(<div key={i} className="bg-gray-950/20 border-2 border-stone-800/20 w-9 h-9 z-10 backdrop:blur-3xl"></div>)
        }
        return tales
    }

    return (
        <div className='relative'>
            <div
                className="fixed flex flex-wrap overflow-hidden"
                style={{
                    width: talesX * (taleSize), // Exact width to fit tales
                    height: talesY * (taleSize), // Exact height to fit tales
                }}
            >
                <div className='fixed w-[400px] h-[400px] bg-purple-900/20 -translate-x-1/2 -translate-y-1/2 blur-[124px] rounded-blob' style={{
                    top: mouseY,
                    left: mouseX,
                }}></div>

                {/* //! BLOBS */}

                <div className='fixed w-[400px] h-[400px] bg-cyan-900/20 top-2/3 right-0 translate-x-1/5 -translate-y-1/2 blur-[124px]'></div>
                <div className='fixed w-[300px] h-[350px] bg-rose-900/20 bottom-0 left-1/4 -translate-x-3/4 translate-y-1/4 blur-[124px]'></div>
                <div className='fixed w-[600px] h-[550px] bg-yellow-900/20 top-0 left-1/2 -translate-x-3/4 -translate-y-1/4 blur-[124px]'></div>

                {showTales()}

            </div>
            <div className='absolute top-72 left-1/3 -translate-x-1/3 z-50 font-semibold flex gap-10 items-center'>
                <img src="./prof.jpg" alt="" className='w-80 rounded'/>
                <div>
                    <h1 className='text-7xl'>Patryk Plekaniec</h1>
                    <p className='text-xl mt-6'>Junior Front-End Developer</p>
                </div>
            </div>
        </div>
    );
}

export default Landing
