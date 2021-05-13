<template>
  <div class="content">
    <div class="bottomnav">
      <div class="content-info" v-for="row in item.installments" :key="row.id">
        <h4>Nome: {{item.name}} &nbsp;Parcelas: {{row.installments}} &nbsp;Valor Parcela: R$</h4>
        <button class="btn" v-on:click="nextStep()" >Avançar</button>
      </div>
    </div>
  </div>
</template>

<script lang='ts'>
import { defineComponent } from "@vue/composition-api";
import mockData from "../../services/api/mockData";

export default defineComponent({
  name: "Index",
  props:{
    item: {}
  },
  data() {
    return {
      showNavBottom: false,
      items: mockData.rateTable,
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