import React from 'react'

function Footer() {
  return (
    <div className='footer  '>
        <div className='container  border-light d-flex justify-content-evenly align-items-center mt-5'>
            <div className='cc pt-5'>
                <p className='pt-3 ps-4 ms-2'> CONTACT</p>
                <ul>
                    <li className='pt-2'>info@mysite.com</li>
                    <li className='pt-2'>123-456-7890</li>
                    <li className='pt-2'>500 Terry Francine St.SA, CA 9415</li>
                </ul>
            </div>
            <div className='cc pt-5'>
            <p className='pt-3 ps-4 ms-2'> LEGAL</p>
                <ul>
                    <li className='pt-2'>Terms & Conditions</li>
                    <li className='pt-2'>Privacy Policy</li>
                    <li className='pt-2'>Shipping Policy</li>
                    <li className='pt-2'>Refund Policy</li>
                    <li className='pt-2'>Accessibility Statement</li>
                </ul>
            </div>
            <div className='cc pt-5'>
            <p className='pt-3 ps-4 ms-2'>SHOP</p>
                <ul>
                    <li className='pt-2'>All Products</li>
                    <li className='pt-2'>Best Sellers</li>
                    <li className='pt-2'>Performance Series</li>
                    <li className='pt-2'>Limited Edition</li>
                    <li className='pt-2'>Kids Collection</li>
                    
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Footer