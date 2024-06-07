import './service.css';
import services1 from '../../../public/services1.png';
import services2 from '../../../public/services2.png';
import services3 from '../../../public/services3.png';
import services4 from '../../../public/services4.svg';
import services5 from '../../../public/services5.png';
import services6 from '../../../public/services6.png';



function service({ language }) {
    return (
        <div className="service-section">
            <h2>{language === 'en' ? 'My services' : 'Hizmetlerim'}</h2>
            <div className="service-section-container">
                <div className="service-section-box">
                    <h3>{language === 'en' ? 'Corporate Web Design Service' : 'Kurumsal Web Tasarım Hizmeti'}</h3>
                    <img src={services1} alt="Corporate Web Design Service" />
                    {language === 'en' ? (
                        <p>
                            With our corporate web design service, we enable the corporate identities of institutions or businesses to be presented on the internet in the most accurate way, by using the most up-to-date software and graphic design technologies. You should not forget that the better you promote your company on the internet, the more feedback you can get.
                        </p>
                    ) : (
                        <p>
                            Kurumsal web tasarım hizmetimiz ile, en güncel yazılım ve grafik tasarım teknolojilerini kullanarak, kurumların veya işletmelerin kurumsal kimliklerinin internette en doğru şekilde lanse edilmesine imkân tanımaktayız. Unutmamanız gerekir ki, internette firmanızı ne kadar iyi tanıtırsanız, o kadar çok geri dönüş elde edebilirsiniz.
                        </p>
                    )}
                    <a href="https://wa.me/905073195505" rel="nofollow" target="_blank">Daha Detaylı Bilgi</a>
                </div>
                <div className="service-section-box">
                    <h3>{language === 'en' ? 'AMP Web Design Service' : 'AMP Web Tasarım Hizmeti'}</h3>
                    <img src={services2} alt="Corporate Web Design Service" />
                    {language === 'en' ? (
                        <p>
                            Nowadays, when digital technologies have developed significantly, it is extremely important to be online at all times and take part in the interaction process everywhere. The online world, which Internet users visit through different electronic devices, also offers great convenience in mobile use.
                            AMP, which stands for "Accelerated Mobile Pages", is an open source software library developed by Google software engineers. It offers extremely fast page opening and navigation experiences, especially for mobile device users.
                        </p>
                    ) : (
                        <p>
                            Dijital teknolojilerin ciddi bir gelişim gösterdiği günümüzde her an çevrim içi olmak ve her yerde etkileşim sürecinin içerisinde yer almak son derece önemli. İnternet kullanıcılarının farklı elektronik aygıtlar aracılığıyla ziyaret ettiği çevrim içi dünya mobil kullanımda da büyük kolaylıklar sunuyor.
                            Açılımı”Accelerated Mobile Pages” yani ”Hızlandırılmış Mobil Sayfalar” olan AMP, Google yazılım mühendisleri tarafından geliştirilen, açık kaynak kodlu bir yazılım kütüphanesidir. Özellikle mobil cihaz kullanıcıları için son derece hızlı sayfa açılış ve gezinme deneyimleri sunmaktadır.
                        </p>
                    )}
                    <a href="https://wa.me/905073195505" rel="nofollow" target="_blank">Daha Detaylı Bilgi</a>
                </div>
                <div className="service-section-box">
                    <h3>{language === 'en' ? 'Personal Website Service' : 'Kişisel Web Sitesi Hizmeti'}</h3>
                    <img src={services4} alt="Corporate Web Design Service" />
                    {language === 'en' ? (
                        <p>
                            Having a personal website that reflects you in the best way in the digital world means that you can reach the audiences you aim to reach in the shortest way. In addition, your history, goals, experiences, shares, communication, etc. By owning a personal website where your information will be included, you will, in a sense, create a dynamic personal promotion site.
                        </p>
                    ) : (
                        <p>
                            Dijital dünyada sizi en iyi şekilde yansıtacak kişisel bir web sitenizin olması demek, ulaşmayı hedeflediğiniz kitlelere en kısa yoldan erişmeniz demektir. Ayrıca geçmişiniz, hedefleriniz, tecrübeleriniz, paylaşımlarınız, iletişim vb. bilgilerinizin yer alacağı kişisel bir web sitesi sahibi olarak, bir anlamda dinamik bir kişisel tanıtım sitesi oluşturmuş olursunuz.
                        </p>
                    )}
                    <a href="https://wa.me/905073195505" rel="nofollow" target="_blank">Daha Detaylı Bilgi</a>
                </div>
                <div className="service-section-box">
                    <h3>{language === 'en' ? 'Product Promotion Site Service' : 'Ürün Tanıtım Sitesi Hizmeti'}</h3>
                    <img src={services3} alt="Corporate Web Design Service" />
                    {language === 'en' ? (
                        <p>
                            The more people you deliver your products to in the digital environment, the more awareness and sales opportunities you will gain. Today, the most effective and cheapest advertisement for your products is to have a professional product promotion site for your company. We briefly call corporate or individual works that have more creative design norms and less and concise content compared to e-commerce sites, product promotion sites.
                        </p>
                    ) : (
                        <p>
                            Dijital ortamda ürünlerinizi ne kadar çok kişiye ulaştırırsanız, o kadar çok bilinirlik ve satış fırsatı elde etmiş olursunuz. Günümüzde ürünlerinizle alakalı en etkili ve en ucuz reklam, firmanıza ait profesyonel bir ürün tanıtım sitenizin bulunmasıdır. E-Ticaret sitelerine oranla daha kreatif tasarım normlarına sahip, daha az ve öz içerikli kurumsal veya bireysel çalışmalara kısaca ürün tanıtım sitesi diyoruz.
                        </p>
                    )}
                    <a href="https://wa.me/905073195505" rel="nofollow" target="_blank">Daha Detaylı Bilgi</a>
                </div>
                <div className="service-section-box">
                    <h3>{language === 'en' ? 'Tourism & Organization Website Design' : 'Turizm & Organizasyon Sitesi Tasarımı'}</h3>
                    <img src={services5} alt="Corporate Web Design Service" />
                    {language === 'en' ? (
                        <p>
                            In today's conditions, thanks to the developing technology and changing social awareness, the needs of businesses in the tourism and organization sector for the web world are increasing. With easily accessible, modern, innovative, responsive and sustainable websites, it becomes much easier for companies in the tourism and organization sector to reach new customers or relevant communities.

                        </p>
                    ) : (
                        <p>
                            Günümüz şartlarında gelişen teknoloji ve değişen toplum bilinci sayesinde, turizm ve organizasyon sektöründeki işletmelerin web dünyasına yönelik ihtiyaçları artmaktadır. Kolay ulaşılabilir, modern, yenilikçi, duyarlı ve sürdürülebilir web siteleri ile turizm ve organizasyon sektöründeki firmalar için yeni müşterilere veya ilgili topluluklara ulaşmak fazlasıyla kolaylaşmaktadır.
                        </p>
                    )}
                    <a href="https://wa.me/905073195505" rel="nofollow" target="_blank">Daha Detaylı Bilgi</a>
                </div>
                <div className="service-section-box">
                    <h3>{language === 'en' ? 'Federation, Foundation and Association Website Design Service' : 'Federasyon, Vakıf ve Dernek Sitesi Tasarımı Hizmeti'}</h3>
                    <img src={services6} alt="Corporate Web Design Service" />
                    {language === 'en' ? (
                        <p>
                            Today, all federations, associations and foundation organizations, regardless of sector, need corporate websites to better convey their activities to relevant users. In the digital world, organizations can easily reach relevant communities with a modern, responsive, mobile compatible, high user experience, comprehensive and sustainable website.
                        </p>
                    ) : (
                        <p>
                            Günümüzde sektör fark etmeksizin tüm federasyon, dernek ve vakıf kuruluşlarının faaliyetlerini ilgili kullanıcılara daha iyi ulaştırabilmeleri için kurumsal web sitelerine ihtiyaç duymaktadırlar. Kuruluşlar dijital dünyada, modern, duyarlı, mobil uyumlu, kullanıcı deneyimi yüksek, kapsamlı ve sürdürülebilir bir web sitesi ile, ilgili topluluklara kolayca ulaşabilmektedir.
                        </p>
                    )}
                    <a href="https://wa.me/905073195505" rel="nofollow" target="_blank">Daha Detaylı Bilgi</a>
                </div>
            </div>
        </div>
    );
}

export default service;