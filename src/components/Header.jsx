import React from 'react'
import Swiper from 'swiper';
import 'swiper/css';

const Header = () => {
    return (
        <><div className='container mx-auto w-2/4 uptobbarMenu'>
            <div className="container font-\[800] font-light h-11 flex justify-between items-center">
                <a href='#' className="text-blue-font uptopbarLinks">Web'e özel</a>
                <a href="#" className="text-normal-font uptopbarLinks">Yeni</a>
                <a href="#" className="text-normal-font uptopbarLinks">Hazır Sistem</a>
                <a href="#" className="text-normal-font uptopbarLinks">PC Toplama</a>
                <a href="#" className="text-normal-font uptopbarLinks">Sipariş Takibi</a>
                <a href="#" className="text-normal-font uptopbarLinks">İade</a>
                <a href="#" className="text-normal-font uptopbarLinks">Mağazalar</a>
                <a href="#" className="text-normal-font uptopbarLinks">İşe Alım</a>
                <a href="#" className="text-normal-font uptopbarLinks">Bize Ulaşın</a>
                <a href="#" className="text-normal-font uptopbarLinks">Gaming</a>
            </div>
        </div>
            <div className="container mx-auto w-3/4 topbarMenu">
                <div className="container h-20 flex items-center justify-between">
                    <img className='w-40' src="https://cdn.vatanbilgisayar.com/UPLOAD/vatan40.png" alt="" />
                    <div>
                        <input type="text" id="search_item" class="bg-gray-50 border  text-gray-600 text-sm rounded-lg  block w-60 p-2.5 dark:bg-gray-100 dark:placeholder-gray-600 dark:text-dark dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Aramak istediğiniz ürünü yazın">
                        </input>
                    </div>
                    <div className="flex gap-x-8 log-list">
                        <button class="bg-blue-800 hover:bg-blue-900 text-white font-bold py-2 px-4 rounded-full">GİRİŞ YAP</button>
                        <button class="bg-blue-800 hover:bg-blue-900 text-white font-bold py-2 px-4 rounded-full">SEPETİM</button>
                    </div>
                </div>
            </div>
            <div className= "container mx-auto w-3/4 downbarMenu ">
                <div className="container h-20 font-semibold flex justify-between items-center  ">
                    <a href='#' className="text-normal-font text-opacity-70 transition-all hover:text-opacity-100">Telefon</a>
                    <a href="#" className="text-normal-font text-opacity-70 transition-all hover:text-opacity-100">Bilgisayar</a>
                    <a href="#" className="text-normal-font text-opacity-70 transition-all hover:text-opacity-100">Tv,Ev Elektroniği</a>
                    <a href="#" className="text-normal-font text-opacity-70 transition-all hover:text-opacity-100">Bilgisayar Parçaları</a>
                    <a href="#" className="text-normal-font text-opacity-70 transition-all hover:text-opacity-100">Foto,Kamera</a>
                    <a href="#" className="text-normal-font text-opacity-70 transition-all hover:text-opacity-100">Ofis,Kırtasiye</a>
                    <a href="#" className="text-normal-font text-opacity-70 transition-all hover:text-opacity-100">Aksesuar</a>
                    <a href="#" className="text-normal-font text-opacity-70 transition-all hover:text-opacity-100">İşe Alım</a>
                    <a href="#" className="text-normal-font text-opacity-70 transition-all hover:text-opacity-100">Oyun,Hobi</a>
                    <a href="#" className="text-normal-font text-opacity-70 transition-all hover:text-opacity-100">Ev,Mutfak</a>
                    <a href="#" className="text-normal-font text-opacity-70 transition-all hover:text-opacity-100">Kişisel Bakım</a>
                    <a href="#" className="text-normal-font text-opacity-70 transition-all hover:text-opacity-100">Soğutma,Isıtma</a>

                </div>
            </div>

        </>
    )
}

export default Header