import React, { useState, useEffect } from 'react';
import './Servicespage.css';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Service from '../../components/Servicevariety/service';


function Servicespage() {
    const [language, setLanguage] = useState('tr');
    const handleLanguageChange = (newLanguage) => {
        setLanguage(newLanguage);
    };

    return (
        <div>
            <Header language={language} onLanguageChange={handleLanguageChange} />
            <Service language={language} />
            <Footer language={language} />
        </div>
    );
}

export default Servicespage;