<template>
  <div >
        <!-- swiper -->
        <swiper :options="swiperOption">
            <swiper-slide class="swiper-slide" v-for="(item, index) in slide" :key="index">
                myproduct {{item}} 
            </swiper-slide>
            <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
  </div>
</template>


<script>
    import 'swiper/dist/css/swiper.css' 
    import { swiper, swiperSlide } from 'vue-awesome-swiper'
    export default {
        data() {
            return {
                slide: [1,2,3],
                swiperOption: {
                    spaceBetween: 30,
                    // 渐变效果
                    effect: 'fade',
                    loop: true,
                    autoplay: {
                        delay: 3500,
                        disableOnInteraction: false
                    },
                    pagination: {
                        el: '.swiper-pagination',
                        dynamicBullets: true,
                        clickable: true
                    }
                }
            }
        }
    }
</script>
<style lang="less" scoped>
.swiper-container {
    height: 500px;
    /deep/.swiper-pagination-bullet-active {
    background-color: rgba(63, 115, 206, .9);
    }
}

.swiper-slide {
    background-position: center;
    background-size: cover;
    width: 300px;
    height: 300px;
    line-height: 500px;
    text-align: center;
    font-size: 45px;
}
</style>