import React from 'react';
import './Promotion.css'

function Promotion() {
    return (
        <div>
            <div className='promotionSection'>
                <div className='promotionBox'>
                    <div className='promotionTitleBox'>
                        <h1 className='promotionBoxTitleOne'>Selam , ben</h1>
                        <h1 className='promotionBoxTitleTwo'> Samet Can </h1>
                        <h1 className='promotionBoxTitleTwo'> Gözüaçık </h1>
                        <h1 className='promotionBoxTitleThree'> Yazılım Geliştirici </h1>
                    </div>
                    <img className='promotionBoxImg' src='public/sametcanimg.jpg' alt='Samet Can Gözüaçık'></img>
                </div>
            </div>
        </div>

    );
}


export default Promotion;