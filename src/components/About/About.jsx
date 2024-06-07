import React from 'react';
import './About.css';
import html5 from '../../../public/html5.svg';
import css3 from '../../../public/css3.svg';
import js from '../../../public/js.svg';
import react from '../../../public/react.svg';
import sass from '../../../public/sass.svg';
import bootstrap from '../../../public/bootstrap.svg';
import typescript from '../../../public/typescript.svg';
import nextjs from '../../../public/nextjs.svg';
import Github from '../../../public/github.svg';
import strapi from '../../../public/strapi.svg';
import database from '../../../public/database.svg';
import adobephotoshop from '../../../public/adobephotoshop.png';
import adobepremiere from '../../../public/adobepremiere.svg';
import figma from '../../../public/figma.svg';


function About({ language }) {
    return (
        <div className="about-section">
            <h2>{language === 'en' ? 'Who am I?' : 'Kimim?'}</h2>
            {language === 'en' ? (
                <p>
                    I started studying at Gazi University, Department of Mathematics, in 2019. While honing my skills in mathematical thinking, my passion and talent for computers since childhood directed me towards the world of software development. In this regard, I underwent software training at Archis Academy, with a particular focus on Front End development.

                    Through working with JavaScript, I have refined my skills in this area and continually keep abreast of new technologies. My career goal is to become a Front End Web Developer, and the training I received at Archis Academy has played a significant role in achieving this objective. The knowledge acquired and practical experiences gained during the training have strengthened my abilities in designing and developing the frontend of web projects.

                    I am adept at swiftly adapting to technological innovations and solutions, effectively communicating with teammates, and being competent and organized in my work. I approach my tasks with enthusiasm and precision. I am passionate about collaborating with cross-functional teams to help others and achieve common goals. I enjoy participating in multiple projects to enhance productivity and standardize processes.

                    I believe I possess the skills required to excel as a Front End Web Developer and am determined to progress in this field. I am always open to learning and growing, and I will continue to closely follow industry innovations.
                </p>
            ) : (
                <p>
                    2019 yılında Gazi Üniversitesi Matematik Bölümü'nde okumaya başladım. Matematiksel düşünme yeteneklerimi geliştirmekle birlikte, çocukluğumdan beri bilgisayara olan ilgim ve yeteneğim beni yazılım dünyasına yönlendirdi. Bu doğrultuda, Archis Academy'den yazılım eğitimi aldım ve bu eğitim sürecinde özellikle Front End geliştirme üzerine yoğunlaştım.

                    JavaScript üzerinde çalışarak bu alandaki becerilerimi geliştirdim ve sürekli olarak yeni teknolojileri yakından takip ediyorum. Front End Web Developer olarak kariyer yapmayı planlıyorum ve Archis Academy'deki eğitimim, bu hedefime ulaşmamda önemli bir rol oynadı. Eğitim süresince öğrendiğim bilgiler ve kazandığım pratik deneyimler, web projelerinin ön yüzünü tasarlama ve geliştirme konusundaki yeteneklerimi güçlendirdi.

                    Teknolojik yeniliklere ve çözümlere hızlı adapte olabilen, ekip arkadaşlarıyla doğru iletişim kurabilen, yetkin ve organize bir insanım. İşimi isteyerek ve özenle yapıyorum. İnsanlara yardım etme ve ortak bir hedefe ulaşmak için işlevler arası ekiplerle çalışma konusunda tutkuluyum. Verimliliği artırmak için birden fazla projede yer almayı ve süreçleri standartlaştırmayı seviyorum.

                    Başarılı bir Front End Web Developer olmak için gereken becerilere sahip olduğumu düşünüyorum ve bu alanda ilerlemeye kararlıyım. Her zaman öğrenmeye ve gelişmeye açığım ve sektördeki yenilikleri yakından takip etmeye devam edeceğim.


                </p>
            )}
            <h3>{language === 'en' ? 'Skills' : 'Yeteneklerim'}</h3>
            <div className="about-section-skills">
                <h4>Front-End</h4>
                <ul className="about-section-skills-ul">
                    <li><img className='about-section-img' src={html5} alt='html5' />HTML5</li>
                    <li><img className='about-section-img' src={css3} alt='html5' /> CSS3</li>
                    <li><img className='about-section-img' src={js} alt='html5' />JavaScript</li>
                    <li><img className='about-section-img' src={react} alt='html5' />React</li>
                    <li><img className='about-section-img' src={sass} alt='html5' />Sass</li>
                    <li><img className='about-section-img' src={bootstrap} alt='html5' />Bootstrap</li>
                    <li><img className='about-section-img' src={typescript} alt='html5' />TypeScript</li>
                    <li><img className='about-section-img' src={nextjs} alt='html5' />Next.js</li>
                    <li><img className='about-section-img' src={Github} alt='html5' />Git Hub</li>
                </ul>
                <h4>Back-End</h4>
                <ul className="about-section-skills-ul">
                    <li><img className='about-section-img' src={strapi} alt='html5' />Strapi</li>
                    <li><img className='about-section-img' src={database} alt='html5' />SQL</li>
                    <li>PostgreSQL</li>
                </ul>
                <h4>{language === 'en' ? 'Design and Other' : 'Tasarım & Diğer'}</h4>
                <ul className="about-section-skills-ul">
                    <li><img className='about-section-img' src={adobephotoshop} alt='html5' />Adobe Photoshop</li>
                    <li><img className='about-section-img' src={adobepremiere} alt='html5' />Adobe Premiere</li>
                    <li><img className='about-section-img' src={figma} alt='html5' />Figma</li>
                    <li>Canva</li>
                    <li>UI/UX Design</li>
                </ul>
            </div>
        </div>
    );
}

export default About;
