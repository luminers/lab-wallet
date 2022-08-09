<template>
  <div class="my-5 container">
    <h2>Estado actual</h2>
    <table class="table table-dark table-striped">
      <thead>
        <tr>
          <th scope="col">Moneda</th>
          <th scope="col">Cantidad</th>
          <th scope="col">Dinero</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(element, index) in actualState" :key="index">
          <th scope="row">{{ element.crypto }}</th>
          <td>{{ element.cant }}</td>
          <td>{{ element.cant_money }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "StateComponent",
  data() {
    return {};
  },
  props: {
    history: Array,
  },
  computed: {
    actualState() {
      let cryptos = [
        { crypto: "eth", cant: 0, cant_money: 0 },
        { crypto: "dai", cant: 0, cant_money: 0 },
        { crypto: "btc", cant: 0, cant_money: 0 },
      ];
      //let cryptos = [];
      for (const element of this.history) {
        switch (element.crypto_code) {
          case "eth":
            cryptos[0].cant += parseFloat(element.crypto_amount);
            cryptos[0].cant_money += parseFloat(element.money);

            break;
          case "dai":
            cryptos[1].cant += parseFloat(element.crypto_amount);
            cryptos[1].cant_money += parseFloat(element.money);
            break;
          case "btc":
            cryptos[2].cant += parseFloat(element.crypto_amount);
            cryptos[2].cant_money += parseFloat(element.money);
            break;

          default:
            break;
        }
      }
      return cryptos;
    },
  },
};
</script>
