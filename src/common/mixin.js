import {debounce} from "./utils.js";
import backTop from "../components/content/backTop/backTop.vue"
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

export const backTopMixin={
  data(){
    return{
      isShow:false
    }
  },
  methods: {
    backTop(){
      this.$refs.scroll.scrollTo(0,0,500);
    }
  },
  components: {
    backTop
  }
}