<template>
  <div class="details">
    <Title title="Detalhe de Solicitação" />
  </div>
</template>

<script lang='ts'>
import { defineComponent } from "@vue/composition-api";
import Title from "../../components/Header/Title.vue";

export default defineComponent({
  components: { Title },
});
</script>

<style lang= "scss" src="./style.scss" scoped/>