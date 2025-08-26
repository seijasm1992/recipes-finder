import React from 'react';
function Hero() {
    return (
        <div className='container mx-auto mt-16 '>
            <div className='flex flex-col gap-4 items-center justify-center text-center gap-8'>
                <h1 className='text-[3rem] font-bold text-[#153C37] font-nunito animate__animated animate__fadeInDown'>
                    Healthy meals,zero fuss
                </h1>
                <p className='text-lg text-[#153C37] text-center max-w-2xl mx-auto font-semibold leading-relaxed tracking-wide color-[#566B62] font-nunito'>
                    Discover eight quick, whole-food recipes that you can cook tonight
                    <br />
                    —no processed junk, no guesswork.
                </p>
                <button className='bg-[#173A34] text-white px-6 py-3 rounded-md flex items-center gap-2 justify-center font-bold font-nunito'>
                    Start exploring
                </button>

            </div>




      
        <div className='container mx-auto border-[16px] border-white rounded-lg overflow-hidden mt-24 shadow-lg'>
        <img src="/image-home-hero-large.webp " alt="Hero image" />
        </div>
    </div>
    );
}
export default Hero;