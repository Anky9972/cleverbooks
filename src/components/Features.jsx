import React, { useState } from "react";

function Features() {
  const features = [
    {
      title: "Ease of use, for everyone",
      description:
        "With an intuitive interface and empathetic design, CleverBooks requires only minimal training (or beginner-level knowledge of supply chain) to use.",
      image:
        "https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/639b3e775b326d5150ea3f0a_Ease%20of%20use.svg",
    },
    {
      title: "Purpose-built & ever-improving tech",
      description:
        "Our demand forecasting engine has been meticulously-built, while our ML engine constantly trains on years of data and is ever-evolving.",
      image:
        "https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/639b3e775b326dab14ea3f0b_Purpose-built%20%26%20ever-improving%20tech.svg"
    },
    {
      title: "Deep domain expertise",
      description:
        "Our team members have years of experience leading supply chains for businesses ranging from $10M to $10B.",
      image:
        "https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/63a2c8d8b6a42e610f78e10d_expert%201-p-500.png"
    },
    {
      title: "A focus on KPIs that matter",
      description:
        "Our tools help you make decisions to grow your business. Everything works towards improving cash flow and product availability.",
      image:
        "https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/639b3e775b326d486cea3f09_Focus%20on%20KPIs%20that%20matter.svg"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % features.length);
  };

  const currentFeature = features[currentIndex];

  return (
    <div className="w-full h-screen flex flex-col bg-[#f2f2f2] justify-center items-center gap-12">
      <div>
        <h1 className=" text-4xl font-extrabold">Get CleverBooks and get...</h1>
      </div>
      <div className="w-3/4 h-3/4 bg-white rounded-3xl flex justify-center items-center ">
        <button className="absolute left-28" onClick={handleNextClick}>
          <img loading="lazy"
            src="https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/639b3e775b326d5122ea3ebb_slider-arrow.svg"
            className="h-11 rotate-180"
            alt="previous"
          />
        </button>
        <div className="flex justify-center items-center w-full h-full gap-8">
          <div className="w-[40%]">
            <img className="w-full" src={currentFeature.image} alt="feature" />
          </div>
          <div className="w-[40%] h-56 flex flex-col gap-5">
            <div>
              <h1 className="text-4xl font-semibold">{currentFeature.title}</h1>
            </div>
            <div>
              <p>{currentFeature.description}</p>
            </div>
          </div>
        </div>
        <button className="absolute right-28" onClick={handleNextClick}>
          <img loading="lazy"
            src="https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/639b3e775b326d5122ea3ebb_slider-arrow.svg"
            className="h-11"
            alt="next"
          />
        </button>
      </div>
    </div>
  );
}

export default Features;
