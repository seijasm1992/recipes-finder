import React from 'react';

function SectionReady() {
  return (
    <section className='relative container mx-auto py-24 rounded-[20px] bg-[#E8EDE7] overflow-hidden' >
      <div className='absolute bottom-[-50px] left-[-50px]'>
        <img src="/pattern-fork.svg" className='w-full h-full object-contain w-[200px] h-[200px]'  />
      </div>
      <div className='absolute top-[6px] right-[-60px]'>
        <img src="/pattern-knife.svg" className='w-full h-full object-contain w-[200px] h-[200px]' />
      </div>
      <div className='flex flex-col gap-4 items-center text-center pb-10'>
        <h2 className='text-[3rem] font-bold text-[#153C37] font-nunito'>Ready to cook smarter?</h2>
        <p className='text-xl text-[#153C37] font-nunito'>
          Hit the button, pick a recipe, and get dinner on the tablet--fast
        </p>
        <button className='bg-[#173A34] text-white px-6 py-3 rounded-md flex items-center gap-2 justify-center font-bold font-nunito'>
          Download the app
        </button>
      </div>
    </section>
  );
}

export default SectionReady;
