import { motion } from 'framer-motion';


interface props {
    color: string;
    top: Array<string>;
    left: Array<string>;
    duration: number;
}

const Blob: React.FC<props> = ({color, top, left, duration}) => {
    return ( 
        <motion.div 
                    className={`absolute w-[400px] h-[400px] bg-${color}-600/20 right-0 blur-[124px]`}
                    animate={{
                        scale: [1, 1.3, 1],
                        top: top,
                        right: left,
                    }}
                    transition={{
                        duration: {duration},
                        ease: "easeInOut",
                        times: [0, 0.5, 1],
                        repeat: Infinity,
                      }}
                ></motion.div>
     );
}
 
export default Blob;