<template>
  <div class="comment-info" v-if="Object.keys(info).length !== 0">
    <div class="comment-info-title">
      <div class="comment-info-title">用户评论</div>
      <div class="comment-info-more">更多 <i class="arrow-right"></i></div>
    </div>
    <div class="comment-info-user">
      <img :src="info.user.avatar">
      <span>{{info.user.uname}}</span>
    </div>
    <div class="comment-info-content">
      <p>{{info.content}}</p>
      <div class="comment-info-content-other">
        <span>{{info.created | showDate}}</span>
        <span>{{info.style}}</span>
      </div>
      <div class="comment-info-conetet-images">
        <img :src="item" v-for="item in info.images">
      </div>
    </div>
  </div>
</template>

<script>
  import {formatDate} from "common/utils";

  export default {
    name: "DetailCommentInfo",
    props: {
      info: {
        type: Object,
        default: {}
      }
    },
    filters: {
      showDate(value) {
        let date = new Date(value*1000)
        return formatDate(date, 'yyyy-MM-dd')
      }
    }
  }
</script>

<style scoped>
  .comment-info {
    padding: 0 15px 20px;
    color: #333333;
    border-bottom: 5px solid #f2f5f8;
  }
  .comment-info-title {
    height: 50px;
    line-height: 50px;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid rgba(0,0,0,.1);
  }
  .comment-info-title {
    font-size: 15px;
  }
  .comment-info-more {
    font-size: 13px;
    margin-right: 10px;
  }
  .comment-info-user {
    padding: 10px 0 5px;
    display: flex;
    align-items: center;
  }
  .comment-info-user img {
    width: 42px;
    height: 42px;
    border-radius: 50%;
  }
  .comment-info-user span {
    font-size: 15px;
    margin-left: 10px;
  }
  .comment-info-content {
    padding: 0 5px 15px;
  }
  .comment-info-content p {
    font-size: 14px;
    color: #777777;
    line-height: 1.5;
  }
  .comment-info-content-other {
    font-size: 12px;
    margin-top: 10px;
    color: #999999;
  }
  .comment-info-content-other span {
    margin-right: 10px;
  }
  .comment-info-conetet-images {
    margin-top: 10px;
  }
  .comment-info-conetet-images img {
    width: 70px;
    height: 70px;
    margin-right: 5px;
  }
</style>
