import React from "react";

function KeyProblemsSection() {
  return (
    <section className="bg-white py-20 h-screen flex flex-col justify-center items-center gap-14">
      <div className=" text-center">
        <h2 className="text-5xl font-bold mb-10 tracking-tight">
        Four key questions answered by CleverBooks
        </h2>
      </div>
      <div className=" w-11/12 flex justify-around bg-white px-8">
        <div className="bg-[#f1e9fc] flex flex-col gap-5 p-6 rounded-3xl">
          <div>
            <img
              className="h-14"
              src="https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/63f63ee54595853ca5e31682_what%20to%20orderr%20(1).svg"
              alt="error"
            />
          </div>
          <div>
            <h5 className="text-2xl font-semibold">What to order</h5>
          </div>
          <p className="w-60">
            Get accurate demand and days to stock out. Automate purchase
            planning so you can always have what you need for your next sales
            cycle.
          </p>
        </div>
        <div className="bg-[#f1e9fc] flex flex-col gap-5 p-6 rounded-3xl">
          <div>
            <img
              className="h-14"
              src="	https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/63bd0d2fab2e360025df922a_when%20to%20orderr.svg"
              alt="error"
            />
          </div>
          <div>
            <h5 className="text-2xl font-semibold">When to order</h5>
          </div>
          <p className="w-60">
            Have up-to-date inventory, storage, sales velocity, and demand. Get
            timely order suggestions so you're never left guessing.
          </p>
        </div>
        <div className="bg-[#f1e9fc] flex flex-col gap-5 p-6 rounded-3xl">
          <div>
            <img
              className="h-14"
              src="https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/63bd0cc629ab7f2d8cb0a8bd_how%20much%20to%20stock.svg"
              alt="error"
            />
          </div>
          <div>
            <h5 className="text-2xl font-semibold">How much to stock</h5>
          </div>
          <p className="w-60">
            Get inventory requirements for every node, for every SKU. So you
            avoid out-of-stock situations, even during demand spikes.
          </p>
        </div>
        <div className="bg-[#f1e9fc] flex flex-col gap-5 p-6 rounded-3xl">
          <div>
            <img
              className="h-14"
              src="https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/63bd0c2c27cde81ffea6515b_where%20to%20placee.svg"
              alt="error"
            />
          </div>
          <div>
            <h5 className="text-2xl font-semibold">Where to place</h5>
          </div>
          <p className="w-60">
            Our tool suggests how to move stock within your supply chain. So
            you'll always have products available across cities.
          </p>
        </div>
      </div>
    </section>
  );
}

export default KeyProblemsSection;
