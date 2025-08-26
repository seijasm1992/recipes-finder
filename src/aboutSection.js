import React from 'react';

function AboutSection() {
  return (
    <section className='container mx-auto py-24'>
      <div className='flex flex-col gap-4'>
        
        
        <div className='col-start-2 col-end-6 row-start-2 row-end-5 flex flex-col gap-4'>
          <h2 className='text-[3rem] font-bold text-[#153C37] font-bold font-nunito animate__animated animate__fadeInDown'>Build for real life</h2>  
          <p className='text-xl text-[#153C37] font-nunito'>
            Cooking shouldn't be complicated. These recipes come in under 30 minutes of active time, fit busy schedules, and taste good enough to repeat.
          </p>
          <p className='text-xl text-[#153C37] font-nunito'>
            Whether you're new to the kitchen or just need fresh ideas, we've got you covered.
          </p>
        </div>

       
        <div className='col-start-7 col-end-12 row-start-1 row-end-10'>
          <img 
            src="/image-home-real-life-large.webp" 
            alt="about"  
            className='w-full h-full object-cover rounded-[20px]' 
          />
        </div>

      </div>
    </section>
  );
}

export default AboutSection;
