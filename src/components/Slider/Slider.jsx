
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import './styles.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';


const Slider = () => {
  return (
    <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          {/* <img  src="https://i.ibb.co/mN994np/1x-1.jpg" alt="" /> */}
          <div className="image-container">
          <img src="https://i.ibb.co/89d4JcD/big-sale-11-11-banner-for-one-day-limited-offer-on-november-free-vector.jpg" alt="" />
         
        </div>
          
        </SwiperSlide>

        
        <SwiperSlide>
          {/* <img  src="https://i.ibb.co/mN994np/1x-1.jpg" alt="" /> */}
          <div className="image-container">
          <img src="https://i.ibb.co/7QChSwK/2169358054.png" alt="" />
          
        </div>
          
        </SwiperSlide>

        <SwiperSlide>
          {/* <img  src="https://i.ibb.co/mN994np/1x-1.jpg" alt="" /> */}
          <div className="image-container">
          <img src="https://i.ibb.co/Tg7V8Bn/special-offer-banner-up-to-25-off-illustration-sale-banner-template-design-vector.jpg" alt="" />
          
        </div>
          
        </SwiperSlide>


        <SwiperSlide>
        <div className="image-container">
          <img  src="https://i.ibb.co/7ymfNK1/special-offer-banner-up-to-70-off-illustration-sale-banner-template-design-vector.jpg" alt="" />
         
        </div>
        </SwiperSlide>

        

       
       
        
       

       
        
      </Swiper>
  );
};

export default Slider;