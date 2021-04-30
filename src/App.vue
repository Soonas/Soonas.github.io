<template>
  <div id="app">
    <TheNavigation />
    <div class="content" :class="{ shrink: showNav }">
      <div id="navigation-icon">
        <div class="topnav">
          <i class="fas fa-bars" @click.stop="showNav = !showNav"></i>
        </div>
      </div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import TheNavigation from "./components/Header/TheNavigation.vue";


export default {
  name: "App",
  data: () => {
    return {
      showNav: false,
    };
  },
  components: {TheNavigation},
  watch: {
    $route() {
      this.showNav = false;
    },
  },
};
</script>

<style lang= "scss" src="./style.scss" scoped/>
