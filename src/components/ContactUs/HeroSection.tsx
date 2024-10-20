import React from "react";

const HeroSection: React.FC = () => {
  return (
    <section className="flex flex-col font-rubik justify-center px-[10px] py-[200px] w-full text-center min-h-[372px] max-md:px-5 max-md:max-w-full bg-[#1E2938]">
      <div className="flex flex-col justify-center my-0 mx-auto gap-5 py-[10px] max-w-[1184px] w-full">
        <h1 className="text-5xl font-bold leading-tight whitespace-nowrap text-stone-50 max-md:text-4xl">
          <div className="w-full max-md:max-w-full">
            <h2 className="pb-px px-[508px] max-md:px-5 max-md:max-w-full max-md:text-4xl">
              צרו קשר
            </h2>
          </div>
        </h1>
        <div className="text-sm leading-8 text-zinc-300">
          <div className="w-full max-md:max-w-full">
            <h2 className="text-[24px] font-normal">
              תשאירו לנו רק כמה פרטים, אנחנו נדאג לכל השאר.
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;