<template>
  <div class="content">
    <table
      class="content-table"
      v-for="item in items"
      :key="item.id"
      :style="{
        border: item.id == itemId ? 'solid 2px orange' : '',
      }"
    >
      <thead>
        <tr>
          <th>
            <input type="radio" name="radio" v-on:change="changeTable(item)"/>
          </th>
          <th colspan="8">Tabela Padrão</th>
        </tr>

        <tr>
          <th>Parcela</th>
          <th>Juros Parcela</th>
          <th>Valor Parcela</th>
          <th>Valor Total</th>
          <th>Comissão Parceiro</th>
        </tr>
      </thead>

      <tbody>
        <tr class="active-row" v-for="row in item.installments" :key="row.id">
          <td >{{ row.installments }}</td>
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
  props: {
    itemId: Number,
  },
  data() {
    return {
      items: mockData.rateTable,
      checkedNames: false,
    };
  },
  methods: {
    changeTable: function (item) {
      this.$emit("inputChanged", item);
    },
  },
});
</script>

<style lang= "scss" src="./style.scss" scoped/>