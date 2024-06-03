import React from 'react';
import './Promotion.css';
import sametcanImg from '../../../public/sametcanimg.jpg';
import resumePDF from '../../../public/SametCanGözüaçıkCV.pdf';

function Promotion({ language }) {
    return (
        <div className='promotionSection'>
            <div className='promotionBox'>
                <div className='promotionTitleBox'>
                    <h1 className='promotionBoxTitleOne'>
                        {language === 'tr' ? 'Merhaba, ben' : 'Hello, I am'}
                    </h1>
                    <h1 className='promotionBoxTitleTwo'>Samet Can</h1>
                    <h1 className='promotionBoxTitleTwo'>Gözüaçık</h1>
                    <h1 className='promotionBoxTitleThree'>
                        {language === 'tr' ? 'Yazılım Geliştirici' : 'Software Developer'}
                    </h1>
                    <a className='promotionPDFLink' href={resumePDF} download="Samet_Can_Gözüaçık_CV.pdf">
                        {language === 'tr' ? 'CV\'mi indir' : 'Download CV'}
                    </a>
                </div>
                <img className='promotionBoxImg' src={sametcanImg} alt='Samet Can Gözüaçık' />
            </div>
        </div>
    );
}

export default Promotion;