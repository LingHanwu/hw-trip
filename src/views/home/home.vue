<script setup>
import homeNarBar from './navBar/homeNavBar.vue'
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





    <div class="location">
      <div class="city">广州</div>
      <div class="position">
        <span class="text">我的位置</span>
        <img src="@/assets/img/home/icon_location.png" alt="位置图片">
      </div>
    </div>

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



.location {
  display: flex;
  align-items: center;
  height: 44px;
  padding: 0 20px;

  .city {
    flex: 1;
  }

  .position {
    width: 74px;

    .text {
      font-size: 12px;
    }

    img {
      margin-left: 5px;
      width: 18px;
      height: 18px;
    }
  }
}
</style>
