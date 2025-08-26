import React from 'react';
function FeatureItem({title,description,icon}) {
    return (
        <div className='flex flex-col gap-4 items-left'>
              <img src={icon} alt={title} className='w-16 h-16' />
            <h2 className='text-3xl font-semibold text-[#153C37] font-nunito'>{title}</h2>
            <p className='text-2xl text-[#153C37] font-nunito'>{description}</p>
        </div>
    );
}
export default FeatureItem; 