<template>
  <div id="goods-detail">
    <detail-nav-bar ref="nav" @navBarClick="navBarClick"/>
    <scroll ref="scroll"
            class="content"
            :probe-type="3"
            :listenScroll="true"
            @scroll="contentScroll">
      <detail-banner :images="images"/>
      <detail-base-info :info="baseInfo"/>
      <detail-shop-info :info="shopInfo"/>
      <detail-goods-info :info="goodsInfo" @DetailGoodsImageLoad="goodsImageLoad"/>
      <detail-size-info ref="size" :info="sizeInfo"/>
      <detail-comment-info ref="comment" :info="commentInfo"/>
      <detail-recommend-info ref="recommend" :info="recommendInfo"/>
    </scroll>
    <back-top class="back-top" v-show="isShowBackTop" @backTop="backTopClick"/>
    <detail-bottom-bar @addToCart="addCart"/>
  </div>
</template>

<script>
  import DetailNavBar from './childComps/DetailNavBar'
  import DetailBanner from "./childComps/DetailBanner";
  import DetailBaseInfo from "./childComps/DetailBaseInfo";
  import DetailShopInfo from "./childComps/DetailShopInfo";
  import DetailGoodsInfo from "./childComps/DetailGoodsInfo";
  import DetailSizeInfo from "./childComps/DetailSizeInfo";
  import DetailCommentInfo from "./childComps/DetailCommentInfo";
  import DetailRecommendInfo from "./childComps/DetailRecommendInfo";
  import DetailBottomBar from "./childComps/DetailBottomBar";

  import Scroll from "components/common/scroll/Scroll";

  import {goodsDetail, goodsRecommend, DetailBase, DetailShop, DetailSize} from 'network/goodsDetail'
  import {itemListenerMixin, backTopMixin} from "common/mixin";
  import {debounce} from "common/utils";
  import {mapActions} from 'vuex'

  export default {
    name: "GoodsDetail",
    mixins: [itemListenerMixin, backTopMixin],
    data() {
      return {
        id: '',
        images: [],
        baseInfo: {},
        shopInfo: {},
        goodsInfo: {},
        sizeInfo: {},
        commentInfo: {},
        recommendInfo: [],
        themTopsY: [],
        getThemTopsY: null,
        currentIndex: 0,
      }
    },
    components: {
      DetailNavBar,
      DetailBanner,
      DetailBaseInfo,
      DetailShopInfo,
      DetailGoodsInfo,
      DetailSizeInfo,
      DetailCommentInfo,
      DetailRecommendInfo,
      DetailBottomBar,
      Scroll,
    },
    created() {
      // 请求数据
      this.__init()
      /**
       * 利用防抖函数，把获取scrollYHeight保存成一个方法，在图片加载完成之后，调用此方法，可以优化性能
       */
      this.getThemTopsY = debounce(() => {
        this.themTopsY = []
        // 商品的scrollYHeight
        this.themTopsY.push(0)
        // 参数的scrollYHeight
        this.themTopsY.push(this.$refs.size.$el.offsetTop)
        // 评论的scrollYHeight
        this.themTopsY.push(this.$refs.comment.$el.offsetTop)
        // 推荐的scrollYHeight
        this.themTopsY.push(this.$refs.recommend.$el.offsetTop)
        // 最后一个参数为数字的最大值，用来做简化判断条件
        this.themTopsY.push(Number.MAX_VALUE)
      }, 100)
    },
    methods: {
      ...mapActions(['addToCart']),
      /**
       * 事件监听相关方法
       */
      __init() {
        // 请求网络数据
        this.getGoodsDetailData()
        this.getRecommendData()
      },
      contentScroll(position) {
        // 是否显示back-top
        this.listenerShow(position)
        // 监听scroll滚动，滚动到导航对应高度对应位置，更新导航的属性变化
        let positionY = Math.abs(position.y)
        for (let i = 0; i < this.themTopsY.length-1; i++) {
          if ((this.currentIndex !== i) && (positionY >= this.themTopsY[i] && positionY < this.themTopsY[i+1])) {
            this.currentIndex = i
            this.$refs.nav.currentIndex = this.currentIndex
          }
        }
      },
      goodsImageLoad() {
        // 图片加载完成 刷新scroll
        this.newRefresh()
        // this.$refs.scroll.refresh()
        /**
         * 如何获取正确的offsetTop？
         * 1.created中不行，压根获取不到元素
         * 2.mounted中不行，数据还没有获取到
         * 3.获取到数据的回调中不行，DOM还没有渲染完
         * 4.$nextTick不行，图片的高度还没有计算在内
         * 5.图片加载完成后，获取的高度才是正确的
         */
        this.getThemTopsY()
      },
      navBarClick(index) {
        // 点击导航栏自动滚动到对应的模块
        this.$refs.scroll.scrollTo(0, -this.themTopsY[index], 200)
      },
      addCart() {
        /**
         *把加入购物车数据保存在state中，通过actions做逻辑操作
         */
        const list = {}
        list.images = this.images[0]
        list.title = this.baseInfo.title
        list.desc = this.baseInfo.desc
        list.price = this.baseInfo.newPrice
        list.id = this.id
        list.count = 1
        list.checked = true

        this.addToCart(list).then(result => {
          // toast信息提示
          this.$toast.show(result)
        })
      },
      /**
       * 网络请求相关方法
       */
      getGoodsDetailData() {
        // 获取id
        this.id = this.$route.query.id
        // 请求数据
        goodsDetail(this.id).then(result=> {
          const data = result.result
          // 商品轮播图
          this.images = data.itemInfo.topImages
          // 商品基本信息
          this.baseInfo = new DetailBase(data.itemInfo, data.columns, data.shopInfo.services)
          // 商品店铺信息
          this.shopInfo = new DetailShop(data.shopInfo)
          // 商品详细信息
          this.goodsInfo = data.detailInfo
          // 商品尺码
          this.sizeInfo = new DetailSize(data.itemParams.info, data.itemParams.rule)
          // 用户评论信息
          if (data.rate.list) {
            this.commentInfo = data.rate.list[0]
          }
        })
      },
      getRecommendData() {
        goodsRecommend().then((result, error) => {
          if (error) return
          this.recommendInfo = result.data.list
        })
      }
    },
    watch: {
      // 监听路由发生变化时，重新加载created生命周期中的方法
      /*'$route'(to, from) {
        if (to.query.id != from.query.id) {
          this.__init()
          this.$refs.scroll.scrollTo(0, 0, 100)

        }
      },*/
    },
    destroyed() {
      // 取消全局事件的监听
      this.$bus.$off('itemImageLoad', this.itemListener)
    }
  }
</script>

<style scoped>
  .content {
    position: absolute;
    top: 40px;
    left: 0;
    right: 0;
    bottom: 58px;
    overflow: hidden;
  }
  .back-top {
    position: fixed;
    right: 8px;
    bottom: 65px;
  }
</style>
