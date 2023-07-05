<template>
  <div class="my-5">
    <h2>Estado actual</h2>
    <table class="table table-dark table-striped">
      <thead>
        <tr>
          <th scope="col">Moneda</th>
          <th scope="col">Balance</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(element, index) in this.history" :key="index">
          <th scope="row">{{ element.crypto }}</th>
          <td>{{ this.balance[index] }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import restdbService from "@/services/restdbService";
import criptosService from "@/services/criptosService";

export default {
  name: "BalanceComponent",

  data() {
    return {
      history: null,
      loading: true,
      venta: null,
      compra: null,
      balance: [],
    };
  },

  created() {
    restdbService
      .getHistory()
      .then((response) => {
        this.history = response.data;
        console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
      });

    for (let i = 0; i < 1; i++) {
      let cryptos = [
        { crypto: "eth", cant: 0, cant_money: 0 },
        { crypto: "dai", cant: 0, cant_money: 0 },
        { crypto: "btc", cant: 0, cant_money: 0 },
        { crypto: "sol", cant: 0, cant_money: 0 },
        { crypto: "ltc", cant: 0, cant_money: 0 },
        { crypto: "ada", cant: 0, cant_money: 0 },
      ];

      for (const element of this.history) {
        switch (element.crypto_code) {
          case "eth":
            if (element.action == "sale") {
              cryptos[0].cant -= parseFloat(element.crypto_amount);
              cryptos[0].cant_money -= parseFloat(element.money);
            } else {
              cryptos[0].cant += parseFloat(element.crypto_amount);
              cryptos[0].cant_money += parseFloat(element.money);
            }

            break;
          case "dai":
            if (element.action == "sale") {
              cryptos[1].cant -= parseFloat(element.crypto_amount);
              cryptos[1].cant_money -= parseFloat(element.money);
            } else {
              cryptos[1].cant += parseFloat(element.crypto_amount);
              cryptos[1].cant_money += parseFloat(element.money);
            }
            break;
          case "btc":
            if (element.action == "sale") {
              cryptos[2].cant -= parseFloat(element.crypto_amount);
              cryptos[2].cant_money -= parseFloat(element.money);
            } else {
              cryptos[2].cant += parseFloat(element.crypto_amount);
              cryptos[2].cant_money += parseFloat(element.money);
            }
            break;
          case "sol":
            if (element.action == "sale") {
              cryptos[3].cant -= parseFloat(element.crypto_amount);
              cryptos[3].cant_money -= parseFloat(element.money);
            } else {
              cryptos[3].cant += parseFloat(element.crypto_amount);
              cryptos[3].cant_money += parseFloat(element.money);
            }
            break;
          case "ltc":
            if (element.action == "sale") {
              cryptos[4].cant -= parseFloat(element.crypto_amount);
              cryptos[4].cant_money -= parseFloat(element.money);
            } else {
              cryptos[4].cant += parseFloat(element.crypto_amount);
              cryptos[4].cant_money += parseFloat(element.money);
            }
            break;
          case "ada":
            if (element.action == "sale") {
              cryptos[5].cant -= parseFloat(element.crypto_amount);
              cryptos[5].cant_money -= parseFloat(element.money);
            } else {
              cryptos[5].cant += parseFloat(element.crypto_amount);
              cryptos[5].cant_money += parseFloat(element.money);
            }
            break;

          default:
            break;
        }
      }

      for (let i = 0; i < cryptos; i++) {
        const element = cryptos[i];
        const name = cryptos[i].crypto;
        console.log("hola");
        criptosService
          .getCriptos(name)
          .then((response) => {
            this.compra = response.data.ask;
            this.venta = response.data.bid;
          })
          .catch((err) => {
            console.log(err);
          });

        let calculo = element.cant * this.venta - element.cant_money;
        this.balance.push(calculo);

        console.log("hola");
        console.log(calculo);
      }
    }
  },
};
</script>
