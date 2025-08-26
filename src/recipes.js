import React from 'react'
import Footer from './footer'
import Header from './header';

const socialIconsArray = [
  {
    icon: '/icon-instagram.svg',
  },
  {
    icon: '/icon-tiktok.svg',
  },
  {
    icon: '/icon-bluesky.svg',
  },
];

function Recipes() {
    return (
        <div>
            <Footer emoji="❤️" emoji2="🍲" footerSocials={socialIconsArray} />
        </div>
    )
}
export default Recipes;