<template>
  <div class="simulation">
    <Title title="Simulação de Taxas" />
    <div class="value">
      <h1>{{ subtitle }}</h1>
      <div class="control">
        <input class="input" type="text" placeholder="R$0,00" v-model="value"/>
        <button class="btn" v-on:click="handleCalculate()" >Calcular</button>
      </div>

      <div class="table" v-if="showTable">
        <Table @inputChanged="selectItem" :itemId="itemSelected.id" />
      </div>

      <div class="navbar-bottom">
        <NavbarBottom v-if="itemSelected.id" :item="itemSelected" />
      </div>
    </div>
  </div>
</template>

<script lang='ts'>
import { defineComponent } from "vue";
import Table from "../../components/Body/Table.vue"
import Title from "../../components/Header/Title.vue";
import NavbarBottom from "../../components/Body/NavbarBottom.vue"

export default defineComponent({
  name: "Index",
  components: {Table, Title, NavbarBottom},
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
      checkedValue: false,
      itemSelected: {}
    }
  },
  methods: {
    handleCalculate() {
      if (this.value < 300) {
        alert("Valor mínimo para simulação: R$300,00");
        return;
      }

      if (this.value > 10000) {
        alert("Valor máximo para simulação: R$10.000,00");
        return;
      }

      this.showTable = true;
    },
    tableValue (checkedValue:boolean) {
      this.checkedValue = checkedValue;
      console.log(checkedValue)
    },
    selectItem (item:any) {
      this.itemSelected = item;
      console.log(item)
    },
    selectItemTable () {
      // seleciona item de uma tabela;
    }
  },
});
</script>

<style lang= "scss" src="./style.scss" scoped/>