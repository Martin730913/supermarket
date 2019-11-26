import {ADD_TO_CART,ADD_COUNTER} from "./mutations-types"
export default{
  addCart(context,payload){
    let oldProduct=null;
    for (const item of context.state.cartList) {
      if(item.iid===payload.iid){
        oldProduct=item;
      }
    }
    if(oldProduct){
      context.commit(ADD_COUNTER,oldProduct);
    }else{
      payload.count=1;
      context.commit(ADD_TO_CART,payload);
    }
  }
}