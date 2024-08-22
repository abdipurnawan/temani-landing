"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import { Icons } from "@/components/ui/icons";
import AssetPath from "@/lib/asset-path";
import Image from "next/image";
import * as motion from "@/components/ui/motion";
import { cn } from "@/lib/utils";
import { Card } from "@/components/ui/card";
import { Stepper, StepperItem } from "@/components/ui/stepper";

type HowToAdoptItemContentProps = {
  imagePath: string;
  description: string;
};

const HowToAdoptItemContent = ({
  imagePath,
  description,
}: HowToAdoptItemContentProps) => {
  return (
    <div className="flex flex-col gap-3">
      <div className="flex justify-center w-full">
        <Image
          src={imagePath}
          alt="How to adopt item"
          width={500}
          height={500}
          className="w-full"
          style={{ objectFit: "cover" }}
        />
      </div>
      <p className="text-left lg:text-center font-extralight text-base lg:text-lg leading-6 lg:leading-7">
        {description}
      </p>
    </div>
  );
};

const LandingHowToAdoptSection = () => {
  const steps: StepperItem[] = [
    {
      index: 1,
      title: "Daftar Antrian",
      content: (
        <HowToAdoptItemContent
          imagePath={AssetPath.getImagePath(`stepper-1.png`)}
          description="Mulai proses adopsi dengan mengisi formulir pendaftaran. Isi data diri, informasi rumah, dan preferensi anjing yang diinginkan."
        />
      ),
    },
    {
      index: 2,
      title: "Proses Review",
      content: (
        <HowToAdoptItemContent
          imagePath={AssetPath.getImagePath(`stepper-2.png`)}
          description="Tim kami akan melakukan penilaian mendalam dan mencocokkan kebutuhan hingga gaya hidup Anda dengan anjing yang Anda pilih."
        />
      ),
    },
    {
      index: 3,
      title: "Pengesahan",
      content: (
        <HowToAdoptItemContent
          imagePath={AssetPath.getImagePath(`stepper-3.png`)}
          description="Setelah review selesai, kami akan menghubungi Anda untuk konfirmasi. Mencakup persetujuan akhir dan tanda tangan dokumen adopsi resmi."
        />
      ),
    },
    {
      index: 4,
      title: "Selesai",
      content: (
        <HowToAdoptItemContent
          imagePath={AssetPath.getImagePath(`stepper-4.png`)}
          description="Proses adopsi selesai! Sahabat baru Anda siap dibawa pulang. Kami juga akan memberikan panduan awal untuk masa penyesuaian di rumah."
        />
      ),
    }
  ];

  return (
    <div className="custom-container py-10 lg:py-20">
      <div className="flex flex-col items-center gap-3">
        <motion.div
          className="text-center lg:text-start"
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <div className="flex flex-col text-center gap-3">
            <h2 className="text-4xl lg:text-5xl font-bold tracking-tight">
              Bagaimana cara untuk{" "}
              <span className="text-primary">mulai mengadopsi?</span>
            </h2>
            <h4 className="text-base lg:text-xl font-light text-muted-foreground text-center">
              Langkah mudah untuk menemukan sahabat sejati Anda.
            </h4>
          </div>
        </motion.div>
      </div>

      <motion.div
        className="flex justify-center"
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.2 }}
      >
        <Card className="border-none p-10 shadow-lg mt-5 flex flex-col gap-5 items-center  w-full lg:w-2/3">
          <Stepper items={steps} />
        </Card>
      </motion.div>
    </div>
  );
};

export default LandingHowToAdoptSection;
