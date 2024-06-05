import React from "react";

function HeroSection() {
  return (
    <section className="bg-black text-white text-center py-20 h-[115vh] flex justify-center items-center rounded-bl-[140px] rounded-br-[150px]">
      <div className=" container w-[85%] h-4/5 flex justify-center items-center">
        <div className=" w-1/2 flex flex-col justify-start items-start gap-8 mb-5">
          <h1 className=" text-left text-7xl font-semibold leading-snug tracking-tight">
            Every order <br/>fulfilled, 
            <span className="text-gradient"> on time</span>.
          </h1>
          <h2 className="text-left text-lg tracking-tight">
            Eliminate overstocking and under-stocking with CleverBooks. Built by
            supply-chain experts, <br />it brings the same technology used by large
            global brands to power fast-growing startups. In short, we make
            supply meet demand, and then help you grow both.
          </h2>
          <div>
            <button className="text-gradient hover:bg-gradient-to-r from-salmon to-medium-purple hover:text-white border rounded-full py-3 px-6 font-semibold">
              Get started with CleverBooks
            </button>
          </div>
          <img loading="lazy"
          className="h-20 absolute bottom-0 top-[79%] left-[26%] "
            src="https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/63d1777671aadb7b8492b5f9_hero-home-cta%20right%20to%20left.svg"
            alt="error"
          />
        </div>
        <div className="w-1/2">
          <img loading="lazy" className=" h-[70%] absolute top-[25%] right-0" src="https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/639b3e775b326d648dea3f01_Hero%20Image.svg" alt="error" />
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
