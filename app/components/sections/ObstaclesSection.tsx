"use client";

import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination } from "swiper/modules";
import { useRef } from "react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";

export default function ObstaclesSection() {
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);

  const obstacles = [
    {
      id: 1,
      icon: "/assets/images/cards/1.svg",
      title: "ناکافی از بناتر تبلیغات",
      description:
        "برخی افراد ممکن است تصور کنند که تبلیغات هزینه‌بر است؛ اما پرشین سایت با ارائه سود بالا، این هزینه‌ها را جبران می‌کند.",
    },
    {
      id: 2,
      icon: "/assets/images/cards/2.svg",
      title: "ترس از پیچیدگی مدیریت",
      description:
        "مدیران ممکن است نگران دشواری مدیریت کمپین‌ها باشند، اما ما تمامی فرآیندها را به ساده‌ترین شکل ممکن ارائه می‌دهیم.",
    },
    {
      id: 3,
      icon: "/assets/images/cards/3.svg",
      title: "تصور زمان‌بر بودن نتایج",
      description:
        "برخی از افراد نگران این هستند که نتایج تبلیغات دیر به دست آید، در حالی که پرشین سایت با سرعت بالا، شما را در دستیابی به نتایج مطلوب یاری می‌کند..",
    },
    {
      id: 4,
      icon: "/assets/images/cards/4.svg",
      title: "ناآگاهی از تأثیر تبلیغات",
      description:
        " بسیاری از افراد نمی‌دانند که کمپین‌های تبلیغاتی چگونه می‌توانند منجر به افزایش فروش شوند؛ ما این تأثیرات را به وضوح برای شما نمایش خواهیم داد..",
    },
    {
      id: 5,
      icon: "/assets/images/cards/5.svg",
      title: "نداشتن برنامه برای رشد",
      description:
        "اگر استراتژی مشخصی برای رشد ندارید، پرشین سایت نقشه راه جامعی برای شما طراحی خواهد کرد.",
    },
    {
      id: 6,
      icon: "/assets/images/cards/6.svg",
      title: "نبود استراتژی مشخص",
      description:
        "نگران هماهنگی با اهداف کسب‌وکار خود نباشید؛ پرشین سایت برنامه‌ای متناسب با نیازهای شما طراحی خواهد کرد..",
    },
    {
      id: 7,
      icon: "/assets/images/cards/7.svg",
      title: "عدم تخصص تیم در تبلیغات",
      description:
        "اگر تیم شما تجربه کافی در زمینه تبلیغات ندارد، ما تمامی فرآیندها را به صورت حرفه‌ای و با کیفیت بالا انجام خواهیم داد..",
    },
    {
      id: 8,
      icon: "/assets/images/cards/8.svg",
      title: "دغدغه هدر رفتن بودجه",
      description:
        " اگر نگران عدم کسب نتیجه هستید، پرشین سایت با برنامه‌ریزی دقیق به شما اطمینان می‌دهد که از بودجه خود به بهترین نحو استفاده خواهید کرد..",
    },
  ];

  return (
    <section className=" bg-gradient-to-b from-[#43217C] to-[#7A3DE2] h-[25vh] pr-6 md:px-0 ">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto"
      >
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-[15px] md:text-[20px] font-iran_kalame_bold pt-[24px] text-white text-center mb-12"
        >
          موانع رایج در دریافت خدمات تولید محتوا برای کسب‌وکارها
        </motion.h2>

        <div className="relative">
          <button
            ref={prevRef}
            className="absolute -left-5 top-1/2 hidden md:flex -translate-y-1/2 z-10 w-[32px] h-[32px] bg-white border border-[#E3E3E3] rounded-[8px]   items-center justify-center hover:shadow-xl transition-shadow disabled:opacity-50"
            aria-label="Previous slide"
          >
            <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5.8025 0.318772L2.5925 3.52877L0.6225 5.48877C-0.2075 6.31877 -0.2075 7.66877 0.6225 8.49877L5.8025 13.6788C6.4825 14.3588 7.6425 13.8688 7.6425 12.9188V7.30877V1.07877C7.6425 0.118772 6.4825 -0.361228 5.8025 0.318772Z" fill="#515151"/>
            </svg>
          </button>

          <button
            ref={nextRef}
            className="absolute -right-5 top-1/2 hidden md:flex -translate-y-1/2 z-10 w-[32px] h-[32px] bg-white border border-[#E3E3E3] rounded-[8px]   items-center justify-center hover:shadow-xl transition-shadow disabled:opacity-50"
            aria-label="Next slide"
          >
            <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg" className="rotate-180">
              <path d="M5.8025 0.318772L2.5925 3.52877L0.6225 5.48877C-0.2075 6.31877 -0.2075 7.66877 0.6225 8.49877L5.8025 13.6788C6.4825 14.3588 7.6425 13.8688 7.6425 12.9188V7.30877V1.07877C7.6425 0.118772 6.4825 -0.361228 5.8025 0.318772Z" fill="#515151"/>
            </svg>
          </button>

          <Swiper
            modules={[Navigation, Autoplay, Pagination]}
            spaceBetween={20}
            slidesPerView={1.3}
            navigation={{
              prevEl: prevRef.current,
              nextEl: nextRef.current,
            }}
            onBeforeInit={(swiper: any) => {
              swiper.params.navigation.prevEl = prevRef.current;
              swiper.params.navigation.nextEl = nextRef.current;
            }}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            breakpoints={{
              480: {
                slidesPerView: 1.5,
                spaceBetween: 20,
              },
              640: {
                slidesPerView: 2.5,
                spaceBetween: 25,
              },
              768: {
                slidesPerView: 3.2,
                spaceBetween: 25,
              },
              1024: {
                slidesPerView: 4,
                spaceBetween: 30,
              },
            }}
            className="obstacles-swiper px-12 "
          >
          {obstacles.map((obstacle, index) => (
            <SwiperSlide key={obstacle.id}>
              <motion.div
                initial={{ opacity: 1, scale: 1 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-[8px] p-7 min-h-[226px] md:mx-4 -translate-y-10 border border-[#E3E3E3]  transition-shadow"
              >
                <div className="flex flex-col items-center text-center h-full">
                  <div className="mb-6">
                    <Image
                    priority
                      src={obstacle.icon}
                      alt={obstacle.title}
                      width={50}
                      height={100}
                      className=" object-contain"
                    />
                  </div>
                  <h3 className="text-[13px] font-iran_bold text-[#303030] mb-2">
                    {obstacle.title}
                  </h3>
                  <p className="text-[#303030] font-iran_reg leading-4 text-[13px]">
                    {obstacle.description}
                  </p>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
       </div>
      </motion.div>
    </section>
  );
}
