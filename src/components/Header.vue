<template>
  <header class="Header">
    <a href="index.html" class="nameLogo">Gary Zhang</a>
    <Slide right class="menu">
      <div class="pageList">
        <a href="#">Portrait</a>
        <a href="#">Urban</a>
        <a href="#">Landscape</a>
      </div>
    </Slide>
  </header>
</template>

<script>
import { Slide } from "vue-burger-menu";
export default {
  name: "Header",
  components: {
    Slide
  }
};
</script>

<style lang="scss" scoped>
.Header {
  margin-top: 0;
  height: 100px;
  background: white;
  display: flex;
  align-items: center;
  a {
    &:link,
    &:visited,
    &:hover,
    &:active {
      color: #000;
    }
  }
}

.nameLogo {
  margin-left: 2rem;
  font-size: 65px;
  font-family: "Abril Fatface", cursive;
  margin-top: -1rem;
  font-weight: 100;
  text-decoration-line: none;
}

.menu {
  a {
    &:link,
    &:visited,
    &:hover,
    &:active {
      color: #fff;
    }
  }
}

.pageList {
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-family: "Abril Fatface", cursive;
  font-size: 40px;
  a {
    margin-top: 1rem;
    cursor: pointer;
    text-decoration-line: none;
  }
}
</style>
