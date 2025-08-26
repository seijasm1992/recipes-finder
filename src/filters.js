import React, { useState, useEffect, useCallback } from 'react'

function Filters({ recetas, setNewRecetas }) {  
    const [prepMinutes, setPrepMinutes] = useState("");
    const [cookMinutes, setCookMinutes] = useState("");
    const [search, setSearch] = useState("");
   
    const applyFilters = useCallback(() => {
        let filteredRecetas = [...recetas]; // Copia del array original
    
        // Filtro por tiempo de preparación
        if (prepMinutes && prepMinutes !== "prepMinutes") {
            filteredRecetas = filteredRecetas.filter(receta => 
                receta.prepMinutes <= parseInt(prepMinutes)
            );
        }
    
        // Filtro por tiempo de cocción
        if (cookMinutes && cookMinutes !== "cookMinutes") {
            filteredRecetas = filteredRecetas.filter(receta => 
                receta.cookMinutes <= parseInt(cookMinutes)
            );
        }
    
        // Filtro por búsqueda
        if (search.trim() !== "") {
            const searchTerm = search.toLowerCase();
            filteredRecetas = filteredRecetas.filter(receta => 
                receta.title.toLowerCase().includes(searchTerm) ||
                receta.ingredients.some(ingredient => 
                    ingredient.toLowerCase().includes(searchTerm)
                )
            );
        }
    
        setNewRecetas(filteredRecetas); // Actualiza el estado en App.js
    }, [prepMinutes, cookMinutes, search, recetas, setNewRecetas]);

    useEffect(() => {
        applyFilters();
    }, [applyFilters]);
    
    // Event handlers para los inputs
    const handleSearch = (e) => {
        setSearch(e.target.value);
    };

    const handlePrepMinutes = (e) => {
        setPrepMinutes(e.target.value);
    };

    const handleCookMinutes = (e) => {
        setCookMinutes(e.target.value);
    };

    // Obtener valores únicos para los selects
    const uniquePrepTimes = [...new Set(recetas.map(receta => receta.prepMinutes))].sort((a, b) => a - b);
    const uniqueCookTimes = [...new Set(recetas.map(receta => receta.cookMinutes))].sort((a, b) => a - b);
    
    return (
        <div className='w-full flex justify-between items-center container mx-auto'>
            <div className='flex flex-row items-center justify-between w-full mb-2'>
                <div className='flex flex-row gap-4'>
                    <select 
                        value={prepMinutes}
                        onChange={handlePrepMinutes}
                        className='text-[#183B35] font-nunitoSans text-md bg-[#ffffff] p-[8px] rounded-md'
                    >
                        <option value="prepMinutes">Max Prep Time</option>
                        {uniquePrepTimes.map((time) => (
                            <option key={time} value={time}>{time} mins</option>
                        ))}
                    </select>
                    <select 
                        value={cookMinutes}
                        onChange={handleCookMinutes}
                        className='text-[#183B35] font-nunitoSans text-md bg-[#ffffff] p-[8px] rounded-md'
                    >
                        <option value="cookMinutes">Max Cook Time</option>
                        {uniqueCookTimes.map((time) => (
                            <option key={time} value={time}>{time} mins</option>
                        ))}
                    </select>

                </div>

                <div className='relative'>
                    <div className='absolute top-[16px] left-[10px]'>
                        <img src="icon-search.svg" alt="search" className='w-[20px] h-[20px]' />
                    </div>
                    <input 
                        type="search" 
                        value={search}
                        onChange={handleSearch}
                        className='text-[#183B35] font-nunitoSans text-md bg-[#ffffff] p-[12px] rounded-md w-[300px] outline-none pl-[40px]' 
                        placeholder="Search by name or ingredients" 
                    />
                </div>
            </div>
        </div>
    )
}

export default Filters;