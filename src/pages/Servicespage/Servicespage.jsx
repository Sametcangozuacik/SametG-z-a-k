import React, { useState, useEffect } from 'react';
import './Servicespage.css';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';


function Servicespage() {
    const [language, setLanguage] = useState('tr');
    const handleLanguageChange = (newLanguage) => {
        setLanguage(newLanguage);
    };

    return (
        <div>
            <Header language={language} onLanguageChange={handleLanguageChange} />
            <Footer language={language} />
        </div>
    );
}

export default Servicespage;