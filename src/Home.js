import React from 'react'
import './Home.css'
import Product from './Product'

const Home = () => {
    return (
        <div className='home'>
          <img
          className='home__image' 
          src='https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_45M_v2_1x._CB432458380_.jpg'/>
          
          {/* Product id,title,price,rating,image*/}
           {/*product*/}
           <div className='home__row'>
                <Product
                id='12345'
                title='Fire TV Stick streaming media '
                price='120.50'
                rating={5}
                image='https://images-na.ssl-images-amazon.com/images/I/61juvPBQCsL._AC_SL1000_.jpg'
                />
                <Product
                id='12345'
                title='Apple iPad '
                price='120.50'
                rating={5}
                image='https://images-na.ssl-images-amazon.com/images/I/41h0H4SCgPL._AC_US160_.jpg'
                />
               
           </div>
           <div className='home__row'>
           <Product
                id='12345'
                title='Computer Accessories '
                price='120.50'
                rating={5}
                image='https://images-na.ssl-images-amazon.com/images/G/01/amazonglobal/images/email/asins/DURM-244337D24F250BSI._V533746475_.jpg'
                />
                <Product
                id='12345'
                title='Computer componenent '
                price='120.50'
                rating={5}
                image='https://images-na.ssl-images-amazon.com/images/G/01/amazonglobal/images/email/asins/DURM-2447E617EC5C463L._V533746472_.jpg'
                />
                <Product
                id='12345'
                title='Fire TV Stick streaming media '
                price='120.50'
                rating={5}
                image='https://images-na.ssl-images-amazon.com/images/I/71gjJZ4Df2L._AC_UX679_.jpg'
                />
               
           </div>
           <div className='home__row'>
                <Product
                id='12345'
                title='Fire TV Stick streaming media '
                price='120.50'
                rating={5}
                image='https://images-na.ssl-images-amazon.com/images/I/51I3UjD-Q1L._AC_US160_.jpg'
                />
           </div>
          
        </div>
    )
}

export default Home
