import React from "react";
import shadow from "../../assets/bg-shadow.png";
import banner from "../../assets/banner-main.png";

const Banner = () => {
  return (
    <div className="banner max-w-[1200px] mx-auto">
      <div className="relative">
        <img className="rounded-3xl" src={shadow} alt="" />
        <div className="text-center absolute top-[75px] left-[250px]">
          <img className="mx-auto mb-3" src={banner} alt="" />
          <h2 className="mb-3 text-[2rem] font-bold">
            Assemble Your Ultimate Dream 11 Cricket Team
          </h2>
          <p className="mb-3">Beyond Boundaries Beyond Limits</p>
          <button className="btn btn-neutral btn-outline bg-[#E7FE29]">
            Claim Free Credit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
