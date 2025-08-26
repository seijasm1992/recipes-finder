import React from 'react'
import FooterSocial from './footerSocial'
function Footer({emoji,emoji2,footerSocials}) {
    return (
        <footer className=' text-[#173A34] py-10 flex justify-between items-center container mx-auto'>
        <div>
            <p>Made with {emoji} and {emoji2}</p>
        </div>
        <ul className="flex gap-4">
        {footerSocials.map((social,index) => (
            <li key={index}>
                <FooterSocial footerSocials={social} />
            </li>
        ))}
        
        </ul>

        </footer>
    )
}
export default Footer;