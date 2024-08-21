"use client";
import { Logo } from "@/components/ui/logo";
import SocialMediaItem from "@/components/ui/social-media-item";
import { motion } from "framer-motion";

const LandingFooter = () => {
  return (
    <div className="pt-10 bottom-0">
      <div className="custom-container inset-0">
        <div className="grid grid-cols-1 lg:grid-cols-6 gap-10">
          <motion.div
            className="col-span-3 flex flex-col gap-5"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              duration: 1.5,
              delay: 0,
              ease: [0, 0.71, 0.2, 1.01],
            }}
          >
            <Logo />
            <small className="flex-none text-sm lg:text-base text-muted-foreground font-light leading-5 lg:leading-6">
              Jl. Raya Bedugul No.23 <br />
              Kabupaten Tabanan, Bali.
            </small>

            <small className="flex-none text-sm lg:text-base text-muted-foreground font-light leading-5 lg:leading-6">
              temani@baliprov.go.id
            </small>

            <small className="flex-none text-sm lg:text-base text-muted-foreground font-light leading-5 lg:leading-6">
              +62 361 278777
            </small>
            <div className="flex gap-3">
              <SocialMediaItem icon="twitter" href="https://twitter.com" />
              <SocialMediaItem icon="facebook" href="https://facebook.com" />
              <SocialMediaItem icon="instagram" href="https://instagram.com" />
            </div>
          </motion.div>
        </div>

        {/* copyright */}
        <motion.div
          className="mt-3"
          initial={{ opacity: 0, y: -100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 1,
            delay: 0,
            ease: [0, 0.71, 0.2, 1.01],
          }}
        >
          <div className="border-[0.5px] border-gray-300"></div>
          <div className="py-6 flex justify-center items-center">
            <p className="text-xs lg:text-sm text-muted-foreground">
              © {new Date().getFullYear()} Temani. All Rights Reserved by SPBE
              Diskominfos Provinsi Bali
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default LandingFooter;
