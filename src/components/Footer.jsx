import footerLogo from "/footerLogo.png";

const Footer = () => {
  return (
    <footer className="sm:px-36 px-4 bg-[#07292F]">
      <div className="sm:py-[44px] py-[30px] flex sm:flex-row flex-col justify-between items-center gap-8">
        <div>
          <img src={footerLogo} alt="" />
        </div>
        <div>
          <p className="text-secondary font-workSans font-[300] text-[12px] sm:text-base leading-5 text-center">
            Copyright © 2023 Wizia. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;