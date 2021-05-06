<template>
  <div class="content">
    <div class="bottomnav" v-if="showNavBottom">
      <div class="content-info">
        <h4>Nome: &nbsp;Parcelas: &nbsp;Valor Parcela: R$</h4>
        <button class="btn" v-on:click="nextStep()">Avançar</button>
      </div>
    </div>
  </div>
</template>

<script lang='ts'>
import { defineComponent } from "@vue/composition-api";

export default defineComponent({
  name: "Index",
  data() {
    return {
      showNavBottom: false,
    };
  },
  methods: {
    nextStep() {
      if (this.handleCalculate() === true) {
        this.$router.push("/loan");
      }
    },
  },
});
</script>


<style lang= "scss" src="./style.scss" scoped/>