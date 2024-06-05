import React from 'react';

function ReviewsSection() {
  return (
    <section className="w-full h-full flex flex-col">
      <div className="w-full h-20 "></div>
      <div className="w-full h-5/6 py-20 px-28 ">
        <div className="flex gap-14">
          <div className="left flex flex-col gap-12">
            <div>
              <p className='text-lg text-[#565458] tracking-tight'>
                D2C brands face issues with supply chain management and high
                growth startups are not equipped to  <br />run their demand forecast
                manually. CleverBooks automates all the workflows and helps brands
                predict high demand periods and be ready to cater to customer
                demands. It has a direct impact on the revenue readiness of a
                company and that's the value we see CleverBooks unlocking for many
                companies in the  <br />future. Rahul and team have built a robust
                product with years of their experience distilled into the
                workflows.
              </p>
            </div>
            <div className='flex justify-between w-full'>
              <div className='flex gap-5'>
                <div >
                  <img className='rounded-full' loading="lazy" src="https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/651c00235cd9c2cd10fb1976_Samosa%20Party%20Client%20Image.webp" alt="error" width="60px" />
                </div>
                <div className='flex flex-col'>
                  <span>Diksha Pande</span>
                  <span>Co-founder , Samosa Party</span>
                </div>
              </div>
              <div>
                <img loading="lazy"
                  src="https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/63a48634ed59555eb9125770_samosa.svg" width="82px"
                  alt="error"
                />
              </div>
            </div>
            <div className="flex gap-6">
                <button>
                  <img loading="lazy"
                    className="h-8 rotate-180"
                    src="https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/639b3e775b326d5122ea3ebb_slider-arrow.svg"
                    alt="error"
                  />
                </button>
                <button>
                  <img loading="lazy"
                    className="h-8"
                    src="https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/639b3e775b326d5122ea3ebb_slider-arrow.svg"
                    alt="error"
                  />
                </button>
              </div>
            <div className='w-full flex gap-10'>
              <div className='w-60 h-28 bg-[#f1e9fc] rounded-2xl flex flex-col justify-center items-center gap-3'>
                <span className=' text-4xl font-bold text-gradient'>upto 95%</span>
                <span>Demand Fulfilment</span>
              </div>
              <div className='w-60 h-28 bg-[#f1e9fc] rounded-2xl  flex flex-col justify-center items-center gap-3'>
              <span className=' text-4xl font-bold text-gradient'>{"<"} 3%</span>
                <span>Daily Stock-out</span>
              </div>
              <div className='w-60 h-28 rounded-3xl flex flex-col justify-center items-center gap-3 border-2 '>
                <span className='text-5 font-semibold text-gradient'>Read story</span>
                <span>
                  <img loading="lazy" src="https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/639b3e775b326dd545ea3ebe_Vector.svg" alt="error" width="21px"/>
                </span>
              </div>
            </div>
          </div>
          <div className=" block w-full right overflow-hidden border-2 rounded-3xl border-[#d8c3ff]">
  <img loading="lazy"
    className=' inline-block max-w-full align-middle'
    src="https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/664ddc11c29c3652662f0739_samosa%20party%20image.webp" 
    alt="error"
  />
</div>

        </div>
      </div>
    </section>
  );
}

export default ReviewsSection;
