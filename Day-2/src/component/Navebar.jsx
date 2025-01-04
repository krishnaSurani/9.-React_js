import '../App.css'
import Logo from '../assets/logo.jpg'
function Navbar() {
    return (
        <header>
            <div className="headline h-[35px] w-full bg-[#282C3F]">
                {/* <p>Avail the lowest cost EMI on any purchase. Shop Now!</p>
                <p> We offer safe and secure shipping. </p>
                <p>Largest Collection of Light-weight gold and diamond Jewellery!</p> */}
            </div>
            <nav className="h-[80px] w-full flex justify-center items-center">
                <div className="logo h-[70%] w-[15%]  flex justify-center items-center">
                    <img src={Logo} alt="" className="h-full w-[70%]" />
                </div>

                <div className="search h-[70%] w-[30%] flex justify-center items-center relative">
                    <i className="ri-search-line absolute text-[#282C3F]" id="search"></i>
                    <input type="text" className="border h-[80%] w-[90%] bg-[#f9f9f9] ps-[40px]" placeholder="Search" />
                    <i className="ri-mic-line absolute ms-[80%] text-[#282C3F]"></i>
                </div>

                <div className="other h-[70%] w-[40%] flex justify-evenly items-center">
                    <div className="h-full w-[11%]  flex justify-center items-center flex-col text-[#282c3f] font-[Nunito]">
                        <i className="ri-map-pin-line text-[25px]"></i><span className="text-xs font-semibold">Offers</span>
                    </div>
                    <div className="h-full w-[11%]  flex justify-center items-center flex-col text-[#282c3f] font-[Nunito]">
                        <i className="ri-map-pin-line text-[25px]"></i><span className="text-xs font-semibold">Find a Store</span>
                    </div>
                    <div className="h-full w-[11%]  flex justify-center items-center flex-col text-[#282c3f] font-[Nunito]">
                        <i className="ri-newspaper-line text-[25px]"></i><span className="text-xs font-semibold">Blog</span>
                    </div>
                    <div className="h-full w-[11%] border-r-2  flex justify-center items-center flex-col text-[#282c3f] font-[Nunito]">
                        <i className="ri-headphone-line text-[25px]"></i><span className="text-xs font-semibold">Contact Us</span>
                    </div>
                    <div className="h-full w-[11%]  flex justify-center items-center flex-col text-[#282c3f] font-[Nunito]">
                        <i className="ri-user-line text-[25px]"></i><span className="text-xs font-semibold">Profile</span>
                    </div>
                    <div className="h-full w-[11%]  flex justify-center items-center flex-col text-[#282c3f] font-[Nunito]">
                        <i className="ri-heart-3-line text-[25px]"></i><span className="text-xs font-semibold">Wishlist</span>
                    </div>
                    <div className="h-full w-[11%] border-r-2 flex justify-center items-center flex-col text-[#282c3f] font-[Nunito]">
                        <i className="ri-shopping-bag-line text-[25px]"></i><span className="text-xs font-semibold">Cart</span>
                    </div>
                    <div className="h-full w-[11%]  flex justify-center items-center flex-col text-[#282c3f] font-[Nunito]">
                        <i className="ri-truck-line text-[25px] text-[#FF8D6D]"></i><span className="text-xs font-semibold">Express</span>
                    </div>
                    <div className="h-full w-[11%]  flex justify-center items-center flex-col text-[#282c3f] font-[Nunito]">
                        <i class="ri-calendar-line text-[25px] text-[#FF8D6D]"></i><span className="text-xs font-semibold">EMI</span>
                    </div>
                </div>
            </nav>
            <div className='h-[45px] w-full border'>
                <div className=' h-full w-[85%] m-auto flex justify-evenly items-center text-[#282c3f] font-semibold'>
                    <a href="">New Arrivals</a>
                    <a href="">Earrings</a>
                    <a href="">Rings</a>
                    <a href="">Pendants</a>
                    <a href="">Necklaces</a>
                    <a href="">Chains</a>
                    <a href="">Bracelets</a>
                    <a href="">Bangles</a>
                    <a href="">All Jewellery</a>
                    <a href="">Wedding Trendition</a>
                    <a href="">Wedding Gifting</a>
                </div>
            </div>
        </header>
    )
}

export default Navbar
