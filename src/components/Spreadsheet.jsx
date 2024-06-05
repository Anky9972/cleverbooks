import React from "react";

function Spreadsheet() {
  return (
    <section className="w-full h-[140vh] flex flex-col justify-around items-center">
      <div>
        <h1 className="text-[42px] font-bold">Things your spreadsheet wishes it could do</h1>
      </div>
      <div className="w-full flex  justify-between">
      <div className="w-[46%]  flex justify-center">
        <div className="w-2/3 ">
          <div className="flex flex-col gap-6">
            <div>
              <h1 className="text-gradient text-[28px] font-semibold">Accurate Demand Forecasting</h1>
            </div>
            <div>
              <p className="text-[#4c4c4c] text-left">
                Dynamically predict future demand across all channels, with high
                accuracy and lowest granularity. CleverBooks takes into account what
                traditional forecasts don't: trends, real-time market signals,
                promotional activities, and even logistics disruptions.
              </p>
            </div>
            <div className="mb-10">
              <button className="flex gap-1 justify-center items-center hover:gap-2 transition-all duration-300">
                <span className="text-[#c782c4]">Learn more</span>
                <span className="flex justify-center items-center">
                  <img
                    className="h-2 mt-1"
                    src="https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/63ff3b3e4dc16be9322e8817_right%20arrow.svg"
                    alt="error"
                  />
                </span>
              </button>
            </div>
          </div>
          <div>
            <ul className=" flex flex-col items-start">
              <li className="w-full py-5 text-2xl font-semibold border-t border-[#c5c5c5]">HELIX: Workflow Automation</li>
              <li className="w-full py-5 text-2xl font-semibold border-t border-[#c5c5c5]">Automated Purchase Planning</li>
              <li className="w-full py-5 text-2xl font-semibold border-t border-[#c5c5c5]">Automated Distribution Planning </li>
              <li className="w-full py-5 text-2xl font-semibold border-t border-[#c5c5c5]">Easy Integration</li>
              <li className="w-full py-5 text-2xl font-semibold border-t border-[#c5c5c5]">Custom Dashboards</li>
              <li className="w-full py-5 text-2xl font-semibold border-t border-b border-[#c5c5c5]">Consensus Planning</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="w-1/2 px-3 rounded-tl-3xl rounded-bl-3xl flex justify-center items-center bg-gradient-to-r from-salmon to-medium-purple hover:text-white">
        <img src="https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/63f64bb2507621d0bf7da369_Demand%20forecasting-p-800.webp" alt="error" />
      </div>
      </div>
      <div className="text-gradient hover:bg-gradient-to-r from-salmon to-medium-purple hover:text-white mb-24">
        <button className=" border py-3 px-6 rounded-full ">
            View all features
        </button>
      </div>
    </section>
  );
}

export default Spreadsheet;
