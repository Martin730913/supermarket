import {debounce} from "./utils.js";
export const itemImageLoadMixin={
  data () {
    return {
      itemImageLoad:null,
      newRefresh:null
    }
  },
	mounted(){
		this.newRefresh=debounce(this.$refs.scroll.refresh,1000);
		this.itemImageLoad=()=>{
			this.newRefresh();
		};
		this.$bus.$on("itemImageLoad",this.itemImageLoad);
	}
}