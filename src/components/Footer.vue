<template>
  <div class="footer">
    <a href="#" class="email">info@gmail.com</a>
    <div class="social_icons">
      <a href="https://www.instagram.com/garyzhang.cc/">
        <i class="fab fa-instagram"></i>
      </a>
      <a href="https://github.com/gary907478">
        <i class="fab fa-github"></i>
      </a>
      <a href="https://www.linkedin.com/in/gary-zhang-9b5947129/">
        <i class="fab fa-linkedin"></i>
      </a>
      <a href="https://gary907478.github.io/">
        <i class="fab fa-blogger"></i>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "Footer"
};
</script>


<style lang="scss" scoped>
$mainThemeColor: #dbdbdb;

.footer {
  height: 100px;
  width: 100%;
  padding-top: 1rem;
  background-color: $mainThemeColor;
  display: flex;
  flex-direction: column;
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
.email {
  font-size: 1.3rem;
  margin-bottom: 0.4rem;
}
.fab {
  font-size: 1.7rem;
  color: black;
  margin-right: 0.5rem;
}
</style>
