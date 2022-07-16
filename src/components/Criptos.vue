<template>
  <div class="criptos">
    <div class="cripto">
      <img src="../assets/lemon.png" alt="Lemon cash" />
      <h2>Lemon Cash</h2>
      <ul>
        <li>Compra:</li>
        <li>Venta:</li>
        <li>Variacion:</li>
      </ul>
    </div>
    <div class="cripto">
      <img src="../assets/satoshi.png" alt="Lemon cash" />
      <h2>SatoshiTango</h2>
      <ul>
        <li>Compra:</li>
        <li>Venta:</li>
        <li>Variacion:</li>
      </ul>
    </div>
    <div class="cripto">
      <img src="../assets/ripio.png" alt="Lemon cash" />
      <h2>Ripio</h2>
      <ul>
        <li>Compra:</li>
        <li>Venta:</li>
        <li>Variacion:</li>
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
    };
  },
  created() {
    criptosService
      .getCriptos()
      .then((response) => {
        console.log(response.data);
      })
      .catch((err) => {
        console.log(err);
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
