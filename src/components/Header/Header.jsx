import React from 'react'
import './Header.css'
import { IoPersonAddOutline } from "react-icons/io5";
import { RiShoppingBagLine } from "react-icons/ri";
export default function Header() {
  return (
    <header className='header-parent'>
      <div className='container'>
        <div className="leftside">
          <div className='searchBox'></div>
          <div className='themBtn'></div>

          <div className='two-itemss'>
          
            <div className='shop'>
              <input type="button" className='shops' />
              <RiShoppingBagLine  className='icon1'/>
            </div>
          </div>
            <div className='two-items'>
              <div className='login'>
            
                <input type="button" value="ورود | عضویت "  className='btnLogin'/>
                <IoPersonAddOutline  className='icon2'/>
              </div>
           </div>



        </div>
      </div>
    
    </header>
  
  )
}
