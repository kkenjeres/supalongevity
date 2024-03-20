import Button from "./ui/Button.jsx";
const Contact = () => {
  return (
    <section className="bg-[#4B2484]  py-20">
      <div className="w-[90%] md:w-[80] m-auto flex flex-col bg-[#FCF3E4] gap-10 rounded-2xl p-10   items-center ">
        <h2 className="font-[900] text-[30px] md:text-[48px] text-[#24130F] text-center">
          Combat aging today! Join the fight against aging with us.
        </h2>
        <span className="text-[18px] text-center text-[#4A2B24]">
          Don&apos;t drown in the sea of information! Gain efficient
          <br />
          access to concise insights with us.
        </span>
        <Button />
      </div>
    </section>
  );
};

export default Contact;
