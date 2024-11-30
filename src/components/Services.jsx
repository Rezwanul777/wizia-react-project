const Services = () => {
    const list = [
      {
        image: "/magic-want.png",
        title: "You're in Control",
        description:"aiDRs operate based on your rules. You guide the machine, the aiDRs execute the work.",
      },
      {
        image: "/graph.png",
        title: "Infinitely Scalable",
        description:"Train an aiDR on a patch. When you are happy with the results, scale it effortlessly.",
      },
      {
        image: "/arrow.png",
        title: "Incredibly Flexible",
        description:"Train an aiDR on an outbound patch, to nurture inbound leads, or to reach out to your long tail of SMB customers at renewal time.",
      },
    ];
    return (
      <section className="sm:px-8 px-7 sm:py-[116px] py-18 ">
        <div className="grid sm:grid-cols-3 grid-cols-1 justify-center  sm:gap-5 gap-[44px]">
          {list.map((item, i) => (
            <div className="space-y-4" key={i}>
              <img src={item.image} alt="" />
              <h3 className="font-Montserrat font-semibold sm:text-[26px] text-2xl sm:leading-7 leading-5 text-white">
                {item.title}
              </h3>
              <p className="font-workSans font-[280] text-secondary sm:text-[20px] text-[18px] sm:leading-7 leading-6 ">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>
    );
  };
  
  export default Services;