<template>
  <div class="m-3 d-flex flex-wrap mb-5">
    <div
      v-for="(cripto, index) in criptos"
      :key="index"
      class="card-body border rounded m-3 p-3"
    >
      <img class="card-img-top" src="../assets/lemon.png" alt="BTC" />
      <div class="card-text">
        <h2 class="card-title">{{ cripto }}</h2>
        <ul class="card-text">
          <li>Compra: ${{ compra[index] }}</li>
          <li>Venta: ${{ venta[index] }}</li>
        </ul>
        <router-link
          id="btn-operar"
          class="btn btn-primary"
          @click="saveCripto(cripto)"
          to="Trade"
          >Operar</router-link
        >
      </div>
    </div>
  </div>
</template>

<script>
import criptosService from "@/services/criptosService";

export default {
  name: "CriptosComponent",
  data() {
    return {
      criptos: [],
      compra: [],
      venta: [],
    };
  },
  created() {
    let criptos = ["btc", "eth", "dai", "sol", "ada"];
    criptos.forEach((cripto) => {
      criptosService
        .getCriptos(cripto)
        .then(async (response) => {
          await this.compra.push(response.data.ask);
          await this.venta.push(response.data.bid);
          await this.criptos.push(cripto);
        })
        .catch((err) => {
          console.log(err);
        });
    });
  },
  methods: {
    saveCripto(data) {
      this.$store.state.Cripto = data;
      console.log(this.$store.state.Cripto);
    },
  },
};
</script>

<style scoped>
img {
  width: 100px;
}
</style>
