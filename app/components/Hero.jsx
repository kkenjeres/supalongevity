import { FaCheck } from "react-icons/fa6";
import Button from "./ui/Button";
const features = [
  "End the endless search with our trusted model",
  "Deliver immediate answers at your fingertips",
  "Your buddy for longevity",
];

const Hero = () => {
  return (
    <section className="min-h-screen py-40 md:py-0 relative flex  bg-gradient-to-br from-[#4B2484] to-[#7B4DC1] text-white">
      <div className="w-[90%] md:[w-80%] m-auto flex flex-col items-center">
        <h1 className="text-center text-[30px] md:text-[60px] font-extrabold leading-tight">
          Unlock Longevity: Your AI Assistant for
          <br /> Blueprint and Biohacking Protocols
        </h1>
        <p className="mt-24 mb-14 text-center text-[18px] font-light leading-relaxed">
          Discover a comprehensive solution for your longevity journey: our
          application provides
          <br /> instant access to all the answers you seek, delivering the best
          protocols, resources, and
          <br /> support to optimize your health.
        </p>
        <ul className=" mb-14 space-y-4 text-[16px]">
          {features.map((feature, index) => (
            <li key={index} className="flex gap-6 items-center">
              <FaCheck className="text-[#FFD375]" />
              {feature}
            </li>
          ))}
        </ul>
        <Button />
      </div>
    </section>
  );
};

export default Hero;
