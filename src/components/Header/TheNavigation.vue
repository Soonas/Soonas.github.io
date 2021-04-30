<template>
  <div class="navigation">
    <ul>
      <li><router-link to="/">Simulação</router-link></li>
      <li><router-link to="/loan">Solicitação</router-link></li>
      <li><router-link to="/details">Detalhes</router-link></li>
    </ul>
  </div>
</template>

<script lang='ts'>
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
})
</script>


<style lang= "scss" src="./style.scss" scoped/>