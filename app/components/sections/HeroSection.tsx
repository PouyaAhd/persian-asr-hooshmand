'use client';

import { motion } from 'framer-motion';
import Button from '@/components/ui/Button';
import React from 'react';
import Image from 'next/image';

export default function HeroSection() {
  return (
    <section className="bg-white flex justify-center items-center py-8 px-4 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="order-2 lg:order-1 w-full text-justify md:w-[80%] md:text-right flex justify-center flex-col items-center md:items-start px-5 md:px-0"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-[18px] md:text-[24px] font-iran_kalame_bold text-[#141414] mb-6"
            >
              کمپین‌های بازاریابی و تبلیغاتی
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-[14px] md:text-[18px]  font-iran_reg text-[#303030] mb-4 leading-relaxed"
            >
              آیا به دنبال راهی مطمئن برای دیده شدن برندتان هستید؟ مشاوره رایگان ما به شما کمک می‌کند تا مسیر موفقیت را پیدا کنید. همین حالا قدم اول را بردارید!
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
              className="text-[12px] font-iran_reg text-[#515151] mb-8"
            >
              جهت دریافت مشاوره رایگان با شماره زیر تماس بگیرید
            </motion.p>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <Button className='p-4' variant="primary" size="lg">
                دریافت مشاوره
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="order-1 lg:order-2 relative"
          >
            <div className="relative w-full  flex items-center justify-center">
              <Image 
                priority
                src="/assets/images/hero.svg" 
                alt="Hero Illustration" 
                className="w-full h-full object-contain"
                width={800}
                height={500}
                loading="eager"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
