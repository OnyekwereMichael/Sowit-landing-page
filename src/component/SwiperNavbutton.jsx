import React from 'react'
import { useSwiper } from 'swiper/react'
import { FaArrowAltCircleLeft, FaArrowAltCircleRight,  } from 'react-icons/fa';

const SwiperNavbutton = () => {
    const swiper = useSwiper()
  return (
    <div>
      <div className="flex justify-end  gap-3 my-3">
                <FaArrowAltCircleLeft size={32} className="mx-3" onClick={() => swiper.slidePrev()} />
                <FaArrowAltCircleRight size={32} className="mx-3" onClick={() => swiper.slideNext()} />
            </div>
    </div>
  )
}

export default SwiperNavbutton
