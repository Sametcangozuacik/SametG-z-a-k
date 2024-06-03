import React, { useState } from 'react';
import './Homepage.css';
import Header from '../../components/Header/Header';
import Promotion from '../../components/Promotion/Promotion';
import Footer from '../../components/Footer/Footer';

function Homepage() {
    const [language, setLanguage] = useState('tr');

    const handleLanguageChange = (selectedLanguage) => {
        setLanguage(selectedLanguage);
    };

    return (
        <>
            <Header language={language} onLanguageChange={handleLanguageChange} />
            <Promotion language={language} />
            <Footer language={language} />
        </>
    );
}

export default Homepage;


