import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Parallax, A11y } from "swiper/modules";

import 'swiper/css';
import 'swiper/css/navigation';


interface imageProps {
    img: string;
    alt: string;
}

interface props {
    images: imageProps[];
}

const Slider: React.FC<props> = ({ images }) => {


    return ( 
        <Swiper
        modules={[Pagination, Parallax, A11y]}
        pagination={{ clickable: true }}
        parallax
        spaceBetween={10}
        slidesPerView={1}
        >
            {images.map((image, index)  => {
                return <SwiperSlide><img src={image.img} alt={image.alt} key={index} className="rounded-lg"/></SwiperSlide>
            })}
        </Swiper>
     );
}
 
export default Slider;