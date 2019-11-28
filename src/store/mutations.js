import {ADD_TO_CART,ADD_COUNTER} from "./mutations-types"
export default{
  [ADD_COUNTER](state,payload){
    payload.count+=1;
  },
  [ADD_TO_CART](state,payload){
    payload.checked=true;
    state.cartList.push(payload);
  }
}