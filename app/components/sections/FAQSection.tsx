'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: 'مراحل طراحی وب سایت چیست؟',
      answer:
        'طراحی وب سایت شامل مراحل مختلفی است از جمله: تحلیل نیازها، طراحی UI/UX، توسعه فرانت‌اند و بک‌اند، تست و راه‌اندازی. هر مرحله با دقت انجام می‌شود تا بهترین نتیجه حاصل شود.',
    },
    {
      question: 'مراحل طراحی وب سایت چیست؟',
      answer:
        'فرآیند طراحی شامل مشاوره اولیه، ارائه پیشنهاد، طراحی مفهومی، توسعه، تست و تحویل نهایی است. ما در تمام مراحل با شما در ارتباط هستیم.',
    },
    {
      question: 'مراحل طراحی وب سایت چیست؟',
      answer:
        'زمان طراحی وب سایت بستگی به پیچیدگی پروژه دارد. یک وب سایت ساده ممکن است 2-4 هفته و یک وب سایت پیچیده 2-3 ماه زمان ببرد.',
    },
    {
      question: 'مراحل طراحی وب سایت چیست؟',
      answer:
        'هزینه طراحی وب سایت بسته به ویژگی‌ها، تعداد صفحات و پیچیدگی پروژه متغیر است. ما پس از بررسی نیازهای شما، قیمت نهایی را اعلام می‌کنیم.',
    },
    {
      question: 'مراحل طراحی وب سایت چیست؟',
      answer:
        'بله، ما خدمات پشتیبانی و نگهداری وب سایت را ارائه می‌دهیم تا اطمینان حاصل کنید که وب سایت شما همیشه به‌روز و ایمن است.',
    },
  ];

  return (
    <section className="bg-white max-w-7xl mx-auto py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1  lg:grid-cols-3 md:gap-12 gap-6 items-start">
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-right"
          >
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className=" text-[18px] md:text-[32px] text-center md:text-right font-bold mb-6"
            >
              FAQ
            </motion.h2>
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-[16px] font-iran_bold text-center md:text-right md:text-[24px] font-bold text-[#303030] mb-4"
            >
              سوالات متداولی که از ما می‌پرسید
            </motion.h3>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-[#303030] text-center md:text-right font-iran_bold hidden md:block text-[16px] leading-relaxed"
            >
              سوالات متداولی که ممکن است نیاز شما نیز باشد در اینجا پاسخ داده شده اند:
            </motion.p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="space-y-4 md:col-span-2"
          >
            {faqs.map((faq, index) => (
              <motion.div
              style={{direction:"ltr"}}
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="border border-gray-200 bg-[#FCFCFC] rounded-lg overflow-hidden"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full px-6 py-4 flex items-center justify-between text-right hover:bg-gray-50 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <motion.div
                      animate={{ rotate: openIndex === index ? 45 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="w-8 h-8 flex items-center justify-center rounded-full border-2 border-gray-300"
                    >
                      <svg
                        className="w-4 h-4 text-gray-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 4v16m8-8H4"
                        />
                      </svg>
                    </motion.div>
                  </div>
                  <span className="font-semibold text-[12px] md:text-[16px] text-gray-900">{faq.question}</span>
                </button>

                <motion.div
                  initial={false}
                  animate={{
                    height: openIndex === index ? 'auto' : 0,
                    opacity: openIndex === index ? 1 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="px-6 pb-4 text-[12px] md:text-[16px] text-gray-600 leading-relaxed text-right">
                    {faq.answer}
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

