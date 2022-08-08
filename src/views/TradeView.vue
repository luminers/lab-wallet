<template>
  <div class="">
    <Trade :CriptoAOperar="this.$store.state.Cripto" />
    <History />
  </div>
</template>

<script>
import Trade from "@/components/Trade/Trade.vue";
import History from "@/components/Trade/History.vue";

export default {
  name: "TradeView",
  components: {
    Trade,
    History,
  },
};
</script>

<style scoped></style>
