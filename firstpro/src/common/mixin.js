import {debounce} from "./utils";
import BackTop from "components/content/backTop/BackTop";
import {POP, NEW, SELL} from "./const"

// 监听图片加载完成更新scroll混入
export const itemListenerMixin = {
  data() {
    return {
      itemListener: null,
      newRefresh: null
    }
  },
  mounted() {
    /**
     * 使用防抖函数，在图片加载完后执行更新scroll
     */
    this.newRefresh = debounce(this.$refs.scroll.refresh, 200)
    this.itemListener = () =>{
      this.newRefresh()
    }
    this.$bus.$on('itemImageLoad', this.itemListener)
  }
}

// 回到顶部
export const backTopMixin = {
  data() {
    return {
      // 是否展示backTop图标
      isShowBackTop: false
    }
  },
  components: {
    BackTop
  },
  methods: {
    backTopClick() {
      this.$refs.scroll.scrollTo(0, 0)
    },
    listenerShow(position) {
      // 是否显示back-top
      this.isShowBackTop = Math.abs(position.y) > 1000
    }
  }
}

// 标签切换
export const tabControlMixin = {
  data() {
    return {
      currentType: POP
    }
  },
  methods: {
    tabControlClick(index) {
      switch (index) {
        case 0:
          this.currentType = POP
          break
        case 1:
          this.currentType = NEW
          break
        case 2:
          this.currentType = SELL
      }
    }
  }
}
