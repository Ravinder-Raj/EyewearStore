import React from 'react'
import discount from '../asset/discount.png'
import shipping from '../asset/delivery.png'
import payment from '../asset/payment.png'
const FooterCard = ()=>{
    return (
        <div className='flex  mt-10 justify-around mx-auto max-md:flex-col max-md:items-center max-md:flex-wrap max-sm:flex-wrap  relative bg-slate-50 '>
    <div className='flex flex-col items-center border border-slate-100 w-full  h-60  p-5 space-y-3 max-md:w-full  max-md:h-full max-lg:h-full'>
        <img className='h-16 ' src={discount} alt="" />
        <h1 className='text-2xl'>BIG DISCOUNT</h1>
        <h2 className='text-center'>Unlock incredible savings with our big discount event – shop now and indulge in unbeatable prices, turning your desires into affordable realities!</h2>
    </div>
    <div className='flex flex-col items-center border border-slate-100 w-full max-md:w-full  h-60  space-y-3 max-md:h-full p-5 max-lg:h-full'>
        <img className='h-16 w-20' src={shipping} alt="" />
        <h1 className='text-2xl'>FREE SHIPPING</h1>
        <h2 className='text-center'>Unlock incredible savings with our big discount event – shop now and indulge in unbeatable prices, turning your desires into affordable realities!</h2>
    </div>
    <div className='flex flex-col items-center border border-slate-100 w-full max-md:w-full  h-60  space-y-3 max-md:h-full p-5 max-lg:h-full'>
        <img className='h-16 w-20' src={payment} alt="" />
        <h1 className='text-2xl'>SECURE PAYMENTS</h1>
        <h2 className='text-center'>Unlock incredible savings with our big discount event – shop now and indulge in unbeatable prices, turning your desires into affordable realities!</h2>
    </div>
</div>

    )
}
export default FooterCard;