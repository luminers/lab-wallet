<template>
  <div class="">
    <Trade :CriptoAOperar="this.$store.state.Cripto" />
  </div>
</template>

<script>
import Trade from "@/components/Trade/Trade.vue";

export default {
  name: "TradeView",
  components: {
    Trade,
  },
};
</script>

<style scoped></style>
