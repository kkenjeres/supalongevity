import React from "react";
import Image from "next/image";
import upline from "../../public/images/upline.svg";
import downline from "../../public/images/downline.svg";
import measurement from "../../public/images/measurement.svg";
import nutrition from "../../public/images/nutrition.svg";
import pill from "../../public/images/pill.svg";
import lifestyle from "../../public/images/lifestyle.svg";

const guideSteps = [
  { icon: measurement, label: "Measurement", line: null },
  { icon: nutrition, label: "Nutrition", line: downline },
  { icon: pill, label: "Supplements", line: upline },
  { icon: lifestyle, label: "Lifestyle", line: downline },
];

const LongevityGuide = () => {
  return (
    <section className="py-40 flex flex-col  bg-[#4B2484] text-[#F9DFB9]">
      <div className="w-[90%] md:[w-80%] m-auto">
        <h2 className="text-center text-[30px] md:text-[48px] font-bold leading-tight">
          Finding your way through the maze of longevity—
          <br />
          Who can you trust?
        </h2>
        <p className="mt-24 mb-14 text-center text-[18px]  leading-relaxed">
          Longevity Protocol is a multi-faceted approach that optimizes
          <br />
          your body&apos;s natural healing mechanisms and balance.
        </p>
        <div className="md:flex md:w-[60%] m-auto">
          {guideSteps.map((step, index) => (
            <React.Fragment key={index}>
              {step.line && (
                <div className="flex justify-center items-center">
                  <Image src={step.line} alt="line" width={50} height={50} />
                </div>
              )}
              <div className="flex flex-col m-auto items-center gap-2">
                <Image
                  src={step.icon}
                  alt={step.label}
                  width={50}
                  height={50}
                />
                <strong className="text-[16px] font-semibold">
                  {step.label}
                </strong>
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LongevityGuide;
