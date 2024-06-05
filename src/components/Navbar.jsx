import React, { useState } from "react";

function Navbar() {
  const [hoveredItem, setHoveredItem] = useState(null);

  const handleMouseEnter = (item) => {
    setHoveredItem(item);
  };

  const handleMouseLeave = () => {
    setHoveredItem(null);
  };

  return (
    <>
      <nav className="bg-black backdrop-blur-xl absolute top-0 left-0 right-0 bg-opacity-75 px-4 py-3 flex justify-center items-center">
        <div className="flex justify-between items-center w-[85%] gap-10">
          <div className="text-white text-2xl font-bold mr-5 hover:cursor-pointer">
            CleverBooks
          </div>
          <div className="flex gap-8">
            <a
              onMouseEnter={() => handleMouseEnter('Product')}
              onMouseLeave={handleMouseLeave}
              href="#"
              className="text-white font-semibold hover:text-[#FC907E] transition-all duration-300"
            >
              Product
            </a>
            <a
              href="#"
              className="text-white font-semibold hover:text-[#FC907E] transition-all duration-300"
            >
              Pricing
            </a>
            <a
              onMouseEnter={() => handleMouseEnter('Industry')}
              onMouseLeave={handleMouseLeave}
              href="#"
              className="text-white font-semibold hover:text-[#FC907E] transition-all duration-300"
            >
              Industry
            </a>
            <a
              href="#"
              className="text-white font-semibold hover:text-[#FC907E] transition-all duration-300"
            >
              Customer Stories
            </a>
            <a
              href="#"
              className="text-white font-semibold hover:text-[#FC907E] transition-all duration-300"
            >
              About
            </a>
            <a
              href="#"
              className="text-white font-semibold hover:text-[#FC907E] transition-all duration-300"
            >
              Blog
            </a>
          </div>
          <div className="flex gap-10">
            <button className="block text-[#FC907E] p-2 hover:text-white transition-all duration-300">
              Login
            </button>
            <button className="bg-gradient-to-r from-salmon to-medium-purple text-white rounded-full flex justify-center items-center px-6 py-3 text-md font-semibold transition-all duration-350 hover:opacity-90 hover:text-black">
              Talk to Us
            </button>
          </div>
        </div>
      </nav>

      {hoveredItem === 'Product' && (
        <nav className="w-full h-[64%] bg-white absolute z-10 mt-20">
          <div className="px-28 py-10 flex flex-col gap-8">
            <div className="flex gap-4">
              <span>
                <img loading="lazy" src="https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/639b3e775b326d1404ea3edc_Stock.svg" alt="error" width="22px" />
              </span>
              <span>Product Home</span>
            </div>
            <div className="w-full h-[1px] bg-[#c5c5c5]"></div>
            <div className="p-2">
              <div className="grid grid-cols-4 gap-16">
                <div className="flex justify-center gap-4">
                  <div className="mt-1">
                    <img loading="lazy" src="https://cdn.prod.website-files.com/639b3e775b326d0848ea3e74/63ff51f402d807110ce327e3_HELIX%20SVG%20ICON.svg" alt="error" width="22px" />
                  </div>
                  <div className="flex flex-col">
                    <span className="font-semibold">HELIX: Workflow Automation</span>
                    <span>Build and automate custom S&OP workflows</span>
                  </div>
                </div>
                <div className="flex justify-center gap-4">
                  <div className="mt-1">
                    <img loading="lazy" src="https://cdn.prod.website-files.com/639b3e775b326d0848ea3e74/639b3e775b326d1743ea3e92_Demand%20Forcasting.svg" alt="error" width="22px" />
                  </div>
                  <div className="flex flex-col">
                    <span className="font-semibold">Accurate Demand Forecasting</span>
                    <span>Dynamically predict future demand with unmatched accuracy</span>
                  </div>
                </div>
                <div className="flex justify-center gap-4">
                  <div className="mt-1">
                    <img loading="lazy" src="https://cdn.prod.website-files.com/639b3e775b326d0848ea3e74/639b3e775b326d76a9ea3e90_Purchase%20Planning.svg" alt="error" width="22px" />
                  </div>
                  <div className="flex flex-col">
                    <span className="font-semibold">Automated Purchase Planning</span>
                    <span>Automate your purchase order generation</span>
                  </div>
                </div>
                <div className="flex justify-center gap-4">
                  <div className="mt-1">
                    <img loading="lazy" src="https://cdn.prod.website-files.com/639b3e775b326d0848ea3e74/639b3e775b326de50dea3e93_Distribution%20Planning.svg" alt="error" width="22px" />
                  </div>
                  <div className="flex flex-col">
                    <span className="font-semibold">Automated Distribution Planning</span>
                    <span>Automate distribution planning and allocation to maintain high fill rates</span>
                  </div>
                </div>
                <div className="flex justify-center gap-4">
                  <div className="mt-1">
                    <img loading="lazy" src="https://cdn.prod.website-files.com/639b3e775b326d0848ea3e74/639b3e775b326da925ea3e91_Integrations.svg" alt="error" width="22px" />
                  </div>
                  <div className="flex flex-col">
                    <span className="font-semibold">Integrations</span>
                    <span>Yes, CleverBooks works with your tech and ops stack!</span>
                  </div>
                </div>
                <div className="flex justify-center gap-4">
                  <div>
                    <img loading="lazy" src="https://cdn.prod.website-files.com/639b3e775b326d0848ea3e74/643680ae1721eb351d815937_dashboard%20icon%20.svg" alt="error" width="22px" />
                  </div>
                  <div className="flex flex-col">
                    <span className="font-semibold">Custom Dashboards</span>
                    <span>Build and visualize data your way</span>
                  </div>
                </div>
                <div className="flex justify-center gap-4">
                  <div className="mt-1">
                    <img loading="lazy" src="https://cdn.prod.website-files.com/639b3e775b326d0848ea3e74/662a4722c49c3b0e91bbc19b_consensus.svg" alt="error" width="22px" />
                  </div>
                  <div className="flex flex-col">
                    <span className="font-semibold">Consensus Planning</span>
                    <span>Collaborate and take better decisions faster</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
      )}

      {hoveredItem === 'Industry' && (
        <nav className="w-80 right-[38%] h-[340px] bg-white absolute z-10 mt-20">
          <ul className="w-full h-full p-8 flex flex-col justify-center gap-10">
            <li className="flex justify-start items-center gap-5">
              <span>
                <img loading="lazy" src="https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/651d0a7855ca7d366a6cf4bc_ICONS.svg" alt="error" />
              </span>
              <span>Beauty and Personal Care</span>
            </li>
            <li className="flex justify-start items-center gap-5">
              <span>
                <img loading="lazy" src="https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/651d0c913aa58280f16babf9_dsfsa.svg" alt="error" />
              </span>
              <span>Quick Service Restaurants</span>
            </li>
            <li className="flex justify-start items-center gap-5">
              <span>
                <img loading="lazy" src="https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/651d0cb76f758e3b86ff173b_Group%202649.svg" alt="error" />
              </span>
              <span>Food and Beverages</span>
            </li>
            <li className="flex justify-start items-center gap-5">
              <span>
                <img loading="lazy" src="https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/651d0cd33aa58280f16bebe5_dfsa.svg" alt="error" />
              </span>
              <span>Apparel and Accessories</span>
            </li>
            <li className="flex justify-start items-center gap-5">
              <span>
                <img loading="lazy" src="https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/65d452b762741ee2943718b2_pharma%20icon%202.svg" alt="error" />
              </span>
              <span>Pharmaceuticals</span>
            </li>
          </ul>
        </nav>
      )}
    </>
  );
}

export default Navbar;
