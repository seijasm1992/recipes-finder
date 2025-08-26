import React from 'react'
function FooterSocial({footerSocials}) {
    return (
        <button className="p-2 hover:opacity-70 transition-opacity">
            <img src={footerSocials.icon} alt="social icon" className="w-6 h-6" />
        </button>
    )
}
export default FooterSocial;