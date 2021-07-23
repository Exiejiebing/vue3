<template>
  <scroll ref="menuScroll" class="menu-scroll">
    <div class="menu-list">
      <div class="menu-list-item"
           v-for="(item, index) in category"
           :key="index"
           :class="{active: currentIndex === index}"
           @click="menuClick(index)">
        {{item.title}}
      </div>
    </div>
  </scroll>
</template>

<script>
  import Scroll from "components/common/scroll/Scroll";
  export default {
    name: "CategoryMenu",
    data() {
      return {
        currentIndex: 0
      }
    },
    props: {
      category: {
        type: Array,
        default: []
      }
    },
    components: {
      Scroll
    },
    methods: {
      menuClick(index) {
        this.currentIndex = index
        this.$emit('categoryChange', index)
      }
    },
    updated() {
      this.$refs.menuScroll.refresh()
    },
    activated() {
      this.$refs.menuScroll.refresh()
    }
  }
</script>

<style scoped>
  .menu-scroll {
    width: 100%;
    height: 100%;
    overflow: hidden;
  }
  .menu-list {
    background: #f6f6f6;
    box-sizing: border-box;
  }
  .menu-list-item {
    line-height: 45px;
    font-size: 14px;
    text-align: center;
  }
  .menu-list-item.active {
    color: var(--color-high-text);
    font-weight: 700;
    background: #ffffff;
    border-left: 3px solid var(--color-tint);
  }
</style>
