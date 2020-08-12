import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';

const Header = () => {
    return (
        <nav className='header'>
              {/*logo on the left -> image*/}
              <Link to='/'>
              <img className='header__logo' src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRuRqpWRtCxBzgRZs61f1RD5grPA5H5_asffohboUPJLsUjB0xtqFkfhjwG0Jtt_Om06h_wtnmmLlrsZPx6_KSMBOt5p1MvfbSg&usqp=CAU&ec=45690274' alt='amazon'/> 
              </Link>
             
              {/*search box*/}
              <div className='header__search'>
                <input className='header__searchInput' />
                <SearchIcon className='header__searchIcon'/>
              </div>
             
             {/*3 links*/}
             <div className='header__nav'>
               {/*1st link */}
                <Link to='/login' className='header__link'>
                <div className='header__option'> 
                    <span className='header__optionlineone'>Hello barack</span>
                    <span className='header__optionlinetwo'>Sign In</span>
                </div>
                </Link>
               {/*2st link */}
               <Link to='/' className='header__link'>
                <div className='header__option'> 
                    <span className='header__optionlineone'>Returns</span>
                    <span className='header__optionlinetwo'>& Orders</span>
                </div>
                </Link>
               {/*3st link */}
               <Link to='/' className='header__link'>
                <div className='header__option'> 
                    <span className='header__optionlineone'>Your</span>
                    <span className='header__optionlinetwo'>Prime</span>
                </div>
                </Link>
               {/*4 st link */}
               <Link to='/checkout' className='header__link'>
               <div className='header__optionBasket'> 
                    {/* shopping basket icon*/}
                     <ShoppingBasketIcon className='header__ShoppingBasketIcon'/>
                   {/*Number of items in the basket */}
                   <span className='header__optionlinetwo header__basketCount'>0</span>
               </div>
               </Link>

             </div>
              {/*basket icon with number*/}
        </nav>
    )
}

export default Header


