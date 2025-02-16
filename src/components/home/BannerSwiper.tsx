import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import Banner from './Banner'
import { Autoplay } from 'swiper/modules'

export default function BannerSwiper() {
    return (
        <Swiper
            spaceBetween={12}
            slidesPerView={1}
            centeredSlides={true}
            grabCursor={true}
            autoplay={{
                delay: 3000,
                disableOnInteraction: false,
            }}
            modules={[Autoplay]}
            className='mb-44'>
            <SwiperSlide>
                <Banner />
            </SwiperSlide>
            <SwiperSlide>
                <Banner />
            </SwiperSlide>
            <SwiperSlide>
                <Banner />
            </SwiperSlide>
        </Swiper>
    )
}
