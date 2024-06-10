import './Communication.css';
import phonesolid from '../../../public/phonesolid.svg';
import envelope from '../../../public/envelope.svg';
import React, { useState } from 'react';
import emailjs from '@emailjs/browser';





function Communication({ language }) {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');

    function handleNameChange(event) {
        setName(event.target.value);

    }
    function handleEmailChange(event) {
        setEmail(event.target.value);

    }

    function handleSubjectChange(event) {
        setSubject(event.target.value);

    }

    function handleSubmit(event) {
        event.preventDefault();
        if (name === '' || email === '' || subject === '') {
            alert('Lütfen tüm alanları doldurunuz');
            return;
        }
        else {
            alert('Gönderildi');
        }
        console.log(name, email, subject);

        const servicesId = "service_hwjhi7i";
        const templateId = "template_4gios3o";
        const publicKey = "T1AKIjnvOzWEIFhWL";

        const templateParams = {
            name: name,
            email: email,
            subject: subject
        };

        emailjs.send(servicesId, templateId, templateParams, publicKey)
            .then((response) => {
                console.log(response.text);
            }, (error) => {
                console.log(error.text);
            });
    }
    return (
        <div className="communication">
            <div className='communication-section'>
                <h1>İletişim</h1>
                <div>
                    <h3>Birlikte Kahve İçmeye Ne Dersiniz ?</h3>
                    <p>Elbette, beraber çalışarak internet dünyasında başarılı olabileceğimize inanıyorum. Herhangi bir konuda iletişim kurabilir, projelerimizle ilgili detayları, deneyimlerimizi, taleplerimizi ve hatta gelecek hayallerimizi paylaşabiliriz. Birlikte çalışma fırsatını değerlendirerek en iyi sonuçları elde etmek için birlikte çaba gösterebiliriz. Size en kısa sürede geri dönüş yapmak için sabırsızlanıyorum.</p>
                    <div className='communication-section-box'>
                        <img className="footer-social-icon" src={phonesolid} alt="Linkedin" />
                        <a href="tel:507-319-55-05">+90 507 319 55 05</a>
                    </div>
                    <div className='communication-section-box'>
                        <img className="footer-social-icon" src={envelope} alt="Linkedin" />
                        <a href="mailto:sametcanngozuacik@gmail.com"> sametcanngozuacik@gmail.com </a>
                    </div>
                    <div className='communication-section-input-box'>
                        <input className='communication-section-input' value={name} onChange={handleNameChange} type="text" placeholder="Adınız ve Soyadınız" />
                        <input className='communication-section-input' value={email} onChange={handleEmailChange} type="email" placeholder="E-posta Adresiniz" />
                        <input className='communication-section-input-two' value={subject} onChange={handleSubjectChange} type="text" placeholder="Danışmak İstediğiniz Konu" />
                        <button className='communication-section-input-btn' onClick={handleSubmit}>Gönder</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Communication;