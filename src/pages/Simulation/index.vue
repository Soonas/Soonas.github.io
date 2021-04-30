<template>
  <div class="simulation">
    <Title title="Simulação de Taxas" />
    <div class="value">
      <h1>{{ subtitle }}</h1>
      <div class="control">
        <input class="input" type="text" placeholder="R$0,00" v-model="value" />
        <button class="btn" v-on:click="handleCalculate()">Calcular</button>
      </div>

      <div class="table" v-if="showTable">
        <Table />
      </div>
    </div>
  </div>
</template>

<script lang='ts'>
import { defineComponent } from "vue";
import Table from "../../components/Body/Table.vue"
import Title from "../../components/Header/Title.vue";

export default defineComponent({
  name: "Index",
  components: {Table, Title},
  props: {
    subtitle: {
      type: String,
      default: "Valor Desejado",
    },
  },
  data() {
    return {
      showTable: false,
      value: 0,
    }
  },
  methods: {
    handleCalculate() {
      if (this.value < 300) {
        alert("Valor mínimo para simulação: 300");
        return;
      }

      if (this.value > 10000) {
        alert("Valor máximo para simulação: 10.000");
        return;
      }

      this.showTable = true;
    },
  },
});
</script>

<style lang= "scss" src="./style.scss" scoped/>