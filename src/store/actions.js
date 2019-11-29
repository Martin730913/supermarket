import { ADD_TO_CART, ADD_COUNTER } from "./mutations-types"
export default {
  addCart(context, payload) {
    return new Promise((resolve, reject) => {
      let oldProduct = null;
      for (const item of context.state.cartList) {
        if (item.iid === payload.iid) {
          oldProduct = item;
        }
      }
      if (oldProduct) {
        context.commit(ADD_COUNTER, oldProduct);
        resolve("当前商品数量加一")
      } else {
        payload.count = 1;
        context.commit(ADD_TO_CART, payload);
        resolve("当前商品添加成功")
      }
    })
  }
}