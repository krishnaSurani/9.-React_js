import { useState } from "react"
import i1 from "./image/i1.png"
import "../App.css"
function LoginSingup()
{

    const [state,setState]=useState(true)
    
    return (
       
           <div className="main bg-[#F1F3F6] h-[600px] w-[100%] flex justify-center items-center ">

          { state==true?
           <div className="form h-[530px] w-[55%] border shadow-lg flex">
            <div className="f1 h-[100%] w-[40%] bg-[#2874F0] flex flex-col items-start">
                <h1 className="text-[28px] font-semibold text-[white] mt-[12%] ml-[8%]">Login</h1>
                <p className="text-[19px] text-[#DBDBDB] w-[85%] ml-[8%] mt-[4%]">Get access to your Orders, Wishlist and Recommendations</p>
                <img src={i1} alt="Login Illustration" className="mt-[47%] ml-[15%]" />
            </div>
            <div className="f2 h-[100%] w-[60%] flex flex-col items-center">
                    <input type="email" name="" id=""  className="h-[40px] bg-[transparent] border-b w-[85%] ps-[5px] mt-[15%]" placeholder="Enter Email"/>
                    <input type="password" name="" id="" className="h-[40px] bg-[transparent] border-b w-[85%] ps-[5px] mt-[15px]"  placeholder="Enter Password"/>
                    <p className="text-[12px] text-[gray] ml-[-12%] mt-[25px]">By continuing, you agree to Flipkart's <a href="" className="text-[#2874F0]">Terms of Use</a> and <a href="" className="text-[#2874F0]">Privacy Policy</a>.
                    </p>
                    <button className="h-[45px] w-[85%] bg-[#FB641B] text-[white] rounded-[3px] font-semibold mt-[20px]"  >Log in</button>
                    <p className="text-sm font-bold text-[#2874F0] cursor-pointer mt-[40%]" onClick={()=>{
                        setState(false)
                    }}>New to Flipkart? Create an account</p>
            </div>
            </div>
            :
            <div className="form h-[530px] w-[55%] border shadow-lg flex">
            <div className="f1 h-[100%] w-[40%] bg-[#2874F0] flex flex-col items-start">
                <h1 className="text-[28px] font-semibold text-[white] mt-[12%] ml-[8%] w-[80%]">Looks like you're new here!</h1>
                <p className="text-[19px] text-[#DBDBDB] w-[85%] ml-[8%] mt-[4%]">Sign up with your mobile number to get started</p>
                <img src={i1} alt="Login Illustration" className="mt-[37%] ml-[15%]" />
            </div>
            <div className="f2 h-[100%] w-[60%] flex flex-col items-center">
                     <input type="text" name="" id=""  className="h-[40px] bg-[transparent] border-b w-[85%] ps-[5px] mt-[15%]" placeholder="Enter Username"/>
                    <input type="email" name="" id=""  className="h-[40px] bg-[transparent] border-b w-[85%] ps-[5px] mt-[15px]" placeholder="Enter Email"/>
                    <input type="password" name="" id="" className="h-[40px] bg-[transparent] border-b w-[85%] ps-[5px] mt-[15px]"  placeholder="Enter Password"/>
                    <p className="text-[12px] text-[gray] ml-[-12%] mt-[25px]">By continuing, you agree to Flipkart's <a href="" className="text-[#2874F0]">Terms of Use</a> and <a href="" className="text-[#2874F0]">Privacy Policy</a>.
                    </p>
                    <button className="h-[45px] w-[85%] bg-[#FB641B] text-[white] rounded-[3px] font-semibold mt-[20px]"  >Sign up</button>
                    <button className="h-[45px] w-[85%] bg-[white] shadow-md border  rounded-[3px] font-semibold mt-[20px] text-[#2874F0]" onClick={()=>{
                        setState(true)}}>Existing User? Log in</button>
            </div>
            </div>}
                   
         
           </div>
       
    )
}

export default LoginSingup