<template>
  <div id="category">
    <nav-bar class="nav-bar">
      <div slot="center">商品分类</div>
    </nav-bar>
    <div class="content">
      <div class="con-item content-menu">
        <category-menu ref="menu" :category="category" @categoryChange="categoryChange"/>
      </div>
      <scroll ref="scroll" class="cat-content">
        <category-content-menu :menu="showSubCategory" @imageLoad="imageLoad"/>
        <tab-control :titles="['综合', '新品', '销量']" @tabControlClick="tabControlClick"/>
        <goods-list :goods="showCategoryData"/>
      </scroll>
    </div>
  </div>
</template>

<script>
  import NavBar from "components/common/navbar/NavBar";
  import Scroll from "components/common/scroll/Scroll";
  import TabControl from "components/content/tabControl/TabControl";
  import GoodsList from "components/content/goods/GoodsList";

  import CategoryMenu from "./childComps/CategoryMenu";
  import CategoryContentMenu from "./childComps/CategoryContentMenu";

  import {getCategory, getSubCategory, getCategoryDetail} from "network/category"
  import {POP, NEW, SELL} from "common/const"
  import {itemListenerMixin, tabControlMixin} from "common/mixin";

  export default {
    name: "Category",
    mixins: [itemListenerMixin, tabControlMixin],
    data() {
      return {
        category: [],
        categoryData: {},
        currentIndex: -1
      }
    },
    created() {
      // 请求网络数据
      this.__getCategory()
    },
    components: {
      NavBar,
      Scroll,
      TabControl,
      GoodsList,

      CategoryMenu,
      CategoryContentMenu,
    },
    computed: {
      showSubCategory() {
        if (this.currentIndex == -1) return {}
        return this.categoryData[this.currentIndex].subCategory
      },
      showCategoryData() {
        if (this.currentIndex == -1) return []
        return this.categoryData[this.currentIndex].categoryDetail[this.currentType]
      }
    },
    methods: {
      /**
       * 事件监听相关方法
       */
      /**图片加载完成，重新加入安scroll高度*/
      imageLoad() {
        this.newRefresh()
      },
      categoryChange(index) {
        this.__getSubcategory(index)
      },
      /**
       * 网络请求相关方法
       */
      /**获取一级分类信息*/
      __getCategory() {
        getCategory().then(result => {
          this.category = result.data.category.list
          // 把二级分类与分类商品都添加到category数组中
          for (let i = 0; i < this.category.length; i++) {
            this.categoryData[i] = {
              subCategory: {},
              categoryDetail: {
                'pop': [],
                'new': [],
                'sell': []
              }
            }
          }
          // 默认展示二级分类信息
          this.__getSubcategory(0)
        })
      },
      /**获取二级分类信息*/
      __getSubcategory(index) {
        this.currentIndex = index
        const maitKey = this.category[index].maitKey
        getSubCategory(maitKey).then(result => {
          this.categoryData[index].subCategory = result.data
          this.categoryData = {...this.categoryData}
          this.__getCategoryDetail(POP)
          this.__getCategoryDetail(NEW)
          this.__getCategoryDetail(SELL)
        })
      },
      /** 分类商品信息*/
      __getCategoryDetail(type) {
        const miniWallkey = this.category[this.currentIndex].miniWallkey
        getCategoryDetail(miniWallkey, type).then(result => {
          this.categoryData[this.currentIndex].categoryDetail[type] = result
          this.categoryData = {...this.categoryData}
        })
      }
    }
  }
</script>

<style scoped>
  #category {
    height: 100vh;
  }
  .nav-bar {
    background: var(--color-tint);
    color: #ffffff;
  }
  .content {
    display: flex;
    position: absolute;
    top: 40px;
    bottom: 49px;
    left: 0;
    right: 0;
  }
  .content-menu {
    width: 30%;
  }
  .cat-content {
    height: 100%;
    padding: 20px 8px;
    flex: 1;
    overflow: hidden;
  }
</style>
