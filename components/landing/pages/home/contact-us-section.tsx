import { Button } from "@/components/ui/button";
import { Icons } from "@/components/ui/icons";
import AssetPath from "@/lib/asset-path";
import Image from "next/image";
import * as motion from "@/components/ui/motion";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-label";
import { Textarea } from "@/components/ui/textarea";

const ContactUsSection = () => {
  return (
    <div className="custom-container grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 py-10 lg:py-20">
      <div className="flex flex-col gap-6 h-full justify-center mt-3">
        <div className="flex flex-col gap-3">
          <motion.div
            className="text-center lg:text-start"
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <h4 className="text-base lg:text-xl font-normal text-muted-foreground text-left">
              Tentang Kami
            </h4>
            <div className="flex flex-col gap-8 mt-5">
              <h2 className="text-4xl lg:text-5xl font-semibold leading-tight text-left">
                Taman <br /> Penangkaran <br /> Anjing Kintamani
              </h2>

              <div className="flex flex-col gap-5">
                <div className="flex gap-3">
                  <Icons.mapPin className="h-8 w-8" />
                  <div className="flex flex-col gap-1">
                    <h4 className="text-base lg:text-xl font-semibold text-left">
                      Alamat
                    </h4>
                    <h4 className="text-base font-normal text-muted-foreground text-left">
                      Jl. Raya Bedugul No.23 Kabupaten Tabanan, Bali.
                    </h4>
                  </div>
                </div>

                <div className="flex gap-3">
                  <Icons.mailCheck className="h-8 w-8" />
                  <div className="flex flex-col gap-1">
                    <h4 className="text-base lg:text-xl font-semibold text-left">
                      Email
                    </h4>
                    <h4 className="text-base font-normal text-muted-foreground text-left">
                      temani@baliprov.go.id
                    </h4>
                  </div>
                </div>

                <div className="flex gap-3">
                  <Icons.phone className="h-8 w-8" />
                  <div className="flex flex-col gap-1">
                    <h4 className="text-base lg:text-xl font-semibold text-left">
                      Telepon
                    </h4>
                    <h4 className="text-base font-normal text-muted-foreground text-left">
                      +62 361 278777
                    </h4>
                  </div>
                </div>

                <div className="flex gap-3">
                  <Icons.instagram className="h-8 w-8" />
                  <div className="flex flex-col gap-1">
                    <h4 className="text-base lg:text-xl font-semibold text-left">
                      Instagram
                    </h4>
                    <h4 className="text-base font-normal text-muted-foreground text-left">
                      temani_bali
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="">
        <motion.div
          className="-start"
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
        >
          <Card className="border-none shadow-2xl p-6">
            <h4 className="text-base lg:text-xl font-normal text-muted-foreground text-left">
              Kontak
            </h4>

            <div className="flex flex-col gap-8 mt-5">
              <h2 className="text-4xl lg:text-5xl font-semibold leading-tight">
                Kirim <br /> Kritik & Saran
              </h2>
            </div>

            <div className="space-y-5 mt-5 text-left">
            <div className="flex flex-col gap-1">
              <Label htmlFor="name">Nama</Label>
              <Input id="name" type="text" name="name" placeholder="Masukkan nama Anda" />
            </div>

            <div className="flex flex-col gap-1">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="text" name="email" placeholder="Masukkan email Anda" />
            </div>

            <div className="flex flex-col gap-1">
              <Label htmlFor="message">Pesan</Label>
              <Textarea placeholder="Masukkan kritik atau saran Anda" />

            </div>

            <Button className="w-full font-light">
              Kirim Pesan <Icons.send className="h-4 w-4 ml-2" />
            </Button>
            </div>
          </Card>
        </motion.div>
      </div>
    </div>
  );
};

export default ContactUsSection;
