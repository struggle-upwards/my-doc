# 轮播图





```vue
<template>

  <text class="title">{{ title }}</text>
  <swiper class="swiper" indicator-dots="true" autoplay circular>
    <swiper-item v-for="picture, index in swipperPictures" :key="index">
      <img @tap="seeBig(index)" class="swipper-picture" :src="picture" alt="">
    </swiper-item>
  </swiper>
</template>

<script setup>
import { ref } from 'vue';
const swipperPictures = [
  "https://th.bing.com/th?id=OIP.f1wrwfBJ4hJT6b5GE_AfggHaE7&w=306&h=203&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2",
  "https://th.bing.com/th?id=OIP.gjJw_Gi5xY8Nmz_rkrexcgHaE8&w=306&h=204&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2",
  "https://th.bing.com/th?id=OIP.74lh5lP4sKw_lCb-My8g4QHaE6&w=306&h=203&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2"
]

const seeBig = (index) => {
  console.log(index);
  uni.previewImage({
    current:swipperPictures[index],
    urls: swipperPictures,
    success: (result) => { },
    fail: (error) => { }
  })
}
</script>

<style lang="scss">
.swiper {
  width: 700rpx;
  height: 400rpx;
  margin: 0 auto;
  overflow: hidden;
  transform: translateY(0);
  border-radius: 20rpx;

  & .swipper-picture {
    width: 100%;
    object-fit: fill;
  }
}
</style>

```

