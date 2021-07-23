<template>
    <div id="home">
      <nav-bar class="nav-bar">
        <div slot="center">购物街</div>
      </nav-bar>
      <tab-control class="tab-control-fixed"
                   ref="tabControlFixed"
                   v-show="isShowTabControlFixed"
                   :titles="['流行', '新款', '精选']"
                   @tabControlClick="tabControlClick"/>
      <scroll class="content"
              ref="scroll"
              :probe-type="3"
              :pull-up-load="true"
              :listenScroll="true"
              @scroll="scrollEvent"
              @pullingUp="loadMore">
        <home-swiper :banners="banners"/>
        <home-recommend :recommends="recommends"/>
        <home-popular/>
        <tab-control ref="tabControl"
                     :titles="['流行', '新款', '精选']"
                     @tabControlClick="tabControlClick"/>
        <goods-list :goods="showGoodsList"/>
      </scroll>
      <back-top class="back-top" v-show="isShowBackTop" @backTop="backTopClick"/>
    </div>
</template>

<script>
  import NavBar from "components/common/navbar/NavBar";
  import TabControl from "components/content/tabControl/TabControl";
  import GoodsList from "components/content/goods/GoodsList";
  import Scroll from "components/common/scroll/Scroll";

  import HomeSwiper from "./childComps/HomeSwiper";
  import HomeRecommend from "./childComps/HomeRecommend";
  import HomePopular from "./childComps/HomePopular";

  import {getHomeMultidata, getHomeGoodsData} from "network/home";
  import {itemListenerMixin, backTopMixin} from "common/mixin";

  export default {
    name: "Home",
    // 混入
    mixins: [itemListenerMixin, backTopMixin],
    data() {
      return {
        banners: [],
        recommends: [],
        goods: {
          'pop': {page: 0, list: []},
          'new': {page: 0, list: []},
          'sell': {page: 0, list: []}
        },
        currentType: 'pop',
        // 是否展示tab-control
        isShowTabControlFixed: false,
        // 默认tab-control开始滚动值
        tabControlOffsetTop: 0,
        // 报错滚动Y轴点
        saveY: 0
      }
    },
    computed: {
      showGoodsList() {
        return this.goods[this.currentType].list
      }
    },
    components: {
      NavBar,
      TabControl,
      GoodsList,
      Scroll,
      HomeSwiper,
      HomeRecommend,
      HomePopular,
    },
    created() {
      // 网络请求
      this.getHomeMultidata()
      this.getHomeGoodsData('pop')
      this.getHomeGoodsData('new')
      this.getHomeGoodsData('sell')
    },
    updated() {
      /**
       * offsetTop：当前对象到其上级层顶部的距离
       * DOM更新时，获取新的距离
       */
      this.tabControlOffsetTop = this.$refs.tabControl.$el.offsetTop
    },
    /**
     * keep-alive在2.x版本之前需要设置actived和deactived方法才会生效
     * 在进入组件的时候跟离开的时候，记录scrollY的值，让页面保持在相同位置
     */
    activated() {
      this.$refs.scroll.scrollTo(0, this.saveY, 0)
      this.$refs.scroll.refresh()
    },
    deactivated() {
      this.saveY = this.$refs.scroll.getScrollY()
      // 取消全局事件的监听
      this.$bus.$off('itemImageLoad', this.itemListener)
    },
    methods: {
      /**
       * 事件监听相关方法
       */
      tabControlClick(index) {
        switch (index){
          case 0:
            this.currentType = 'pop'
            break
          case 1:
            this.currentType = 'new'
            break
          case 2:
            this.currentType = 'sell'
            break
        }
        // 为了使两个tab-control同步，需要同步设置index
        this.$refs.tabControl.currentIndex = index
        this.$refs.tabControlFixed.currentIndex = index
      },
      scrollEvent(position) {
        // 是否显示tab-control
        this.isShowTabControlFixed = Math.abs(position.y) > this.tabControlOffsetTop
        // 是否显示back-top
        this.listenerShow(position)
      },
      loadMore() {
        this.getHomeGoodsData(this.currentType)
      },
      /**
       * 网络请求相关方法
       */
      getHomeMultidata() {
        getHomeMultidata().then(result => {
          this.banners = result.data.banner.list;
          this.recommends = result.data.recommend.list;

        })
      },
      getHomeGoodsData(type) {
        const page = this.goods[type].page + 1
        getHomeGoodsData(type, page).then(result => {
          this.goods[type].list.push(...result.data.list)
          this.goods[type].page += 1
          // 再次载入下拉加载更多
          this.$refs.scroll.finishPullUp()
        })
      }
    },
  }
</script>

<style scoped>
  .nav-bar {
    background: var(--color-tint);
    color: #ffffff;
  }
  .tab-control-fixed {
    position: relative;
    z-index: 10;
  }
  .content {
    /*height: calc(100vh - 40px - 49px);
    overflow: hidden;*/
    position: absolute;
    top: 40px;
    bottom: 49px;
    left: 0;
    right: 0;
    overflow: hidden;
  }
  .back-top {
    position: fixed;
    right: 10px;
    bottom: 50px;
  }
</style>
