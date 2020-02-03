import {request} from "./request.js";
import axios from "axios"
export function category(){
  return request({
    url: "/category"
  })    
}
export function subcategory(maitKey){  
  return request({
    url: "/subcategory",
    params: {
      maitKey
    }
  })
}
export function categoryDetail(miniWallkey,type){
  console.log(miniWallkey,type);
  
  return request({
    url: "/subcategory/detail",
    params: {
      miniWallkey,
      type
    }
  })
}