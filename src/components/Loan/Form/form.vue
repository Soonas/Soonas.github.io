<template>
  <div class="loan">
    <Title title="Solicitar Empréstimo" />
    <div class="value">
      <h1>{{ title }}</h1>
    </div>
    <div class="form">
      // div 2 colunas e 4 linhas com espaçamentos entre elas
    </div>
    <div class="found">
      <h1>{{ subtitle }}</h1>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api";
import Title from "../../Header/Title.vue";

export default defineComponent({
  components: { Title },
  props: {
    title: {
      type: String,
      default: "Insira os dados do cartão"
    },
    subtitle: {
      type: String,
      default: "Faça o upload dos anexos do cartão:"
    },
  },
});
</script>

<style lang= "scss" src="./style.scss" scoped/>