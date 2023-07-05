<template>
  <div class="">
    <Trade2 :CriptoAOperar="this.$store.state.Cripto" />
  </div>
</template>

<script>
import Trade2 from "@/components/Trade/Trade2.vue";

export default {
  name: "TradeView",
  components: {
    Trade2,
  },
};
</script>

<style scoped></style>
