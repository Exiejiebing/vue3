<template>
  <div ref="wrapper">
    <div>
      <slot></slot>
    </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'

  export default {
    name: "Scroll",
    props: {
      /**
       * 1 滚动的时候会派发scroll事件，会截流。
       * 2 滚动的时候实时派发scroll事件，不会截流。
       * 3 除了实时派发scroll事件，在swipe的情况下仍然能实时派发scroll事件
       */
      probeType: {
        type: Number,
        default: 1
      },
      /**
       * 点击列表是否派发click事件
       */
      click: {
        type: Boolean,
        default: true
      },
      /**
       * 是否派发滚动事件
       */
      listenScroll: {
        type: Boolean,
        default: false
      },
      /**
       * 是否派发滚动到底部超过阈值，用于上拉加载
       */
      pullUpLoad: {
        type: Boolean,
        default: false
      },
      /**
       * 当数据更新后，刷新scroll的延时。
       */
      refreshDelay: {
        type: Number,
        default: 20
      }
    },
    data() {
      return {
        scroll: {},
      }
    },
    mounted() {
      // 保证在DOM渲染完毕后初始化better-scroll
      this.$nextTick(() => {
        this.__initScroll()
      })
    },
    methods: {
      // 初始化方法
      __initScroll() {
        console.log(this.$refs.wrapper)
        if (!this.$refs.wrapper) return
        // 注册插件
        this.scroll = new BScroll(this.$refs.wrapper, {
          click: this.click,
          probeType: this.probeType,
          pullUpLoad: this.pullUpLoad
        })
        /**
         * 监听事件
         */
        // 是否派发滚动事件
        if (this.listenScroll) {
          this.scroll.on('scroll', position => {
            this.$emit('scroll', position)
          })
        }
        // 底部下拉距离超过阈值，上拉加载更多
        if (this.pullUpLoad) {
          this.scroll.on('pullingUp', () => {
            this.$emit('pullingUp')
          })
        }
      },
      // 重新计算better-scroll，确保滚动效果正常
      refresh() {
        this.scroll && this.scroll.refresh && this.scroll.refresh()
      },
      // 滚动至x,y的距离
      scrollTo(x, y, time=500) {
        this.scroll && this.scroll.scrollTo && this.scroll.scrollTo(x, y, time)
      },
      // 重新载入下拉加载更多
      finishPullUp() {
        this.scroll && this.scroll.finishPullUp && this.scroll.finishPullUp()
      },
      // 获取当前Y轴滚动位置
      getScrollY() {
        return this.scroll ? this.scroll.y : 0
      }
    },
   watch: {
      // 监听数据的变化，延时refreshDelay时间后调用refresh方法重新计算，保证滚动效果正常
      /*data() {
        setTimeout(() => {
          this.refresh()
        }, this.refreshDelay)
      }*/
    }
  }
</script>

<style scoped>

</style>
