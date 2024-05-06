import React from 'react';
import './Header.css'


function Header() {
    return (
        <div className='headerNav'>
            <img className='headerNavImg' src='src/Homepage/Header/images/logo-site.png' alt='Samet Can.png' />
            <ul className="headerNavLink">
                <li><a href="#Home">Anasayfa</a></li>
                <li><a href="#">Hakkımda</a></li>
                <li><a href="#">Hizmetlerim</a></li>
                <li><a href="#Upcomming Packages">İletişim</a></li>
            </ul>
        </div>
    );
}

export default Header;