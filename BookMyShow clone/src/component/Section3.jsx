import React from 'react'

function Section3() {
  return (
    <div className='h-[700px] w-full  bg-[#2B3148]'>
        <div className='h-[90%] w-[70%]  ms-[10%] '>
            <div className='h-[35%] w-full  text-white'>
                <img src="https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120/premiere-banner-web-collection-202208191200.png" alt=""  className=''/>
                <h2 className='pt-5 text-2xl'>Premieres</h2>
                <p>Brand new releases every Friday</p>
            </div>
            <div className='h-[65%] w-full  grid grid-cols-4 gap-4'>
                <div className='h-[98%] text-white'>
                    <img src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:l-image,i-discovery-catalog@@icons@@bms_premiere_v1.png,t-false,lfo-bottom_left,l-end/et00399544-lxrcpvgqdd-portrait.jpg" alt="" className='h-[83%] rounded-xl'/><br />
                    <span className='text-lg font-medium'>Builder Boys</span><br />
                    <span className='text-base'>Gujrati</span>
                </div>
                <div className='h-[98%] text-white'>
                    <img src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:l-image,i-discovery-catalog@@icons@@bms_premiere_v1.png,t-false,lfo-bottom_left,l-end/et00412607-skdrgazvxt-portrait.jpg" alt="" className='h-[83%] rounded-xl'/><br />
                    <span className='text-lg font-medium'>Ghaath</span><br />
                    <span className='text-base'>Marathi</span>
                </div>
                <div className='h-[98%] text-white'>
                    <img src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:l-image,i-discovery-catalog@@icons@@bms_premiere_v1.png,t-false,lfo-bottom_left,l-end/et00432934-tnygnqmdzm-portrait.jpg" alt="" className='h-[83%] rounded-xl'/><br />
                    <span className='text-lg font-medium'>Kraven The Hunter (Priview)</span><br />
                    <span className='text-base'>English</span>
                </div>
                <div className='h-[98%] text-white'>
                    <img src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:l-image,i-discovery-catalog@@icons@@bms_premiere_v1.png,t-false,lfo-bottom_left,l-end/et00362457-bxeykewtkb-portrait.jpg" alt="" className='h-[83%] rounded-xl'/><br />
                    <span className='text-lg font-medium'>Kraven: The Hunter</span><br />
                    <span className='text-base'>English</span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Section3