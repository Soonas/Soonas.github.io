<template>
  <div class="details">
    <Title title="Detalhe de Solicitação" />
    <div class="content">
      <div class="sis">
        <p>Solicitação gerada por</p>
        <div class="value">
          <div class="total">
            R$6.000,00
          </div>
          <div class="depositar">
            R$6.000,00
          </div>
        </div>
        <div class="card">
          <div class="front">
            Ver Comprovante
          </div>
          <div class="back">
            Ver Comprovante
          </div>
          <div class="self-card">
            Ver Comprovante
          </div>
        </div>
      </div>
      <div class="manual">
        <div class="modalidade">
          <p>cartão crédito</p>
        </div>
        <div class="infoCli">
          <p>name</p>
        </div>
        <div class="infoGeral">
          <p>Data</p>
        </div>
      </div>
    </div>
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