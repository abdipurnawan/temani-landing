"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import { Icons } from "@/components/ui/icons";
import AssetPath from "@/lib/asset-path";
import Image from "next/image";
import * as motion from "@/components/ui/motion";
import { cn } from "@/lib/utils";
import { Card } from "@/components/ui/card";

const LandingHowToAdoptSection = () => {
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
            <h2 className="text-5xl font-bold tracking-tight">
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
          className="text-center lg:text-start"
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
        >
      <Card className="border-none p-10 shadow-lg mt-5 flex flex-col gap-5 items-center">
        <h2 className="text-5xl font-bold tracking-tight">
          Ini nanti stepper <span className="text-primary">Sesuai Figma</span>
        </h2>
        <h2 className="text-5xl font-bold tracking-tight">
          Ini nanti stepper <span className="text-primary">Sesuai Figma</span>
        </h2>
        <h2 className="text-5xl font-bold tracking-tight">
          Ini nanti stepper <span className="text-primary">Sesuai Figma</span>
        </h2>
        <h2 className="text-5xl font-bold tracking-tight">
          Ini nanti stepper <span className="text-primary">Sesuai Figma</span>
        </h2>
        <h2 className="text-5xl font-bold tracking-tight">
          Ini nanti stepper <span className="text-primary">Sesuai Figma</span>
        </h2>
        <h2 className="text-5xl font-bold tracking-tight">
          Ini nanti stepper <span className="text-primary">Sesuai Figma</span>
        </h2>
        <h2 className="text-5xl font-bold tracking-tight">
          Ini nanti stepper <span className="text-primary">Sesuai Figma</span>
        </h2>
        <h2 className="text-5xl font-bold tracking-tight">
          Ini nanti stepper <span className="text-primary">Sesuai Figma</span>
        </h2>
      </Card>
      </motion.div>
    </div>
  );
};

export default LandingHowToAdoptSection;
