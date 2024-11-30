

import SharedButton from "../libs/SharedButton";

import { LuArrowUpRightSquare } from "react-icons/lu";


const Hero = () => {
  return (
    <div className='bg-[url("/heroImg.png")] bg-no-repeat bg-cover sm:px-8 px-4 w-full sm:py-[108px] pb-[68px] pt-10 space-y-[9px]'>
      <h3
        
        className="text-primary font-Montserrat sm:text-3xl text-base sm:leading-7 leading-4 text-center md:text-start "
      >
        AI SDRs (aiDRs)
      </h3>
      <h1 className="font-Montserrat font-bold sm:text-[60px] text-[38px] text-white sm:max-w-md sm:leading-[76px] leading-[40px] sm:text-start text-center ">
        More leads, less people.
      </h1>
      <p
        
        className="font-workSans font-[300] sm:text-xl text-[16px] text-white max-w-lg sm:text-start text-center sm:leading-[24px] leading-[22px]"
      >
        Train an aiDR on your ICP and messaging matrix. Activate it on a patch.
        It will send personalized sequences to every target contact.
      </p>
      <div className="flex justify-center sm:justify-start ">
        <SharedButton variant={"solid"} className="mt-4">
          Sign Up for the Beta <LuArrowUpRightSquare />
        </SharedButton>
      </div>
    </div>
  );
};

export default Hero;