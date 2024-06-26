import React, { useState, useEffect, useRef } from 'react';
import './Header.css';
import logo from '../../../public/logo-site.png';
import { NavLink } from 'react-router-dom';

function Header({ language, onLanguageChange }) {
    const [menuOpen, setMenuOpen] = useState(false);
    const menuRef = useRef(null);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const handleClickOutside = (event) => {
        if (menuRef.current && !menuRef.current.contains(event.target)) {
            setMenuOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div className='header-nav'>
            <div className='header-nav-section' ref={menuRef}>
                <img className='header-nav-img' src={logo} alt='Samet Can' />
                <div className='hamburger-menu' onClick={toggleMenu}>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                <ul className={`header-nav-link ${menuOpen ? 'active' : ''}`}>
                    <li><NavLink to="/">{language === 'tr' ? 'Anasayfa' : 'Home'}</NavLink></li>
                    <li><NavLink to="/academy">{language === 'tr' ? 'Akademi' : 'Academy'}</NavLink></li>
                    <li><NavLink to="/about">{language === 'tr' ? 'Hakkımda' : 'About'}</NavLink></li>
                    <li><NavLink to="/services">{language === 'tr' ? 'Hizmetlerim' : 'Services'}</NavLink></li>
                    <li><NavLink to="/contact">{language === 'tr' ? 'İletişim' : 'Contact'}</NavLink></li>
                </ul>
                <div className="language-menu">
                    <button className="language-menu-btn" onClick={() => onLanguageChange('tr')}>Türkçe</button>
                    <button className="language-menu-btn" onClick={() => onLanguageChange('en')}>İngilizce</button>
                </div>
            </div>
        </div>
    );
}

export default Header;
