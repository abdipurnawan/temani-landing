import { Button } from "@/components/ui/button";
import { Icons } from "@/components/ui/icons";
import AssetPath from "@/lib/asset-path";
import Image from "next/image";
import * as motion from "@/components/ui/motion";
import NumberTicker from "@/components/ui/number-ticker";

const LandingAboutSection = () => {
  return (
    <div className="custom-container grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center py-10 lg:py-20">
      <div className="flex flex-col gap-6 h-full justify-center ">
        <div className="flex flex-col gap-3">
          <motion.div
            className="text-center lg:text-start"
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <div className="flex flex-col gap-3">
              <h2 className="text-5xl font-bold tracking-tight text-left">
                Tentang <span className="text-primary">temani</span>
              </h2>
              <h4 className="text-base lg:text-xl font-light text-muted-foreground text-left">
                Di sini, sahabat sejati dilahirkan. Temukan cinta tanpa syarat
                dengan Anjing Kintamani.
              </h4>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="flex justify-start"
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <Button
            size="lg"
            variant="outline"
            className="w-fit font-light border-black px-3 hover:text-white hover:bg-primary hover:border-primary"
          >
            Baca Selengkapnya <Icons.arrowRight className="h-4 w-4 ml-1" />
          </Button>
        </motion.div>

        <motion.div
          className="grid grid-cols-2 gap-3 mt-5"
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <div className="relative flex flex-col gap-3 border-l-[1px] border-primary py-8 pl-4 overflow-hidden">
            <motion.div
              initial={{ opacity: 0, x: "-100%" }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              <NumberTicker
                value={250}
                className="text-5xl font-bold tracking-tight text-primary"
                suffix="+"
              />
              <h4 className="text-base lg:text-xl font-light text-black text-center lg:text-left">
                Anjing dalam penangkaran
              </h4>
            </motion.div>
          </div>

          <div className="relative flex flex-col gap-3 border-l-[1px] border-primary py-8 pl-4 overflow-hidden">
            <motion.div
              initial={{ opacity: 0, x: "-100%" }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              <NumberTicker
                value={50}
                className="text-5xl font-bold tracking-tight text-primary"
                suffix="+"
              />
              <h4 className="text-base lg:text-xl font-light text-black text-center lg:text-left">
                Anjing siap untuk diadopsi
              </h4>
            </motion.div>
          </div>
        </motion.div>
      </div>

      <motion.div
        className="w-full lg:order-first"
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Image
          src={AssetPath.getImagePath("about-1.png")}
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

export default LandingAboutSection;
