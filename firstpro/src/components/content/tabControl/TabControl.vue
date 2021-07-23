<template>
  <div class="tab-control">
    <div class="tab-control-item"
         v-for="(item, index) in titles"
         :class="{active: index === currentIndex}"
         @click="tabControlClick(index)">
      <span>{{item}}</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "TabControl",
    props: {
      titles: {
        type: Array,
        default: []
      }
    },
    data() {
      return {
        currentIndex: 0
      }
    },
    methods: {
      tabControlClick(index) {
        this.currentIndex = index
        // 子传父组件事件
        this.$emit('tabControlClick', index)
      }
    }
  }
</script>

<style scoped>
  .tab-control {
    display: flex;
    height: 40px;
    line-height: 40px;
    text-align: center;
    background: #ffffff;
    font-size: 12px;
    z-index: 999;
  }
  .tab-control-item {
    flex: 1;
  }
  .tab-control-item span {
    padding: 5px 8px ;
  }
  .active {
    color: var(--color-high-text);
  }
  .active span {
    border-bottom: 3px solid var(--color-high-text);
  }
</style>
