import React from 'react'
function RecetasCard({recetas}) {

    return (
        <>
<div className="container mx-auto grid 
    grid-cols-[repeat(1,minmax(250px,1fr))] 
    md:grid-cols-[repeat(2,minmax(250px,1fr))] 
    lg:grid-cols-[repeat(3,minmax(250px,1fr))] 
    gap-4">            {recetas && recetas.map(receta => (
                <div key={receta.id} className='bg-white p-4 w-full rounded-lg shadow-lg'>
                    <div>
                        <img src={receta.image.large} alt={receta.title} className='w-full h-full object-cover rounded-lg overflow-hidden' />
                    </div>
                    <div className="flex flex-col items-start justify-start">
                        <h2 className='text-xl   font-semibold text-left text-[#183B35] font-nunito line-clamp-2 mt-2' >{receta.title}</h2>
                        <p className='text-md text-left text-[#183B35] font-nunitoSans line-clamp-2 mt-2' >{receta.overview}</p>

                    <div className='grid grid-cols-[repeat(2,1fr)] gap-2 w-full mt-4'>
                        <div className='flex flex-row gap-2 items-center'>
                            <img src="/icon-servings.svg" alt="servings" className='w-6 h-6' />
                            <p className='text-md text-left text-[#183B35] font-nunitoSans' >Servings: {receta.servings}</p>
                        </div>
                        <div className='flex flex-row gap-2 items-center'>
                            <img src="/icon-prep-time.svg" alt="servings" className='w-6 h-6' />
                            <p className='text-md text-left text-[#183B35] font-nunitoSans' >Prep: {receta.prepMinutes} mins</p>

                        </div>
                        <div className='flex flex-row gap-2 items-center'>
                            <img src="/icon-cook-time.svg" alt="servings" className='w-6 h-6' />
                            <p className='text-md text-left text-[#183B35] font-nunitoSans' >Cook: {receta.cookMinutes} min</p>

                        </div>
                        </div>
                        <button className='bg-[#183B35] text-white font-nunitoSans font-bold text-md px-7 py-3 rounded-[20px]  w-full mt-4'>View Recipe</button>
                    </div>
                </div>
            ))}
        </div>
        </>
    )
}
export default RecetasCard;
