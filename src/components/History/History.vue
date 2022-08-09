<template>
  <div class="my-5 container">
    <h2>Historial de compras</h2>
    <table class="table table-striped">
      <thead>
        <tr>
          <th scope="col">Moneda</th>
          <th scope="col">Cantidad</th>
          <th scope="col">Precio</th>
          <th scope="col">Fecha</th>
        </tr>
      </thead>

      <div v-if="loading" class="d-flex justify-content-center">
        <div class="spinner-border" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
      </div>

      <tbody>
        <tr v-for="(element, index) in this.history" :key="index">
          <th scope="row">{{ element.crypto_code }}</th>
          <td>{{ element.crypto_amount }}</td>
          <td>{{ element.money }}</td>
          <td>{{ element.datetime }}</td>
        </tr>
      </tbody>
    </table>
  </div>
  <State v-if="!loading" :history="this.history" />
</template>

<script>
import restdbService from "@/services/restdbService";
import State from "@/components/History/State.vue";
export default {
  name: "HistoryComponent",
  components: {
    State,
  },
  data() {
    return {
      history: null,
      loading: true,
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
      })
      .then(() => {
        this.loading = false;
      });
  },
  computed: {},
};
</script>
