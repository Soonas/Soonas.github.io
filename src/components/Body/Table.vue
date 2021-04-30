<template>
  <div class="content"  >
    <table class="content-table" v-for="item in items" :key="item.id"
   :style="{'border' : checkedNames === 'radio-' + item.id ? 'solid 4px orange' : ''}"
    >
      <thead>
        <tr>
          <input type="radio" v-model="checkedNames" :value="'radio-' + item.id">
          <th colspan="8">Tabela Padrão</th>
        </tr>

        <tr>
          <th>Parcela </th>
          <th>Juros Parcela</th>
          <th>Valor Parcela</th>
          <th>Valor Total</th>
          <th>Comissão Parceiro</th>
        </tr>
      </thead>
      
      <tbody>
        <tr class="active-row" v-for="row in item.installments" :key="row.id">
          <td>{{ row.installments }}</td>
          <td>R$ {{ row.installmentInterest }}</td>
          <td>R$ {{ row.installmentValue }}</td>
          <td>R$ {{ row.fullValue }}</td>
          <td>R$ {{ row.comission }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { defineComponent } from "@vue/composition-api";
import mockData from "../../services/api/mockData";
export default defineComponent({
  data() {
    return {
      items: mockData.rateTable,
      checkedNames: false
    };
  },
});
</script>

<style lang= "scss" src="./style.scss" scoped/>