import React from 'react'


const ImageSlider = () => {
    const slides = [
        {
            url: 'https://cdn.vatanbilgisayar.com/Upload/BANNER//0banner/2023/0011/16-11-23-ilan-toplu-web.jpg'
        },
        {
            url: 'https://cdn.vatanbilgisayar.com/Upload/BANNER//0banner/2023/0011/oem-yuzde-15-indirim-20-11-23-web.jpg'
        },
        {
            url: 'https://cdn.vatanbilgisayar.com/Upload/BANNER//0banner/2023/0011/vergisiz-urunler-banner-16-11-23-web-rev.jpg'
        },
        {
            url: 'https://cdn.vatanbilgisayar.com/Upload/BANNER//0banner/2023/0011/tecno-spark10pro-16-11-23-ilan-web-rev.jpg'
        },
        {
            url: 'https://cdn.vatanbilgisayar.com/Upload/BANNER//0banner/2023/0011/lenovo-nb-16-11-23-ilan-web-rev.jpg'
        },
        {
            url: 'https://cdn.vatanbilgisayar.com/Upload/BANNER//0banner/2023/0011/lg-tv16-11-23-ilan-web.jpg'
        },
        {
            url: 'https://cdn.vatanbilgisayar.com/Upload/BANNER//0banner/2023/0011/dell-inspiron-17-11-23-web.jpg'
        },
        {
            url: 'https://cdn.vatanbilgisayar.com/Upload/BANNER//0banner/2023/0010/apple-ipad-25-10-23-web.jpg'
        },
        {
            url: 'https://cdn.vatanbilgisayar.com/Upload/BANNER//0banner/2023/0011/samsung-anasayfa-web-rev.jpg'
        },
        {
            url: 'https://cdn.vatanbilgisayar.com/Upload/BANNER//0banner/2023/0011/samsung-tv-gaggia-web.jpg'
        },
        {
            url: 'https://cdn.vatanbilgisayar.com/Upload/BANNER//0banner/2023/0011/axen-tv-10-11-23-web.jpg'
        },
        {
            url: 'https://cdn.vatanbilgisayar.com/Upload/BANNER//0banner/2023/0011/razer-14-11-23-web.jpg'
        },
        {
            url: 'https://cdn.vatanbilgisayar.com/Upload/BANNER//0banner/2023/0011/acer-nitro-6-11-23-web.jpg'
        },
        {
            url: 'https://cdn.vatanbilgisayar.com/Upload/BANNER//0banner/2023/0010/apple-airpods-6-3-23-kategori-web-rev.jpg'
        },
        {
            url: 'https://cdn.vatanbilgisayar.com/Upload/BANNER//0banner/2023/0011/xbox-konsollarinda-tasaruf-edin-thumb.jpg'
        },
        {
            url: 'https://cdn.vatanbilgisayar.com/Upload/BANNER//0banner/2023/0011/huawei-intel-haftanin-urunu-2-11-23-web.jpg'
        },
        {
            url: 'https://cdn.vatanbilgisayar.com/Upload/BANNER//0banner/2023/0011/philips-17-11-23-web.jpg'
        },
        {
            url: 'https://cdn.vatanbilgisayar.com/Upload/BANNER//0banner/2023/0011/samsung-anasayfa-web-rev.jpg'
        },
        {
            url: 'https://cdn.vatanbilgisayar.com/Upload/BANNER//0banner/2023/0011/Vatan_Banner_Ambilight_thumb.jpg'
        },
        
        
    ];
    
  return (
    <div className='container w-3/4 h-[390px] m-auto  relative'>
        <div style={{backgroundImage:`url('${slides[8].url}')`}} className="w-full h-full  bg-center bg-cover duration-500"></div>  
    </div>
  );
}

export default ImageSlider