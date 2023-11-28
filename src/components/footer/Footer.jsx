import React, { useState } from 'react'

const Footer = () => {
    const [className, setClassname] = useState('hidden')
    const getClass = () =>{
        return className
    }
  

    return (
        <div class="container mx-auto flex flex-col divide-y w-3/4">
            <div className=''>
                <div className="container mx-auto  flex justify-between mt-10 w-[85%]">
                    <span className="malltext">Mağazalar:</span>
                    <span className="customerLine">Müşteri Hattı:</span>
                    <span className="social">Sosyal Medya:</span>
                    <span className="downloadlinks">İndirmek İçin:</span>
                </div>
                <div className="container mx-auto links flex flex-row justify-between mt-5 mb-10 w-[85%]">
                    <a className="findMall font-semibold">Mağaza Bul</a>
                    <a className="findMall font-semibold ml-8">0850 222 56 56</a>
                    <div className="socialIcons flex flex-row">
                        <img src='https://cdn.vatanbilgisayar.com/images/frontend/icontwitterx.svg' className="icons" />
                        <img src='https://cdn.vatanbilgisayar.com/images/frontend/icontwitterx.svg' className="icons" />
                        <img src='https://cdn.vatanbilgisayar.com/images/frontend/icontwitterx.svg' className="icons" />
                        <img src='https://cdn.vatanbilgisayar.com/images/frontend/icontwitterx.svg' className="icons" />
                    </div>

                    <img src='https://www.vatanbilgisayar.com/upload/general/taksit-footer/play-store.png' className="findMall" />
                </div>

            </div>
            <div>
                <div className="container mx-auto sitemap flex justify-between w-[95%] mt-10">
                    <div className="flex gap-x-8">
                        <a href='#' className="site hover:text-gray-400">Site Haritası</a>
                        <a href='#' className="site hover:text-gray-400">Gizlilik Politikamız</a>
                        <a href='#' className="site hover:text-gray-400">SSS</a>
                        <a href='#' className="site hover:text-gray-400">Kişisel Verilerin Korunması Kanunu</a>
                        <a href='#' className="site hover:text-gray-400">Sitemap</a>
                    </div>
                    <img src='https://www.vatanbilgisayar.com/upload/general/taksit-footer/payment-types.jpg' className="payments" />
                </div>
                <div className="container mx-auto rights mt-10 w-[1400px]">
                    <span className="1 font-extralight">Vatan Bilgisayar 1983 Yılında Elmadağ’da açtığı mağaza ile Türkiye’nin ilk bilgisayar mağazası unvanını taşımaktadır. 10 yılı aşkın süredir online alışveriş sitesi vatanbilgisayar.com ile Türkiye’nin her noktasında milyonlarca müşteriye ulaşmaktadır. Dünyaca ünlü teknoloji markalarının binlerce ürün çeşidiyle her bütçe ve tarza hitap ediyoruz.
                        <span className={getClass()}>Uygun fiyatlarla sizlere hizmet etmek için çalışıyoruz. Vatan Bilgisayar ailesi olarak başlıca hedefimiz Türkiye’nin bir uçtan bir ucuna kadar donatılmış mağazalarımızla her bütçeye hitap ederek siz kullanıcılarımızın memnuniyetini sağlamaktır. Online alışveriş sitemizde taksit seçenekleri, kolay iade, hızlı kargo gibi hizmetler ile alışveriş deneyiminizi arttırmaya, kolaylaştırmaya ve kısa sürede sonuç almanızı sağlamaya çalışıyoruz. Vatan Bilgisayar’dan satın alacağınız tüm ürünleri orijinal paketleriyle kusursuz olarak tarafınıza iletmekteyiz. Elektronik ürünlerde Akıllı Cep Telefonundan Televizyona, Akıllı Saatten Notebooklara ve farklı kategoride binlerce ürüne kolaylıkla ulaşabilirsiniz. Ayrıca kişisel ihtiyaçlarınız, eviniz ve ofisiniz için de Vatan Bilgisayar geniş ürün gamıyla size bir tık kadar yakın.
                            <span className="2">Günümüz Çağının Gelişen ve Sürekli Yenilenen Teknolojisi Akıllı Cep Telefonlarını birçok marka ve modellerini Vatan Bilgisayar’da bulabilirsiniz.Tüm ihtiyaçlarınıza cevap verebilecek Apple, General Mobile, Huawei, Oppo, Realme, Samsung, Tcl, Tecno, Vivo, Xiaomi gibi markalar tarafından üretilen akıllı cep telefonlarını www.vatanbilgisayar.com adresinden veya Vatan Bilgisayar mağazalarından satın alabilirsiniz.
                            </span>
                            <span className="3">Notebookdan Masaüstü Bilgisayarına, Oyuncu Bilgisayarından Tablete Kadar Son Teknoloji Ürünlerini Vatan’da farklı özellik ve modelde inceleyebilirsiniz. Dizüstü bilgisayarları, masaüstü bilgisayarları, oyun bilgisayarları, geniş ekranlı monitörler, kavisli ekran, oyuncu monitörleri, oem hazır sistemleri gibi çeşitli ürün kategorilerini web sitemiz üzerinden sipariş verebilir, Acer, Apple, Asus, Casper, Exper, HP, Lenovo, Samsung, Msi, AOC gibi ünlü markaları uygun fiyat seçenekleri ile Vatan Bilgisayar’dan satın alabilirsiniz.
                            </span>
                            <span className="4">Eğlencenin Vazgeçilmez Adresi Haline Gelen Televizyon modellerini Vatan Bilgisayar aracılığıyla inceleyebilir ve satın alabilirsiniz. Axen, Grundig, LG, Onvo, Philips, Samsung, Seg, Sony, Tcl ve Vestel markaları tarafından üretilen televizyonları, ihtiyaçlarınızı göz önüne alarak farklı özelliklere, tasarıma ve donanıma sahip televizyonları web sitemiz üzerinden ya da Vatan Bilgisayar mağazalarından inceleyerek, en uygun olan ürünü satın alabilirsiniz. Televizyon ve bilgisayardaki görüntüleri düz bir zemine Projeksiyon Cihazları ile yansıtabilirsiniz. LCD, LED veya DLP gibi yansıtma sistemleriyle evinizde sinema salonu oluşturabilirsiniz. Okul, iş yerleri gibi kalabalık gruplara gösteri yapmak için kolaylık sağlamaktadır. Epson, Philips, ViewSonic gibi markalar sizleri bekliyor.
                            </span>
                            <span className="5">Bilgisayarınızı Daha İyi Kullanabilmeniz İçin Bilgisayar Bileşenleri, birçok açıdan fayda sağlayacak ve işlerinizi daha da kolaylaştıracaktır. Bilgisayar bileşenleri ve bilgisayar oem parçaları AMD, AOC, Apple, Asus, Cooler Master, Corsair, Cougar, MSI, OEM, Rampage, Toshiba gibi marka seçenekleriyle incelemeniz ve satın almanız için Vatan Bilgisayar’da sizleri bekliyor. Web sitemizde bulunan Pc Toplama sayfası aracılığıyla, bilgisayar toplama sihirbazına erişerek, yaptığınız birbiriyle son derece uyumlu ve sorunsuz çalışacak tüm donanım cihazlarını toplayabilir, kendinize özel kurduğunuz bilgisayar sisteminize ekleyerek, hayallerinizdeki bilgisayara kavuşabilirsiniz. PC ve Notebook uyumlu Corsair, Crucial, Gskill, Kingston marka ramleri uygun fiyatlı taksit seçenekleri, kampanya ve indirimlerle Vatan Bilgisayar'dan satın alabilirsiniz. İşlemciler bilgisayarın genel performansından sorumlu en önemli donanımıdır. Core i3, Core i5, Core i7,  Amd ve Intel işlemcilerini taksit seçenekleriyle satın almak için Vatan Bilgisayar’ı takip edin.
                            </span>
                            <span className="6">Manzara Fotoğrafları veya Video Çekimlerinin yanı sıra askeriye, trafik ve tarım gibi alanlarda da kullanılan  DJI marka drone ve ev elektroniği kategorimizden inceleyebilirsiniz. Eğer fotoğraf ve video çekimlerinize farklı bir boyut kazandırmak istiyorsanız Video ve Outdoor Kameralar işte tam da sizin için uygun cihazlardır. GOPRO, SONY marka video ve Aksiyon & Outdoor Kamera Aksesuarlarına en yakın Vatan Bilgisayar mağazamızdan veya web sitemizden ulaşabilirsiniz. Ofisinizde Yazıcı, Tarayıcı, Kartuş, Toner, Kâğıt ve CD gibi sarf malzemesi ihtiyaçlarınız için bu alanda öncü olan Brother, Xerox, Canon, Epson, HP gibi markaların yüzlerce ürününü tek tıkla kapınıza kadar getirelim.
                            </span>
                            <span className="7">Evinizin olmazsa olmazları;Küçük Ev Aletleri, Fakir, Delonghi, Grundig, Tefal, Korkmaz, Braun, Arzum, Nespresso ve daha birçok markanın modelleri cep dostu fiyatlarla sizlerle. Elektrikli ev aletlerinde; süpürgeler, ütüler, soğutma ve ısıtmalar gibi eviniz için önem arz eden  kategorilerde dilediğiniz her ürünü bulabilirsiniz. Mutfağınızda bulunması gereken blendarlar, tost makineleri, rondolar, fritözler, mikserler, mutfak şefleri, türk kahve makineleri, filtre kahve makineleri, çay makineleri, katı meyve sıkacakları ve birçok kategorideki ürünler Vatan Bilgisayar’da.
                            </span>
                            <span className="7">Elektrikli Kişisel Bakım Ürünleri; saç maşaları, saç düzleştiricileri, saç kurutma makineleri, epilasyon aletleri, tıraş makineleri, ağız ve diş bakım ürünleri, şarjlı diş fırçaları gibi ürünlerini Arzum, Braun, Philips, Remington, Grundig gibi bir çok markalara ait web sitemizden inceleyebilirsiniz. Yüzlerce ünlü markaya ait ürünleri hızlı bir şekilde çeşitli ödeme seçenekleriyle vatanbilgisayar.com’dan güvenli bir şekilde satın alabilirsiniz. Keyifli alışverişler dileriz..
                            </span>
                        </span>
                    </span>
                    <button class=" text-blue-500 " onClick={() => setClassname('show flex flex-col gap-y-4 mt-4')}>DEVAMINI GÖR</button>
                    <div className="squarecode mt-5 container mx-auto w-[210px]  ">
                        <img className='w-40' src="https://static.wixstatic.com/media/529f97_011c8befc35f4bf987b5324a4c7d2709~mv2.png/v1/fill/w_280,h_280,al_c,lg_1,q_85/529f97_011c8befc35f4bf987b5324a4c7d2709~mv2.png" alt="" />
                    </div>
                    <div className="container mx-auto w-[400px] copyRight text-gray-400 mt-8">Copyright © 2023 Vatan Bilgisayar San. ve Tic. A.Ş</div>
                </div>
            </div>

        </div>
    )
}

export default Footer