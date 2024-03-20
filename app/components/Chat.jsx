import Image from "next/image";
import img from "../../public/images/img.svg";
import chain from "../../public/images/chain.svg";
import money from "../../public/images/money.svg";
const Chat = () => {
  const benefits = [
    { icon: chain, text: "Instantly access your answers" },
    { icon: money, text: "Early on your longevity journey" },
  ];
  return (
    <section className="py-20  bg-[#FCF3E4] text-[#24130F] ">
      <div className="w-[90%] md:[w-80%] flex flex-col  m-auto items-center">
        <h2 className="text-center text-[30px] md:text-[48px] font-[800] leading-snug ">
          Instant answers to your questions <br />
          no more scrolling through
          <span className="text-[#F9DFB9] bg-[#65372A] px-8 ml-2">
            28 Reddit threads
          </span>
        </h2>
        <p className="mt-[40px] mb-[150px] text-center text-[18px] font-[400] text-[#4A2B24]">
          Experience the power of XX, your ultimate companion on your longevity
          journey. Say goodbye to endless searching and uncertainty—XX provides
          <br />
          instant, real-time responses to all your questions, ensuring you stay
          informed and empowered every step of the way. With XX, you&apos;ll
          navigate the
          <br />
          complexities of longevity effortlessly, with clarity and confidence
        </p>
        <div className=" gap-20 space-y-20 md:flex md:space-y-0 md:w-[80%]">
          <div className="flex flex-col gap-8 ">
            <span className="text-[#FFB54D] font-[700] text-[24px]">Chat</span>
            <p className="text-[#4A2B24] text-[16px]">
              Create PoopUp messages in 2 minutes, no code required. Write about
              <br />
              the #1 problem your visitors have. Trigger an emotional response.
              Use
              <br />
              icons people recognize.
            </p>
            <ul className="flex flex-col gap-4">
              {benefits.map(({ icon, text }, index) => (
                <li
                  key={index}
                  className="flex gap-4 font-[700] text-[16px] md:text-[24px]"
                >
                  <Image src={icon} alt="icon" width={20} height={20} />
                  {text}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <Image src={img} alt="img" width={900} height={900} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Chat;
