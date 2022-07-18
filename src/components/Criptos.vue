<template>
  <div class="criptos">
    <div v-for="(cripto, index) in criptos" :key="index" class="cripto">
      <img src="../assets/lemon.png" alt="BTC" />
      <h2>{{ cripto }}</h2>
      <ul>
        <li>Compra: ${{ compra[index] }}</li>
        <li>Venta: ${{ venta[index] }}</li>
      </ul>
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
          console.log(response.data);
        })
        .catch((err) => {
          console.log(err);
        });
    });
  },
};
</script>

<style scoped>
div img {
  width: 80px;
}
.criptos {
  display: flex;
  flex-flow: row wrap;
}
.cripto {
  padding: 10px;
  margin: 20px;
  list-style: none;
  border: 2px solid #feb139;
  border-radius: 5px;
  background: #f55353;
  height: auto;
  width: 40%;
}
.cripto li {
  display: flex;
  list-style: none;
  border: 1px solid #f6f54d;
  margin: 3px;
  border-radius: 5px;
  padding: 3px;
}
</style>
