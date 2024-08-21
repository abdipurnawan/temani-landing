"use client";

import * as React from "react";
import AssetPath from "@/lib/asset-path";
import Image from "next/image";
import * as motion from "@/components/ui/motion";
import { Card } from "@/components/ui/card";
import { AnimatePresence } from "framer-motion";

const LandingServiceSection = () => {
  const services = [
    {
      title: "Mengembangbiakkan",
      description: "Menyiapkan Anjing Kintamani untuk Rumah yang Penuh Cinta.",
    },
    {
      title: "Merawat & Memelihara",
      description:
        "Mengasah Keterampilan Anjing untuk Kehidupan yang Lebih Baik.",
    },
    {
      title: "Siap untuk Adopsi",
      description: "Dedikasi dalam Merawat. Siap untuk Rumah Baru.",
    },
  ];

  let [hoveredIndex, setHoveredIndex] = React.useState<number | null>(null);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="bg-primary"
    >
      <div className="custom-container py-8 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-12">
          {services.map((service, idx) => {
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: idx * 0.2 }}
                onMouseEnter={() => setHoveredIndex(idx)}
                onMouseLeave={() => setHoveredIndex(null)}
                className="relative group  block p-2 h-full w-full"
              >
                <AnimatePresence>
                  {hoveredIndex === idx && (
                    <motion.span
                      className="absolute inset-0 h-full w-full bg-[#FDBD00] block rounded-3xl"
                      layoutId="hoverBackground"
                      initial={{ opacity: 0 }}
                      animate={{
                        opacity: 1,
                        transition: { duration: 0.15 },
                      }}
                      exit={{
                        opacity: 0,
                        transition: { duration: 0.15, delay: 0.2 },
                      }}
                    />
                  )}
                </AnimatePresence>
                <Card className="relative p-4 border-none">
                  <Image
                    className="absolute top-0 right-0 rounded-tr-2xl"
                    src={AssetPath.getSvgPath(`dog-footprint.svg`)}
                    width={40}
                    height={40}
                    alt={service.title}
                  />
                  {/* </div> */}
                  <div className="flex flex-col gap-4">
                    <Image
                      src={AssetPath.getSvgPath(`service-${idx + 1}.svg`)}
                      width={40}
                      height={40}
                      alt={service.title}
                    />
                    <div className="flex flex-col gap-2">
                      <h4 className="text-xl font-semibold">{service.title}</h4>
                      <p className="leading-6 text-muted-foreground">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
};

export default LandingServiceSection;
