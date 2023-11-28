import React from 'react'

const Webspecial = () => {
    return (
        <div className='bg-gray-100 h-[450px]'>
            <div className="w-3/4 container mx-auto flex items-center justify-between">
                <span className="text mt-10">Web'e Özel Sınırlı Stok</span>
                <button className='border-2 border-gray rounded-full w-60 h-14 mt-8 font-semibold'>Tümünü Gör</button>
            </div>
            <div className="container mx-auto flex w-[1000px] mt-5">
            <div className="w-[500px] bg-white  border-2 border-gray rounded-lg pl-9 pr-9 pt-6 pb-6 mb-10 ">
                
                <button className='flex'>
                    <img className="w-60 mx-auto" src="https://cdn.vatanbilgisayar.com/Upload/PRODUCT/xiaomi/thumb/138398-1_large.jpg" alt="" />
                    <div className="flex  flex-col">
                    <span className='mb-10'>Xiaomi Redmi Note 12 6/128GB Akıllı Telefon Gri</span>
                    <h3 className='text-blue-font font-bold text-4xl mb-6'>7.999 TL</h3>
                    <span className="container bg-gray border-2 border-blue-900 rounded-lg  px-10 py-1">KARGO BEDAVA</span>
                    </div>
                </button>
                
            </div>
            <div className="w-[500px] bg-white border-2 border-gray  rounded-lg pl-9 pr-9 pt-6 pb-6 mb-10 mx-4">
                
                <button className='flex'>
                    <img className="w-60 mx-auto" src="https://cdn.vatanbilgisayar.com/Upload/PRODUCT/xiaomi/thumb/138398-1_large.jpg" alt="" />
                    <div className="flex  flex-col">
                    <span className='mb-10'>Xiaomi Redmi Note 12 6/128GB Akıllı Telefon Gri</span>
                    <h3 className='text-blue-font font-bold text-4xl mb-6'>7.999 TL</h3>
                    <span className="container bg-gray border-2 border-blue-900 rounded-lg  px-10 py-1">KARGO BEDAVA</span>
                    </div>
                </button>
                
            </div>
           
            
            </div>

        </div>
    )
}

export default Webspecial