import {debounce} from "./utils.js";
export const itemImageLoadMixin={
	mounted(){
		const refresh=debounce(this.$refs.scroll.refresh,1000);
		this.itemImageLoad=()=>{
			refresh
		};
		this.$bus.$on("itemImageLoad",this.itemImageLoad);
	}
}