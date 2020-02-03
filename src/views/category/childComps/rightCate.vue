<template>
  <div class="rightCate">
    <scroll class="content" ref="scroll">
      <ul class="subcategory">
        <li v-for="(item,index) in getSubcategory" :key="index">
          <a :href="item.link">
            <img :src="item.image" :alt="item.title" />
          </a>
          <p>{{item.title}}</p>
        </li>
      </ul>
      <tab-control :titles="tabControl" @tabClick="tabClick"></tab-control>
      <goods :goods="getCategoryDetail"></goods>
    </scroll>
  </div>
</template>

<script>
import { subcategory } from "../../../network/category.js";
import scroll from "../../../components/common/BScroll/BScroll";
import tabControl from "../../../components/content/tabControl";
import goods from "../../../components/content/goods/goods"
export default {
  name: "rightCate",
  components: {
    scroll,
    tabControl,
    goods
  },
  data() {
    return {
      subcategory: [],
      categoryDetail:[],
      tabControl:["流行","新款","精选"],
      type:""
    };
  },
  mounted(){
  },
  computed: {
    getSubcategory() {
      this.$bus.$on("subcategory", res => {
        this.subcategory=[];
        console.log(this.subcategory);
        
        res.forEach(item => {
          this.subcategory.push(item);
        });
      })
      return this.subcategory;
    },
    getCategoryDetail(){
      this.$bus.$on("categoryDetail",res=>{
        this.categoryDetail=[];
        console.log(this.categoryDetail);
        res.forEach(item => {
          this.categoryDetail.push(item);
        });
      })
      return this.categoryDetail;
    }
  },
  methods:{
    tabClick(index){
      switch (index) {
        case 0:
          this.type="pop";
          break;
        case 1:
          this.type="new";
          break;
        case 2:
          this.type="sell";
          break;
      }
      this.$bus.$emit("tabClick",this.type);
    }
  },
  
};
</script>
<style scoped>
.rightCate {
  width: 100%;
}
a{
  display: block;
}
.subcategory {
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  width: 94%;
  padding: 3%;
}
.subcategory li {
  width: calc(100% / 3 - 6%);
  height: 100px;
  margin-bottom: 10px;
  padding: 3%;
}

.subcategory li img,
.subcategory li p {
  width: 100%;
}
.subcategory li img {
  height: 70%;
}
.subcategory li p {
  height: 16%;
  text-align: center;
}
.content {
  height: 710px;
  overflow: hidden;
}
</style>