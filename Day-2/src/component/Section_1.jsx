import React from 'react'
import '../App.css'

function Section_1() {
    return <>
        <div className='h-[700px] w-full bg-[#E6E6E6] pt-5'>
            <div className='h-[95%] w-[85%] m-auto flex justify-evenly items-center flex-col'>
                <div className='h-[25%] w-[70%]  text-center text-[#282c3f] flex justify-evenly items-center flex-col'>
                    <h2 className='text-3xl font-bold'>ONE DAY SHIPPING</h2>
                    <span className='font-[Nunito] pt-2 text-base'>1154 products are available for one-day Delivery</span>
                    <div>
                        <span className='bg-[#282c3f] text-[white] p-2 rounded-full ms-2'>Earrings </span>
                        <span className='bg-[#282c3f] text-[white] p-2 rounded-full ms-2'> Rings </span>
                        <span className='bg-[#282c3f] text-[white] p-2 rounded-full ms-2'> Nacklaces </span>
                        <span className='bg-[#282c3f] text-[white] p-2 rounded-full ms-2'> Pendants </span>
                        <span className='bg-[#282c3f] text-[white] p-2 rounded-full ms-2'> Bracelets </span>
                        <span className='bg-[#282c3f] text-[white] p-2 rounded-full ms-2'> Bangles </span>
                        <span className='bg-[#282c3f] text-[white] p-2 rounded-full ms-2'> Nose pins </span>
                        <span className='bg-[#282c3f] text-[white] p-2 rounded-full ms-2'> Chains </span>
                    </div>
                </div>
                <div className='h-[50%] w-full flex justify-evenly items-center'>
                    <div className='h-[100%] w-[18%] bg-white rounded-xl'>
                        <img src="https://photos.melorra.com/fit-in/515x515/dev/catalogue/images/DK/OPT/580/W23CDK05S_F_580.png" alt="" />
                        <div className="ps-2">
                            <a href="" className='text-xs'>All About Polka  Diamond Earrings</a><br />
                            <span className="font-bold">₹18,853</span><span className='line-through ps- font-bold"2'>₹21,234</span><br />
                            <span className='text-sm text-[#2e9a37] font-medium'>50% OFF on Making Charges </span>
                        </div>
                    </div>
                    <div className='h-[100%] w-[18%] bg-white rounded-xl'>
                        <img src="https://photos.melorra.com/fit-in/515x515/dev/catalogue/images/C3/OPT/580/C22CC304J_F_580.png" alt="" />
                        <div className="ps-2">
                        <a href="" className='text-xs'>X Story Gold Earrings</a><br />
                            <span className="font-bold">₹4,620</span><span className='line-through ps-2 font-bold"'>₹4,744</span><br />
                            <span className='text-sm text-[#2e9a37] font-medium'>10% OFF on Making Charges </span>
                        </div>
                    </div>
                    <div className='h-[100%] w-[18%] bg-white rounded-xl'>
                        <img src="https://photos.melorra.com/fit-in/515x515/dev/catalogue/images/CL/OPT/580/C21CCL61J_M_580.jpg" alt="" />
                        <div className="ps-2">
                        <a href="" className='text-xs'>Dote the Dot Diamond Earrings</a><br />
                            <span className="font-bold">₹8,571</span><span className='line-through ps-2 font-bold"'>₹9,299</span><br />
                            <span className='text-sm text-[#2e9a37] font-medium'>50% OFF on Making Charges </span>
                        </div>
                    </div>
                    <div className='h-[100%] w-[18%] bg-white rounded-xl'>
                        <img src="https://photos.melorra.com/fit-in/515x515/dev/catalogue/images/CL/OPT/580/C21CCL55J_F_580.jpg" alt="" />
                        <div className="ps-2">
                        <a href="" className='text-xs'>Cresent O Chic Gold Earrings</a><br />
                            <span className="font-bold">₹5,577</span><span className='line-through ps-2 font-bold"'>₹5,720</span><br />
                            <span className='text-sm text-[#2e9a37] font-medium'>10% OFF on Making Charges </span>
                        </div>
                    </div>
                    <div className='h-[100%] w-[18%] bg-white rounded-xl'>
                        <img src="https://photos.melorra.com/fit-in/515x515/dev/catalogue/images/CL/OPT/580/C20WCL47S_F_580.jpg" alt="" />
                        <div className="ps-2">
                        <a href="" className='text-xs'>Rhomb N Razzle Diamond Earrings</a><br />
                            <span className="font-bold">₹13,799</span><span className='line-through ps- font-bold"2'>₹16,165</span><br />
                            <span className='text-sm text-[#2e9a37] font-medium'>50% OFF on Making Charges </span>
                        </div>
                    </div>
                </div>
                <div className='h-[10%] w-[20%] flex justify-evenly items-center'>
                    <button className='text-[white] bg-[#FF8D6D] h-[40px] w-[50%] '>VIEW ALL <i class="ri-arrow-right-line"></i></button>
                </div>
            </div>
        </div>
    </>
}

export default Section_1
