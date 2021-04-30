<template>
  <div class="content">
    <div class="content-top">
      <img class="group" src="../../assets/images/Grupo270.svg" />
      <img class="filing" src="../../assets/images/filing-2.svg" />
      <h1>{{ title }}</h1>
    </div>
    <div class="top-middle"></div>
  </div>
</template>

<script>
import { defineComponent } from "@vue/composition-api";


export default defineComponent({
  props: {
    title: {
      type: String,
    },
  },
});
</script>

<style lang= "scss" src="./style.scss" scoped/>
