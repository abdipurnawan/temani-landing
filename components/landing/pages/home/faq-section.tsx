"use client";

import * as React from "react";
import * as motion from "@/components/ui/motion";
import { AnimatePresence } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const LandingFAQSection = () => {
  const faqs = [
    {
      id: 1,
      title: "Apakah ada biaya adopsi yang harus dibayar?",
      description:
        "Ya, ada biaya adopsi yang dikenakan. Biaya ini digunakan untuk menutupi biaya perawatan, pelatihan, dan vaksinasi anjing selama berada di penangkaran. Rincian biaya akan diberikan saat proses pengesahan.",
    },
    {
      id: 2,
      title: "Apakah anjing yang diadopsi sudah divaksinasi dan disterilkan?",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente esse nemo nihil quisquam ducimus quo consequatur accusamus molestiae maiores eos impedit, veniam asperiores, incidunt ut?",
    },
    {
      id: 3,
      title:
        "Bisakah saya mengembalikan anjing jika tidak cocok dengan keluarga saya?",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente esse nemo nihil quisquam ducimus quo consequatur accusamus molestiae maiores eos impedit, veniam asperiores, incidunt ut?",
    },
    {
      id: 4,
      title: "Apa yang harus saya siapkan sebelum membawa anjing pulang?",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente esse nemo nihil quisquam ducimus quo consequatur accusamus molestiae maiores eos impedit, veniam asperiores, incidunt ut?",
    },
    {
      id: 5,
      title: "Bagaimana jika saya memiliki pertanyaan setelah adopsi selesai?",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente esse nemo nihil quisquam ducimus quo consequatur accusamus molestiae maiores eos impedit, veniam asperiores, incidunt ut?",
    },
  ];

  let [hoveredIndex, setHoveredIndex] = React.useState<number | null>(null);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="bg-primary relative overflow-hidden"
    >
      <div className="hidden lg:block absolute inset-y-0 left-0 w-[45%] bg-[url('/assets/svg/dog-footprint-pattern.svg')] bg-no-repeat bg-left bg-contain -ml-16"></div>
      <div className="hidden lg:block absolute inset-y-0 right-0 w-[45%] bg-[url('/assets/svg/question-mark-pattern.svg')] bg-no-repeat bg-right bg-contain -mr-20 -mb-48"></div>

      <div className="custom-container h-full flex flex-col justify-between gap-10 lg:gap-16 py-10 lg:py-24 lg:pt-16">
        <div className="flex flex-col gap-5 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <h4 className="text-base lg:text-xl font-normal text-white">FAQ</h4>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.2 }}
          >
            <h2 className="text-4xl lg:text-5xl font-semibold leading-tight text-white">
              Pertanyaan <br /> Seputar Temani
            </h2>
          </motion.div>
        </div>

        <div className="flex justify-center">
          <Accordion
            type="single"
            collapsible
            defaultValue="1"
            className="w-full lg:w-1/2"
          >
            <AnimatePresence>
              {faqs.map((faq, idx) => {
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: idx === 0 ? 0 : 0.2 }}
                  >
                    <AccordionItem value={faq.id?.toString() ?? ""} key={idx}>
                      <AccordionTrigger>{faq.title}</AccordionTrigger>
                      <AccordionContent>{faq.description}</AccordionContent>
                    </AccordionItem>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </Accordion>
        </div>
      </div>
    </motion.div>
  );
};

export default LandingFAQSection;
