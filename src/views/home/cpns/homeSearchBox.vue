<script setup>
const cityClick = () => {
  console.log('111')
}


/**位置城市点击事件
 * 调用地理位置API    检索设备的当前位置    
 * https://developer.mozilla.org/zh-CN/docs/Web/API/Geolocation_API
 */
const positionClick = () => {

  navigator.geolocation.getCurrentPosition(res => {
    console.log('获取位置成功：', res);
  }, err => {
    console.log('获取位置失败：', res);
  }, {
    enableHighAccuracy: true, // 高精度
    timeout: 5000,    // 超时时间
    maximumAge: 0     // 用户位置信息缓存的最大时间（ms），默认为0
  })
}




</script>

<template>
  <div class="SearchBox">
    <div class="location">
      <div class="city" @click="cityClick">广州</div>
      <div class="position">
        <span class="text" @click="positionClick">我的位置</span>
        <img src="@/assets/img/home/icon_location.png" alt="位置图片">
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
// 位置信息start
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
    display: flex;
    align-items: center;

    .text {
      position: relative;
      top: 2px;
      font-size: 12px;
    }

    img {
      margin-left: 5px;
      width: 18px;
      height: 18px;
    }
  }
}

// 位置信息end
</style>
