<script setup>
import homeNarBar from './navBar/homeNavBar.vue'
</script>

<template>
  <div class="home">
    <!-- 导航栏 -->
    <homeNarBar></homeNarBar>
    <div class="banner">
      <img src="@/assets/img/home/banner.webp" alt="banner">
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
.banner {
  img {
    width: 100%;
  }
}

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
