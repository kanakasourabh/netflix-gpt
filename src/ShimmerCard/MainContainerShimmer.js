import React from "react";

const MainContainerShimmer = () => {
  return (
    <div className="pt-[10%] bg-black opacity-80">
      {/* // "pt-[40%] bg-black md:pt-0"> */}
      <div className="py-[20%]">
        <p className="text-4xl text-white text-center hover:animate-spin ">
          Plase wait Loading....🔃
        </p>
      </div>
    </div>
  );
};

export default MainContainerShimmer;
