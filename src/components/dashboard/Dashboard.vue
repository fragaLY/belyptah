<template>
  <swiper class="swiper-container" :options="options">
    <swiper-slide class="swiper-slide" v-for="(slide, key) in slides" :key="key">
      <v-img :src="slide.src" :lazy-src="slide.lazy"/>
    </swiper-slide>
    <div class="swiper-button-prev" slot="button-prev"></div>
    <div class="swiper-button-next" slot="button-next"></div>
  </swiper>
</template>

<script>
    import store from "../../store/store";
    import { Swiper, SwiperSlide } from 'vue-awesome-swiper'

    export default {
        name: "Dashboard",
        components: {
            Swiper,
            SwiperSlide
        },
        data: () => {
            return {
                slides: [
                    {
                        src: require('../../assets/dashboard/dashboard_1.jpg'),
                        lazy: require('../../assets/dashboard/lazy/dashboard_1.jpg')
                    },
                    {
                        src: require('../../assets/dashboard/dashboard_2.jpg'),
                        lazy: require('../../assets/dashboard/lazy/dashboard_1.jpg')
                    },
                    {
                        src: require('../../assets/dashboard/dashboard_3.jpg'),
                        lazy: require('../../assets/dashboard/lazy/dashboard_1.jpg')
                    },
                    {
                        src: require('../../assets/dashboard/dashboard_4.jpg'),
                        lazy: require('../../assets/dashboard/lazy/dashboard_1.jpg')
                    },
                    {
                        src: require('../../assets/dashboard/dashboard_5.jpg'),
                        lazy: require('../../assets/dashboard/lazy/dashboard_1.jpg')
                    },
                    {
                        src: require('../../assets/dashboard/dashboard_6.jpg'),
                        lazy: require('../../assets/dashboard/lazy/dashboard_1.jpg')
                    }
                ],
                options: {
                    navigation: {
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev'
                    }
                }
            }

        },
        beforeCreate() {
            store.dispatch('updatePageTitle', 'BELY PTAH');
        }
    }
</script>

<style scoped>
  .swiper-slide {
    text-align: center;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
  }
</style>