
import { LuArrowUpRightSquare } from "react-icons/lu";
import SharedButton from "../libs/SharedButton";

const Embrace = () => {
  return (
    <section className="sm:py-22 py-10 ">
      <div className="space-y-6 sm:px-0 px-6">
        <h1 className="text-center text-primary uppercase font-Montserrat sm:text-xl text-base sm:leading-6 leading-[18px] ">
          get started
        </h1>
        <h4 className="font-Montserrat text-center font-[500] italic text-3xl leading-[43px]   text-white">
          Embrace the new era of outbound.
        </h4>
        <p className="text-secondary font-workSans font-[300] sm:text-xl text-[18px] leading-[23.4px] sm:leading-[26px]  max-w-lg mx-auto text-center ">
          Wizia lets you train, activate, and optimize aiDRs.Take your outbound
          to new levels of performance and efficiency.
        </p>
        <div className="flex justify-center">
          <SharedButton className="sm:w-fit w-full mx-auto" variant={"solid"}>
            Sign Up for the Beta <LuArrowUpRightSquare />
          </SharedButton>
        </div>
      </div>
    </section>
  );
};

export default Embrace;