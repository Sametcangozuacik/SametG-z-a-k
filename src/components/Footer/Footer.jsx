import React from 'react';
import './Footer.css';
import logo from '../../../public/logo-site.png';
import linkedin from '../../../public/linkedin.svg';
import instagram from '../../../public/instagram.svg';
import github from '../../../public/github.svg';
import whatsapp from '../../../public/whatsapp.svg';
import phonesolid from '../../../public/phonesolid.svg';

function Footer({ language }) {
    return (
        <footer className='footer-section'>
            <div className='footer-box'>
                <div>
                    <img className='footer-nav-img' src={logo} alt='Samet Can' />
                </div>
                <div>
                    <ul className="footer-section-link">
                        <li><a href="#">{language === 'tr' ? '#Anasayfa' : '#Home'}</a></li>
                        <li><a href="#">{language === 'tr' ? '#Akademi' : '#Academy'}</a></li>
                        <li><a href="#">{language === 'tr' ? '#Hakkımda' : '#About'}</a></li>
                    </ul>
                    <ul className="footer-section-link">
                        <li><a href="#">{language === 'tr' ? '#Hizmetlerim' : '#Services'}</a></li>
                        <li><a href="#">{language === 'tr' ? '#İletişim' : '#Contact'}</a></li>
                    </ul>
                </div>
                <div>
                    <ul >
                        <li className="footer-social-links">
                            <a href="https://www.linkedin.com/in/samet-can-gozuacik/">
                                <img className="footer-social-icon" src={linkedin} alt="Linkedin" />
                            </a>
                            <a href="#">
                                <img className="footer-social-icon" src={instagram} alt="Instagram" />
                            </a>
                            <a href="https://github.com/Sametcangozuacik">
                                <img className="footer-social-icon" src={github} alt="Github" />
                            </a>
                            <a href="https://wa.me/905001234567" rel="nofollow" target="_blank"><img className="footer-social-icon" src={whatsapp} /></a>
                            <a href="tel:+905073195505"><img className="footer-social-icon" src={phonesolid} /></a>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
