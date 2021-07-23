<template>
  <div class="size-info" v-if="Object.keys(info).length !== 0">
    <table class="size-info-sizes" v-for="(table,index) in info.sizes" :key="index">
      <tr v-for="(tr, indexr) in table" :key="indexr">
        <td v-for="(td, indexd) in tr" :key="indexd">{{td}}</td>
      </tr>
    </table>
    <table class="size-info-infos">
      <tr v-for="item in info.infos">
        <td class="size-info-infos-key">{{item.key}}</td>
        <td class="size-info-infos-val">{{item.value}}</td>
      </tr>
    </table>
    <div class="size-info-image" v-if="info.image.length !== 0">
      <img :src="info.image">
    </div>
  </div>
</template>

<script>
  export default {
    name: "DetailSizeInfo",
    props: {
      info: {
        type: Object,
        default: {}
      }
    }
  }
</script>

<style scoped>
  .size-info {
    padding: 20px 15px;
    font-size: 14px;
    border-bottom: 5px solid #f2f5f8;
  }
  .size-info table {
    width: 100%;
    border-collapse: collapse;
  }
  .size-info tr {
    height: 42px;
  }
  .size-info td {
    border-bottom: 1px solid rgba(100, 100, 100, .1);
  }
  .size-info-infos {
    border-top: 1px solid rgba(100, 100, 100, .1);
  }
  .size-info-infos-key {
    width: 90px;
  }
  .size-info-infos-val {
    color: var(--color-high-text);
  }
  .size-info-image img {
    width: 100%;
  }
</style>
