import './Communication.css';
import phonesolid from '../../../public/phonesolid.svg';
import envelope from '../../../public/envelope.svg';

function Communication({ language }) {
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
                </div>
            </div>
        </div>
    );
}

export default Communication;