<template>
  <div class="loan">
    <Title title="Solicitar Empréstimo" />
    <div class="value">
      <h1>{{ title }}</h1>
      <div class="control">
        <input
          class="input"
          type="text"
          placeholder="074.119.055-93"
          v-model="value"
        />
        <button class="btn">Buscar</button>
      </div>
    </div>
    <div class="found">
      <h1>{{ subtitle }}</h1>
      <p>puxa numero cpf</p>
      <h1 class="lara">Lara Test</h1>
      <button class="btn" v-on:click="solicitation">Solicitar</button>
      // ao apertar botão ele jogará para o component Loan na pasta Form
    </div>
  </div>
</template>

<script lang='ts'>
import { defineComponent } from "@vue/composition-api";
import Title from "../../components/Header/Title.vue";

export default defineComponent({
  components: { Title },
  props: {
    title: {
      type: String,
      default: "Busque o Cliente"
    },
    subtitle: {
      type: String,
      default: "Cliente encontrado:"
    },
  },
  methods: {
    solicitation: function() {
      // retorna proxima página (5)
    }
  }
});
</script>

<style lang= "scss" src="./style.scss" scoped/>

// v-on:click="handleCalculate()"