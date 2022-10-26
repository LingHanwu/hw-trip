<script setup>
// 底部导航栏数据
import tabbarData from '@/assets/data/tabbar'
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const active = ref(0);
const route = useRouter()
const clickbtn = (path) => {
  route.push(path)
}


</script>
<template>
  <!-- vant -->
  <!-- <van-tabbar v-model="active">
    <template v-for="(item, index) in tabbarData">
      <van-tabbar-item :to="item.path" :icon="item.icon" :name="item.name">{{ item.text }}</van-tabbar-item>
    </template>
  </van-tabbar> -->

  <!-- varlet -->
  <var-bottom-navigation active-color="#ff9854" v-model:active="active" fixed>
    <template v-for="(item, index) in tabbarData" :key="index">
      <var-bottom-navigation-item @click="clickbtn(item.path)" :label="item.text" :icon="item.icon2"
        :name="item.text" />
    </template>
  </var-bottom-navigation>

</template>

<style lang="less" scoped>

</style>
