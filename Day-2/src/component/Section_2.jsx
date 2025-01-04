import React from "react"
import '../App.css'

function Section_2() {
    return (
        <div className="h-[1100px] w-full flex justify-evenly items-center flex-col">
            <div className="h-[500px] w-[85%] m-auto flex justify-evenly items-center flex-wrap">
                <div className="h-[15%] w-[100%] text-center pt-3">
                    <p className="text-xl font-bold">Gifting Made Easy</p>
                    <span className="text-base text-[#8a8a8f]">Explore Gifts in gold for all your loved ones</span>
                </div>
                <div className="a h-[70%] w-[27%] rounded-xl text-center text-[white] flex justify-center items-center flex-col">
                    <p className="text-2xl font-bold">For Father</p>
                    <p>To the man who never lets you fall.<br /> Timeless gifts for Dad</p>
                </div>
                <div className="b h-[70%] w-[27%] rounded-xl text-center text-[white] flex justify-center items-center flex-col">
                    <p className="text-2xl font-bold">For Sister</p>
                    <p>Let gold strengthen your sibling bond.</p>
                </div>
                <div className="c h-[70%] w-[27%] rounded-xl text-center text-[white] flex justify-center items-center flex-col">
                    <p className="text-2xl font-bold">For Husband</p>
                    <p>Minimal, Effortless &amp; Easy-to-style <br /> jewellery designs your man will adore</p>
                </div>
            </div>

            <div className="h-[500px] w-[85%] m-auto flex justify-evenly items-center flex-wrap">
                <div className="h-[15%] w-[100%] text-center pt-3">
                    <p className="text-2xl font-bold">Discover our Collections</p>
                    <span className="text-lg text-[#8a8a8f]">From the runways of Milan, Paris, & London, right into your jewellery box!</span>
                </div>
                <div className="h-[60%] w-[22%] rounded-2xl text-center">
                    <img src="https://photos.melorra.com/fit-in/1024x1024/dev/banners/RoyalGarden_HP_C_M_W24_RoyalGarden.png" alt="" className="h-[80%] w-full " />
                    <p className="text-xl">Royal Garden</p>
                    <p className="text-base">Collection</p>
                </div>
                <div className="h-[60%] w-[22%] rounded-2xl text-center">
                    <img src="https://photos.melorra.com/fit-in/1024x1024/dev/banners/TieredFringe_HP_C_M_W24_TieredFringe.png" alt="" className="h-[80%] w-full " />
                    <p className="text-xl">Tiered Fringe</p>
                    <p className="text-base">Collection</p>
                </div>
                <div className="h-[60%] w-[22%] rounded-2xl text-center">
                    <img src="https://photos.melorra.com/fit-in/1024x1024/dev/banners/TexturedFloral_HP_C_M_W24_TexturedFloral.png" alt="" className="h-[80%] w-full " />
                    <p className="text-xl">Textured Floral</p>
                    <p className="text-base">Collection</p>
                </div>
                <div className="h-[60%] w-[22%] rounded-2xl text-center">
                    <img src="https://photos.melorra.com/fit-in/1024x1024/dev/banners/RoyalGarden_HP_C_M_W24_RoyalGarden.png" alt="" className="h-[80%] w-full " />
                    <p className="text-xl">Frosted Sparkle</p>
                    <p className="text-base">Collection</p>
                </div>
                <button className='text-[white] bg-[#FF8D6D] h-[40px] w-[20%] '>VIEW ALL COLLECTION <i class="ri-arrow-right-line"></i></button>
                {/* <button className="border">VIEW ALL COLLECTION</button> */}
            </div>
            
        </div>
    )
}

export default Section_2