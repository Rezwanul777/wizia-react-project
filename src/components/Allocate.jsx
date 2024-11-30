
const Allocate = () => {
    const improvementList = [
      {
        percent: "32%",
        title: "Improvement in Open Rates",
      },
      {
        percent: "75%",
        title: "Improvement in Ramp Time",
      },
      {
        percent: "35%",
        title: "Improvement in Meetings Booked",
      },
    ];
    return (
      <section className="bg-[url(/effort-bg.png)] bg-no-repeat bg-cover sm:mx-10 mx-6">
        <div className="sm:pt-[65px] pt-14 sm:pb-[90px] pb-20 sm:px-8 px-5">
          <div className="sm:space-y-2 space-y-4">
            <h3 className="font-Montserrat font-semibold text-white text-[26px] sm:text-[32px] sm:leading-10 leading-[34px]  max-w-lg">
              Allocate effort where your reps make an inpact.
            </h3>
            <h5 className="text-primary font-[500] italic font-Montserrat text-2xl sm:text-[32px] sm:leading-10 leading-7 ">
              Let us handle the rest.
            </h5>
            <p className="sm:text-xl text-base font-workSans font-[300] text-secondary sm:leading-[26px] leading-5 max-w-xl">
              Keep your reps &quot;in the air&quot; -- out in the field and on the
              phone where they can build relationships.
            </p>
          </div>
          <div className="sm:space-y-2 space-y-4 sm:mt-20 mt-10">
            <div className="flex sm:flex-row flex-col justify-start items-start sm:items-center gap-3">
              {improvementList.map((item, i) => (
                <div key={i} className="sm:w-[174px] w-full space-y-2">
                  <h1 className="font-Montserrat font-bold text-[32px] sm:text-[40px] leading-[41px] sm:leading-[52px]  text-primary ">
                    {item.percent}
                  </h1>
                  <p className="text-[#E9EEF1] font-[500] text-[18px] sm:text-xl leading-[22px] sm:leading-[26px]  max-w-md">
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
  
  export default Allocate;