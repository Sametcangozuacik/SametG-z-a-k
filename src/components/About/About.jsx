import React from 'react';
import './About.css';


function About({ language }) {
    return (
        <div className="about-section">
            <h2>Samet Can Gözüaçık</h2>
            {language === 'en' ? (
                <p>
                    I started studying at Gazi University's Department of Mathematics in 2019. Due to my talent with computers since childhood, I have been trying to develop myself in the field of software. Currently, I am working on JavaScript and closely following it. I plan to continue my career as a Front End Web Developer. I am a competent and organized person who can quickly adapt to new technologies and solutions, communicate effectively with team members, and perform my job diligently and willingly. I am passionate about helping people and working with cross-functional teams to achieve a common goal. I enjoy being involved in multiple projects to increase efficiency and standardize processes.
                </p>
            ) : (
                <p>
                    2019 yılında Gazi Üniversitesi Matematik Bölümü'nde okumaya başladım. Çocukluğumdan beri bilgisayara olan yeteneğim nedeniyle kendimi yazılım alanında geliştirmeye çalışıyorum. Şu anda JavaScript üzerinde çalışıyorum ve onu yakından takip ediyorum. Kariyerime Front End Web Developer olarak devam etmeyi planlıyorum. Yeni teknolojilere ve çözümlere hızlı adapte olabilen, ekip arkadaşlarıyla doğru iletişim kurabilen, yetkin ve organize bir insanım. İşimi isteyerek ve özenle yapıyorum. İnsanlara yardım etme ve ortak bir hedefe ulaşmak için işlevler arası ekiplerle çalışma konusunda tutkuluyum. Verimliliği artırmak için birden fazla projede yer almayı ve süreçleri standartlaştırmayı seviyorum.
                </p>
            )}
            <h3>{language === 'en' ? 'Skills' : 'Yeteneklerim'}</h3>
            <div className="about-section-skills">
                <ul className="about-section-skills-ul">
                    <li> HTML5</li>
                    <li>CSS3</li>
                    <li>JavaScript</li>
                    <li>React</li>
                    <li>Sass</li>
                    <li>Node.js</li>
                    <li>Next.js</li>
                    <li>Git Hub</li>
                    <li>Canva</li>
                </ul>
            </div>
        </div>
    );
}

export default About;
