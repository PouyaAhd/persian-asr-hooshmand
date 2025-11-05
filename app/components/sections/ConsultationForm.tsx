'use client';

import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { Button, Input, MultiSelect } from '../ui';
import { SERVICES } from '@/constants';
import type { FormData } from '@/types';

export default function ConsultationForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>();

  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async (data: FormData) => {
    if (selectedServices.length === 0) {
      return;
    }

    setIsSubmitting(true);

    await new Promise((resolve) => setTimeout(resolve, 2000));

    console.log('فرم با موفقیت ارسال شد', { ...data, services: selectedServices });
    
    setIsSubmitting(false);
    reset();
    setSelectedServices([]);
  };

  return (
    <section className="bg-gray-50 py-16 mt-[60px] px-6 md:px-0 ">
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
          className="text-[18px] pt-[80px] md:text-[20px] font-iran_bold text-[#141414] text-center mb-4"
        >
          فرم دریافت مشاوره
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center text-[14px] md:text-[16px] font-iran_bold text-[#303030] mb-5"
        >
          برای ارتقای بیزینس خود به دنبال فرصتی نایب هستید؟ فرم زیر را تکمیل کنید تا مشاوران ما به صورت کاملاً رایگان شماره راهنمایی کنند.
        </motion.p>

        <motion.form
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          onSubmit={handleSubmit(onSubmit)}
          className="bg-white rounded-2xl shadow-lg p-8"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <Input
              label="نام و نام خانوادگی خود را وارد کنید"
              placeholder="نام و نام خانوادگی"
              
              rightIcon={
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12.12 12.78C12.05 12.77 11.96 12.77 11.88 12.78C10.12 12.72 8.71997 11.28 8.71997 9.50998C8.71997 7.69998 10.18 6.22998 12 6.22998C13.81 6.22998 15.28 7.69998 15.28 9.50998C15.27 11.28 13.88 12.72 12.12 12.78Z" stroke="#E13333" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M18.74 19.3801C16.96 21.0101 14.6 22.0001 12 22.0001C9.40001 22.0001 7.04001 21.0101 5.26001 19.3801C5.36001 18.4401 5.96001 17.5201 7.03001 16.8001C9.77001 14.9801 14.25 14.9801 16.97 16.8001C18.04 17.5201 18.64 18.4401 18.74 19.3801Z" stroke="#E13333" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#E13333" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                
              }
              error={errors.name?.message}
              {...register('name', {
                required: 'نام الزامی است',
              })}
            />

            <Input
              type="email"
              label="آدرس ایمیل خود را وارد کنید"
              placeholder="مثال: email@mail.com"
              
              rightIcon={
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M17 20.5H7C4 20.5 2 19 2 15.5V8.5C2 5 4 3.5 7 3.5H17C20 3.5 22 5 22 8.5V15.5C22 19 20 20.5 17 20.5Z" stroke="#E13333" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M17 9L13.87 11.5C12.84 12.32 11.15 12.32 10.12 11.5L7 9" stroke="#E13333" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                
              }
              error={errors.email?.message}
              {...register('email', {
                required: 'ایمیل الزامی است',
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: 'ایمیل نامعتبر است',
                },
              })}
            />

            <Input
              type="tel"
              label="شماره تماس خود را وارد کنید"
              placeholder="مثال:09121234567"
              
              rightIcon={
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M21.97 18.33C21.97 18.69 21.89 19.06 21.72 19.42C21.55 19.78 21.33 20.12 21.04 20.44C20.55 20.98 20.01 21.37 19.4 21.62C18.8 21.87 18.15 22 17.45 22C16.43 22 15.34 21.76 14.19 21.27C13.04 20.78 11.89 20.12 10.75 19.29C9.6 18.45 8.51 17.52 7.47 16.49C6.44 15.45 5.51 14.36 4.68 13.22C3.86 12.08 3.2 10.94 2.72 9.81C2.24 8.67 2 7.58 2 6.54C2 5.86 2.12 5.21 2.36 4.61C2.6 4 2.98 3.44 3.51 2.94C4.15 2.31 4.85 2 5.59 2C5.87 2 6.15 2.06 6.4 2.18C6.66 2.3 6.89 2.48 7.07 2.74L9.39 6.01C9.57 6.26 9.7 6.49 9.79 6.71C9.88 6.92 9.93 7.13 9.93 7.32C9.93 7.56 9.86 7.8 9.72 8.03C9.59 8.26 9.4 8.5 9.16 8.74L8.4 9.53C8.29 9.64 8.24 9.77 8.24 9.93C8.24 10.01 8.25 10.08 8.27 10.16C8.3 10.24 8.33 10.3 8.35 10.36C8.53 10.69 8.84 11.12 9.28 11.64C9.73 12.16 10.21 12.69 10.73 13.22C11.27 13.75 11.79 14.24 12.32 14.69C12.84 15.13 13.27 15.43 13.61 15.61C13.66 15.63 13.72 15.66 13.79 15.69C13.87 15.72 13.95 15.73 14.04 15.73C14.21 15.73 14.34 15.67 14.45 15.56L15.21 14.81C15.46 14.56 15.7 14.37 15.93 14.25C16.16 14.11 16.39 14.04 16.64 14.04C16.83 14.04 17.03 14.08 17.25 14.17C17.47 14.26 17.7 14.39 17.95 14.56L21.26 16.91C21.52 17.09 21.7 17.3 21.81 17.55C21.91 17.8 21.97 18.05 21.97 18.33Z" stroke="#E13333" strokeWidth="1.5" strokeMiterlimit="10"/>
                </svg>
                
              }
              error={errors.phone?.message}
              {...register('phone', {
                required: 'شماره تماس الزامی است',
                pattern: {
                  value: /^[0-9]{11}$/,
                  message: 'شماره تماس باید 11 رقم باشد',
                },
              })}
            />
          </div>

          <div className="mb-6">
            <MultiSelect
              label="نوع سرویس(های) مورد نظر خود را انتخاب کنید."
              
              options={SERVICES.map(service => ({
                value: service,
                label: service,
              }))}
              value={selectedServices}
              onChange={setSelectedServices}
              error={selectedServices.length === 0 && errors.name ? 'لطفاً حداقل یک سرویس انتخاب کنید' : undefined}
            />
          </div>

          <div className="mb-6">
            <label className="block text-[#303030] mb-2 text-right font-iran_med text-[14px]">
              در مورد درخواست خود برای ما بنویسید.
            </label>
            <textarea
              {...register('message', {
                required: 'توضیحات الزامی است',
              })}
              placeholder="توضیحات (اختیاری)"
              rows={5}
              className={ `${errors.message ? 'border-red-500' : 'border-[#E3E3E3]'} w-full px-4 py-3 border border-[#E3E3E3] font-iran_reg text-[12px] rounded-[16px] bg-[#FCFCFC] focus:outline-none focus:ring-2 focus:ring-[#6B46C1] text-right resize-none`}
            ></textarea>
            {errors.message && (
              <p className="text-red-500 b text-sm mt-1 text-right font-iran_reg text-[12px]">{errors.message.message}</p>
            )}
          </div>

          <div className='flex justify-center'> <Button 
          className='max-w-[386px]  text-[16px] bg-[#303030] rounded-[16px] '
            type="submit"
            variant="secondary"
            size="sm"
            fullWidth
            isLoading={isSubmitting}
            disabled={isSubmitting}
          >
            ثبت درخواست
          </Button></div>
         
        </motion.form>
      </motion.div>
    </section>
  );
}

