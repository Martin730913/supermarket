<template>
  <div class="leftCate">
    <scroll class="content" ref="scroll">
      <ul>
        <li
          v-for="(item,index) in category"
          :key="index"
          class="list"
          @click="selectCategory(index);getSubcategory(index);getCategoryDetail(index)"
          :class="{active:currentIndex===index}"
        >{{item.title}}</li>
      </ul>
    </scroll>
  </div>
</template>

<script>
import { category,subcategory,categoryDetail} from "../../../network/category";
import scroll from "../../../components/common/BScroll/BScroll";
export default {
  name: "leftCate",
  components: {
    scroll
  },
  data() {
    return {
      category: [],
      currentIndex: 0,
      subcategory:[],
      categoryDetail:[]
    };
  },
  mounted() {
    category().then(res => {
      res.data.category.list.forEach(item => {
        this.category.push(item);
      });
      this.getSubcategory(this.currentIndex);
      this.getCategoryDetail(this.currentIndex);
      this.$bus.$on("tabClick",res=>{
        this.getCategoryDetail(this.currentIndex,res);
      })
    });
  },
  methods: {
    getSubcategory(index){
      this.subcategory=[];
      subcategory(this.category[index].maitKey).then(res => {
        res.data.list.forEach(item => {
          this.subcategory.push(item);
        });
        this.$bus.$emit("subcategory",this.subcategory);
      });
    },
    getCategoryDetail(index,type="pop"){
      categoryDetail(this.category[index].miniWallkey,type).then(res=>{
        res.forEach(item=>{
          this.categoryDetail.push(item);
        })
        this.$bus.$emit("categoryDetail",this.categoryDetail);
      })
    },
    selectCategory(index) {
      this.currentIndex = index;
    }
  }
};
</script>
<style scoped>
.leftCate {
  position: relative;
}
.list {
  width: 100px;
  height: 21px;
  padding: 12px 0px;
  color: #666;
  text-align: center;
  background-color: #f6f6f6;
  list-style: none;
}
.active {
  width: 97px;
  color: #ff5777;
  border-left: 3px #ff5777 solid;
  background-color: #fff;
}
.content {
  height: 710px;
  overflow: hidden;
}
</style>