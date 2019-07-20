<template>
  <div id="app">
    <Header />
    <homePage />
  </div>
</template>

<script>
import Header from "./components/Header";
import homePage from "./components/homePage";

export default {
  name: "app",
  components: {
    Header,
    homePage
  }
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
</style>
