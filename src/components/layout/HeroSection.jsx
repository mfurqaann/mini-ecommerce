import { Button } from "@/components/ui/button";
import PrimaryButton from "./PrimaryButton";

export default function HeroSection() {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-8 px-4">
        {/* Left content */}
        <div>
          <h1 className="text-4xl font-extrabold mb-4">
            Discover Our <span className="text-orange-600">Products</span>
          </h1>
          <p className="text-gray-600 mb-6">
            Shop our wide range of high-quality products and find what you're
            looking for.
          </p>
          <PrimaryButton size="lg">Shop Now</PrimaryButton>
        </div>

        {/* Right image */}
        <div className="flex justify-center">
          <img
            src="https://edit.voila.id/wp-content/uploads/s/files/1/0516/0760/1336/files/0._Kenali_Macam-macam_Style_Fashion_untuk_Gaya_Berbusana_yang_Classy_1000x1000.jpg"
            alt="Hero Image"
            className="rounded-xl shadow-md"
          />
        </div>
      </div>
    </section>
  );
}
