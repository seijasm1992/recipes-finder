import React from 'react';
import FeatureItem from './featureItem';
function FeatureSection({title, features}) {
    return (
        <section className='container mx-auto py-24 border-b border-[#E5E4E0] '>
            <h1 className='text-center text-[2rem] font-bold text-[#153C37] font-nunito animate__animated animate__fadeInDown '>{title}</h1>
            <div className='flex flex-col md:flex-row items-center justify-between gap-8 mt-12'>
                {features.map((feature, index) => (
                    <FeatureItem key={index} icon={feature.icon} title={feature.title} description={feature.description} />
                ))}
            </div>
        </section>
    );
}
export default FeatureSection;