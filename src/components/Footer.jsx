import React from "react";

function Footer() {
  return (
    <footer className="bg-[#151218]  text-white text-center  flex flex-col justify-center items-center">
      <div className="h-screen w-full flex justify-center items-center">
        <div className="w-[84%] bg-gradient-to-r from-salmon to-medium-purple h-2/3 rounded-3xl">
          <div className="w-full h-full flex flex-col justify-center items-center gap-20">
            <div>
              <h1 className="text-6xl font-semibold">You can grow faster than you think!</h1>
            </div>
            <div className="flex flex-col gap-8">
              <p>Plan with CleverBooks to fulfil your demand today, and dreams tomorrow. We bring the methods and<br />technologies of large global companies to help brands of all sizes scale.</p>
            <div>
              <button className="text-white bg-black rounded-full py-3 px-6 font-semibold">
              Get started with CleverBooks
            </button>

            </div>
            </div>
          </div>
        </div>
      </div>
      <div className="h-screen flex justify-center items-center">
        
      <div className="w-[83%]   grid gap-20 grid-cols-5 ">
        <div className="  text-left col-span-2 flex flex-col gap-10">
          <div >
            <h1 className="text-5xl font-semibold">CleverBooks</h1>
          </div>
          <p className="text-[#c5c5c5]">
            CleverBooks is an AI-powered supply chain software that provides companies
            tools for demand forecasting, inventory planning and more. This
            helps them have the right amount of stock, optimise space and fulfil
            every order.
          </p>
        </div>
        <div className="text-left ml-10">
          <nav>
            <ul className="flex flex-col gap-5">
              <li className="text-white font-semibold">Explore</li>
              <li className="text-[#c5c5c5]">Product</li>
              <li className="text-[#c5c5c5]">Pricing</li>
              <li className="text-[#c5c5c5]">Customer Stories</li>
              <li className="text-[#c5c5c5]">Career</li>
            </ul>
          </nav>
        </div>
        <div className="text-left ml-5">
          <nav>
            <ul className="flex flex-col gap-5">
              <li className="text-white font-semibold">Learn</li>
              <li className="text-[#c5c5c5]">About us</li>
              <li className="text-[#c5c5c5]">Blog</li>
            </ul>
          </nav>
        </div>
        <div className=" text-left w-60 flex flex-col gap-5 ">
          <div>
            <h1 className="text-white font-semibold">Contact CleverBooks</h1>
          </div>
          <p className="flex  flex-col gap-5 text-[#c5c5c5]">
            <span>sales@getCleverBooks.ai</span>
            <span>
              Registered Office: <br />1507, Incubex, 11th cross road, <br />19th Main Road,
              Bengaluru, <br />India. 560102
            </span>
            <span>
              Corporate Office: <br />291, All Time Space, 4th Floor, <br />15th A Cross,
              Sector - 6, <br />HSR Layout, Bengaluru, <br />India. 560102
            </span>
          </p>
          <div>
            <span>1</span>
            <span>1</span>
            <span>1</span>
            <span>1</span>
          </div>
        </div>
        <div className="flex flex-col gap-2 col-span-2 text-[#c5c5c5]">
          <nav>
            <ul className="flex gap-5">
              <li>Copyright 2024 CleverBooks</li>
              <li>Terms of Service</li>
              <li>Privacy Policy</li>
            </ul>
          </nav>
          <div className=" text-left">
            <p>
              Conifer Innovations Private Limited <br />CIN: U72900KA2022PTC163144
            </p>
          </div>
        </div>
        <div></div>
        <div></div>
        <div className=" ml-36 col-span-1">
          <button className="rounded-full ">
            <img className="h-11 hover:opacity-70 transition-all duration-300" src="	https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/639b3e775b326d53d1ea3ece_go-to-top.svg" alt="error" />
          </button>
        </div>
      </div>
      </div>

      {/* <div className="container mx-auto">
        <p>&copy; 2024 CleverBooks. All rights reserved.</p>
        <p>123 Clever Street, Booktown, BK 12345</p>
      </div> */}
    </footer>
  );
}

export default Footer;
