import { Button } from "@/components/ui/button";
import { Icons } from "@/components/ui/icons";
import { TextGenerateEffect } from "@/components/ui/type-generator-effect";
import AssetPath from "@/lib/asset-path";
import Image from "next/image";
import * as motion from "@/components/ui/motion";
import WordPullUp from "@/components/magicui/word-pull-up";

const LandingHeroSection = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
      <div className="flex flex-col gap-6 h-full justify-center mt-10 lg:-mt-14 2xl:-mt-16">
        <div className="flex flex-col gap-3">
          <motion.div
            className="text-center md:text-start"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
          >
            <TextGenerateEffect words="Bersiap untuk" className="text-black" />
            <TextGenerateEffect words="Keluarga Baru" />
          </motion.div>
        </div>

        <div className="-mt-3">
          <WordPullUp
            className="text-lg lg:text-2xl font-light text-muted-foreground text-center lg:text-left"
            words={`Dedikasi dalam merawat dan melatih. \n Anjing Kintamani siap untuk rumah baru.`}
          />
        </div>

        <motion.div
          className="flex justify-center lg:justify-start"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 2 }}
        >
          <Button size="lg" className="w-fit">
            Adopsi Sekarang <Icons.arrowRight className="h-4 w-4 ml-1" />
          </Button>
        </motion.div>
      </div>
      <motion.div
        className="w-full flex justify-center p-10"
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <Image
          src={AssetPath.getImagePath("hero-1.png")}
          width={720}
          height={720}
          style={{
            objectFit: "cover",
          }}
          loading="lazy"
          alt="Hero Image"
        />
      </motion.div>
    </div>
  );
};

export default LandingHeroSection;
