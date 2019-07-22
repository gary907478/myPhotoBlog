<template>
  <div id="app">
    <Header />
    <homePage />
    <Footer />
  </div>
</template>

<script>
import Header from "./components/Header";
import homePage from "./components/homePage";
import Footer from "./components/Footer";

export default {
  name: "app",
  components: {
    Header,
    homePage,
    Footer
  }
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
</style>
