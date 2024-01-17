import React from 'react'

const reducer = (state,action,setCookie) => {

    // ---------------------------------------------------------------
  
    switch (action.type) {
        case "ADD_TO_CART": {
         
           state.cart=[...state.cart,{id:action.payload}]
        //    localStorage.setItem({cart:[...state.cart,{id:action.payload}]})
          return state ;
        };
            
            break;
    
        default: return state
            

    }
}

export default reducer