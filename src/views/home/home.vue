<script setup>
import homeNarBar from './cpns/homeNavBar.vue'
import homeSearchBox from './cpns/homeSearchBox.vue'


</script>

<template>
  <div class="home">
    <!-- 导航栏 -->
    <homeNarBar></homeNarBar>
    <!-- 轮播 -->
    <div class="banner">
      <var-swipe class="swipe-banner" :loop="false">
        <var-swipe-item>
          <img class="swipe-banner-image" src="@/assets/img/home/banner.webp">
        </var-swipe-item>
        <var-swipe-item>
          <img class="swipe-banner-image" src="https://varlet.gitee.io/varlet-ui/cat2.jpg">
        </var-swipe-item>
        <var-swipe-item>
          <img class="swipe-banner-image" src="https://varlet.gitee.io/varlet-ui/cat3.jpg">
        </var-swipe-item>
      </var-swipe>
    </div>

    <!-- 搜索 -->
    <homeSearchBox></homeSearchBox>





  </div>
</template>

<style lang="less" scoped>
// 轮播start
.banner {
  .swipe-banner {
    height: 160px;
  }

  .swipe-banner-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    pointer-events: none;
  }

}

// 轮播end


</style>
