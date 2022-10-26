<script setup>
import { ref } from 'vue'
const active = ref(0);
</script>
<template>
  <van-tabbar v-model="active">
    <van-tabbar-item icon="home-o">首页</van-tabbar-item>
    <van-tabbar-item icon="like-o">收藏</van-tabbar-item>
    <van-tabbar-item icon="orders-o">订单</van-tabbar-item>
    <van-tabbar-item icon="chat-o">消息</van-tabbar-item>
  </van-tabbar>
</template>

<style lang="less" scoped>

</style>
