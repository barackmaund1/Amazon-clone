export const initialState = {
    basket:[],
    user:null
};

const reducer =(state,action) =>{
    console.log(action);
    switch(action.type){
        case 'ADD_TO_BASKET':
        // logic for adding item to basket
        return {
            ...state,
            basket:[...state.basket,action.item]
        };
        case 'REMOVE_FROM_BASKET':
        // logic for Removing item from basket

        // we clone the  basket
        let newBasket=[...state.basket];

        //we check the index
        const index = state.basket.findIndex((basketItem) => basketItem.id ===action.id);
        if (index >= 0 ){
            //items exists in the basket,remove it..
        newBasket.splice(index,1);
        
        }else{
            console.warn(
               `Can't  remove product (id:${action.id} as its not in the basket` 
            )
        }

        return {...state,
            basket:newBasket
        }
      
    default :
       return state   
    }
}
export default reducer