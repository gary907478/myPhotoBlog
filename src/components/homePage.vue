<template class='homePage'>
  <agile :options="options">
    <div class="slide">
      <img src="../assets/img/home/home1.jpg" alt />
    </div>
    <div class="slide">
      <img src="../assets/img/home/home2.jpg" alt />
    </div>
    <div class="slide">
      <img src="../assets/img/home/home3.jpg" alt />
    </div>
    <div class="slide">
      <img src="../assets/img/home/home4.jpg" alt />
    </div>
    <template slot="prevButton">
      <i class="fas fa-chevron-left"></i>
    </template>
    <template slot="nextButton">
      <i class="fas fa-chevron-right"></i>
    </template>
  </agile>
</template>

<script>
import { VueAgile } from "vue-agile";

export default {
  name: "homePage",
  data() {
    return {
      options: {
        autoplay: true,
        autoplaySpeed: 3000,
        dots: false,
        fade: true
      }
    };
  },
  components: {
    agile: VueAgile
  }
};
</script>

<style lang="scss" scoped>
img {
  width: 70%;
  height: 70%;
  position: relative;
  left: 15%;
}
.homePage {
  margin: 0;
}
.fa-chevron-left {
  position: absolute;
  top: 45%;
  left: 16%;
  font-size: 2rem;
  color: white;
  opacity: 0.3;
}
.fa-chevron-right {
  position: absolute;
  top: 45%;
  right: 15%;
  font-size: 2rem;
  color: white;
  opacity: 0.3;
}
</style>
