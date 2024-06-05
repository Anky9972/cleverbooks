import React from 'react';

function Founders() {
  return (
    <section className='w-full h-[120vh] flex justify-around items-center px-12'>
      <div className='w-[40%] h-4/5 relative'>
        <div className='rounded-3xl'>
          <img loading="lazy" className='rounded-3xl' width="580px" src="https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/64df240c8d5e1c29b06d3a95_Founders%20Photo-p-800.webp" alt="error" />
        </div>
        <div className='detail w-[402px] h-[130px] bg-[#f1e9fc] rounded-3xl ml-72 mb-[-40px]  absolute bottom-0'>
          <div className='w-full h-full p-10'>
            <p className='text-black font-semibold'>Rahul Vishwakarma, Akhil Kumar & Yogesh </p>
            <p > <span className='text-black font-semibold'>Byahatti - </span><span>Founders</span></p>
          </div>
        </div>
      </div>
      <div className='w-[40%] flex flex-col gap-10'>
        <div>
          <h1 className='text-5xl font-bold'>From the founders</h1>
        </div>
        <div className='flex flex-col gap-8'>
          <p>
            We are a young company solving an age-old problem: Supply Chain. Our goal is simple: to eradicate stock outs for businesses that want to grow faster. Our background, tech expertise, and empathy allow us to do just that.
          </p>
          <p>
            Thank you for checking out CleverBooks, and we hope to help you always be in stock!
          </p>
        </div>
        <div>
          <button className='text-gredient py-3 px-6 border rounded-full'>Learn more</button>
        </div>
      </div>
    </section>
  );
}

export default Founders;
