<template>
  <slider>
    <slideritem data-index="0" data-name="MySlideName" @slideclick="handleSlideClick">
      <img src="../assets/img/home/home4.jpg" alt="homeImg1" />
    </slideritem>
    <slideritem data-index="1" data-name="MySlideName" @slideclick="handleSlideClick">
      <img src="../assets/img/home/home2.jpg" alt="homeImg2" />
    </slideritem>
    <slideritem>
      <img src="../assets/img/home/home3.jpg" alt="homeImg3" />
    </slideritem>
  </slider>
</template>

<script>
import { slider, slideritem } from "vue-concise-slider";
export default {
  name: "homePage",
  components: {
    slider,
    slideritem
  },
  options: {
    autoplay: "5000",
    effect: "fade",
    loop: true
  }
};
</script>

<style lang="scss" scoped>
img {
  margin: 0;
  padding: 0;
  height: 100%;
  width: 80%;
  position: relative;
  // left: 10%;
}
</style>
