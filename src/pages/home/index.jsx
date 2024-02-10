import { Header } from '../../components/header';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { ServiceData } from './constants';
import { FreeMode, Pagination, Navigation } from 'swiper/modules';
import { FaCircleArrowLeft, FaCircleArrowRight } from "react-icons/fa6";
import { Link } from 'react-router-dom';

export function Home(){

  function handleHome(cardTitle){
    console.log(cardTitle);

    if(cardTitle === "Caixa Rápido"){
      // Navegação para a rota "/tasks"
    }
  }

  return(
    <div className="app">
      <Header />
      <div className="w-full h-screen flex items-center justify-center">
        <div className="max-w-[36rem] translate-y-[15%]">
          <Swiper
            slidesPerView={2}
            spaceBetween={50}
            freeMode={true}
            pagination={{
              clickable: true,
            }}
            navigation={{
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            }}
            modules={[FreeMode, Pagination, Navigation]}
            className="mySwiper"
          >
            {ServiceData.map((item, index) => (
              <SwiperSlide key={index} className="cursor-pointer hover:opacity-80">
                <Link to={`${item.route}`} onClick={() => handleHome(item.title)}>
                  <img
                    src={`${item.image}`}
                    alt=""
                    key={index}
                  />
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Posicionando as setas de navegação */}
          <div className="swiper-button-prev absolute left-0 top-1/2 transform -translate-y-1/2 z-10 hover:scale-125 duration-100 ease-in">
            <FaCircleArrowLeft size={36} color='white' cursor='pointer'/>
          </div>
          <div className="swiper-button-next absolute right-0 top-1/2 transform -translate-y-1/2 z-10 hover:scale-125 duration-100 ease-in">
            <FaCircleArrowRight size={36} color='white' cursor='pointer'/>
          </div>
        </div>
      </div>
    </div>
  )
}
