<template>
  <swiper class="detail-banner" v-if="images.length">
    <swiper-item class="detail-banner-item" v-for="item in images">
      <img :src="item">
    </swiper-item>
  </swiper>
</template>

<script>
  import {Swiper, SwiperItem} from 'components/common/swiper'
  export default {
    name: "DetailBanner",
    props: {
      images: {
        type: Array,
        default: []
      }
    },
    components: {
      Swiper,
      SwiperItem
    }
  }
</script>

<style scoped>
  .detail-banner {
    height: 50vh;
  }
</style>
