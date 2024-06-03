import React, { useState, useEffect } from 'react';
import './AboutPage.css';
import Header from '../../components/Header/Header';
import About from '../../components/About/About';
import Footer from '../../components/Footer/Footer';

function AboutPage() {
    const [language, setLanguage] = useState('tr');
    const handleLanguageChange = (newLanguage) => {
        setLanguage(newLanguage);
    };

    return (
        <div className="AboutPage">
            <Header language={language} onLanguageChange={handleLanguageChange} />
            <About language={language} />
            <Footer language={language} />

        </div>
    );
}

export default AboutPage;