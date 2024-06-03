import React, { useState, useEffect } from 'react';
import './AcademyPage.css';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Academy from '../../components/Academy/Academy';


function AcademyPage() {
    const [language, setLanguage] = useState('tr');
    const handleLanguageChange = (newLanguage) => {
        setLanguage(newLanguage);
    };

    return (
        <div>
            <Header language={language} onLanguageChange={handleLanguageChange} />
            <Academy language={language} />
            <Footer language={language} />
        </div>
    );
}

export default AcademyPage;