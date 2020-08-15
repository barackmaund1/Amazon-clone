import React from 'react'
import './Checkout.css'
import { useStateValue } from './StateProvider';
import CheckoutProduct from './CheckoutProduct'

const Checkout = () => {
    const [{basket}]= useStateValue();

    return (
        <div className='checkout__ad'>
            <img className='checkout__ad' src='https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._C8423492668_.jpg'/>
             {
                 basket?.length === 0 ?(
                     <div>
                       <h2>Your Shopping Basket is empty</h2>
                     <p>
                     You have no items in your basket.To buy one or more items,click
                     "Add to basket " next to the item.
                     </p>
                       </div>
                 ):(
                     <div>
                      <h2 className='checkout__title'>Your shopping  basket 🧺 </h2>
                     {/* List out all of the Checkout Products*/}
                      {basket.map(item =>(
                        <CheckoutProduct
                        item={item.id}
                        title={item.title}
                        image={item.image}
                        price={item.price}
                        rating={item.rating}
                        />
                      ))}
                     
                     </div>
                 )}
            </div>
    )
}

export default Checkout
