<template>
  <a-layout id="components-layout-demo-top" class="layout">
    <!-- header -->
    <header>
      <!-- name logo -->
      <div class="nameLogo">
        <a href="#">GaryZhang</a>
      </div>
      <!-- menu -->
      <div class="menu">
        <Slide right class="burger-btn">
          <a>
            <router-link to="/HelloWorld">Portrait</router-link>
          </a>
          <a>
            <router-link to="/HelloWorld">Landscape</router-link>
          </a>
          <a>
            <router-link to="/HelloWorld">Urban</router-link>
          </a>
        </Slide>
      </div>
    </header>
    <!-- img holder-->
    <a-layout-content style="padding: 0 50px; background-color:#ffffff">
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

    <!-- footer -->
    <a-layout-footer style="text-align: center; background-color:#ffffff">
      <div class="infoLink">
        <a href="#">info@gmail.com</a>
      </div>

      <!-- social icon list -->
      <div class="socialIcons">
        <a href="https://www.instagram.com/garyzhang.cc/">
          <i class="fab fa-instagram"></i>
        </a>
        <a href="https://www.linkedin.com/in/gary-zhang-9b5947129/">
          <i class="fab fa-linkedin"></i>
        </a>
        <a href="https://gary907478.github.io/">
          <i class="fab fa-blogger"></i>
        </a>
        <a href="https://gary907478.github.io/aboutGary/">
          <i class="fab fas fa-globe"></i>
        </a>
        <p class="infoLink2">Powered by Gary Zhang</p>
      </div>
    </a-layout-footer>
  </a-layout>
</template>

<style lang='scss' scoped>
@import url("https://fonts.googleapis.com/css?family=Oleo+Script&display=swap");

header {
  display: flex;
  height: 80px;
  background-color: #fff;
  .nameLogo {
    margin-left: 20px;
    a {
      font-family: "Oleo Script", cursive;
      font-size: 3.5rem;
      color: black;
      &:link,
      &:active,
      &:hover,
      &:visited {
        text-decoration: none;
      }
    }
  }
}

.burger-btn {
  display: flex;
  flex-direction: column;
  justify-items: center;
  a {
    padding-bottom: 0px;
    margin-left: 10px;
    font-family: "Oleo Script", cursive;
    font-size: 2.5rem;
    &:link,
    &:active,
    &:visited {
      color: #fff;
      text-decoration: none;
    }
    &:hover {
      color: #e8a87c;
    }
  }
}
// .menu-item {
//   display: flex;
//   flex-direction: column;
//   align-items: center;
// }
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

.infoLink {
  margin-bottom: 5px;
  a {
    font-size: 18px;
    &:link,
    &:active,
    &:hover,
    &:visited {
      color: #364d79;
      text-decoration: none;
    }
  }
}

.fab {
  margin-right: 4px;
  font-size: 2rem;
  color: #364d79;
}

.infoLink2 {
  font-size: 15px;
  color: #797979;
}
</style>

<script>
import { Slide } from "vue-burger-menu";
export default {
  name: "homePage",
  components: {
    Slide
  }
};
</script>
