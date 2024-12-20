import { FaRegCheckCircle } from "react-icons/fa";

const Prefered = () => {
  const list = [
    {
      icon: <FaRegCheckCircle />,
      title: "Quick to ramp",
    },
    {
      icon: <FaRegCheckCircle />,
      title: "Easy to optimize",
    },
    {
      icon: <FaRegCheckCircle />,
      title: "Quick to scale up",
    },
    {
      icon: <FaRegCheckCircle />,
      title: "Works with all your existing tools",
    },
  ];
  return (
    <section className="bg-[url(/train-bg.png)] bg-no-repeat bg-cover sm:mx-14 mx-6 sm:py-26 py-10 ">
      <div className="flex justify-center items-center">
        <div className="lg:ps-50 md:ps-34 sm:ps-20 ps-8">
          <h3 className="text-white font-Montserrat font-semibold sm:text-[40px] text-[28px] sm:leading-[48px] leading-8 ">
            Train your aiDR on your...
          </h3>
          <h4 className="text-primary font-Montserrat italic font-[500] sm:text-[40px] text-[28px] sm:leading-[48px] leading-[34px] -tracking-[1%]">
            prefered email st|
          </h4>
          <div className="sm:pt-[30px] pt-5 sm:pb-14 pb-8">
            <p className="text-secondary  font-workSans font-[300] sm:text-2xl text-[18px] sm:leading-[30px] leading-[20px]  max-w-md">
              You&apos;re in control. Train your aiDR on elements of your
              Marketing strategy.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 grid-cols-1 gap-3">
            {list.map((item, index) => (
              <div key={index} className="flex items-center gap-1">
                <span className="text-cyan">{item.icon}</span>
                <p className="text-cyan font-Montserrat font-[500] sm:text-[18px] text-base sm:leading-[26px] leading-5 ">
                  {item.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Prefered;