import React from 'react';
import { Link } from 'react-router-dom';
const navItems = [
    {
        name: 'Home',
        href: '/'
    },
    
    {
        name: 'About',
        href: '/about'
    },
    
    {
        name: 'Recipes',
        href: '/recipes'
    },
    
]
function Nav() {
    return (
        <nav>
           <ul className=' md:flex gap-4'>
           {navItems.map((el,index)=>{
         return   <li key={index}>
                    <Link to={el.href} className='cursor-pointer text-[#173A34] font-semibold hover:text-[#A60E12] duration-200 hover:underline'>
                      {el.name}
                    </Link>
                  </li>
            
           })}
            </ul>
        </nav>
       
    );
}
export default Nav;