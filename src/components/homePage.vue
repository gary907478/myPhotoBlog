<template>
  <a-layout id="components-layout-demo-top" class="layout">
    <a-layout-header style="height:80px">
      <a href="#" class="nameLogo">Gary Zhang</a>
      <a-menu
        theme="dark"
        mode="horizontal"
        :defaultSelectedKeys="['2']"
        :style="{ lineHeight: '80px' ,float:'right', height:'80px'}"
      >
        <a-menu-item key="1">nav 1</a-menu-item>
        <a-menu-item key="2">nav 2</a-menu-item>
        <a-menu-item key="3">nav 3</a-menu-item>
      </a-menu>
    </a-layout-header>
    <a-layout-content style="padding: 0 50px">
      <a-carousel autoplay effect="fade" centerMode="ture" class="slider">
        <div class="imgHolder">
          <img src="../assets/img/home/home2.jpg" alt />
        </div>
        <div class="imgHolder">
          <img src="../assets/img/home/home3.jpg" alt />
        </div>
        <div class="imgHolder">
          <img src="../assets/img/home/home4.jpg" alt />
        </div>
      </a-carousel>
    </a-layout-content>
    <a-layout-footer style="text-align: center">Footer</a-layout-footer>
  </a-layout>
</template>

<style lang='scss' scoped>
.nameLogo {
  font-family: "Courier New", Courier, monospace;
  font-size: 2rem;
}
.slider {
  background: #364d79;
  overflow: hidden;
  display: inline;
  align-content: center;

  img {
    height: 90%;
    width: 90%;
  }
}

.imgHolder {
  padding-left: 15%;
}
</style>

<script>
export default {
  name: "homePage"
};
</script>
