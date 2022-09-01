<template>
  <div class="login-container">
    <div class="login">
      <input id="input-login" type="text" placeholder="Id" v-model="this.Id" />

      <router-link id="btn-login" @click="saveId" to="/criptos"
        >Ingresar</router-link
      >
    </div>
  </div>
</template>

<script>
export default {
  name: "LoginComponent",
  data() {
    return {
      Id: "",
    };
  },
  props: {},
  methods: {
    saveId() {
      this.$store.state.Id = this.Id;
      localStorage.Id = this.Id;
      console.log(this.$store.state.Id);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.login-container {
  background: #f5eddc;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
}

#btn-login {
  width: 50%;
  align-self: center;
  margin-top: 20px;
  background: #eb1d36;
  border: none;
  border-radius: 5px;
  padding: 5px;
  text-decoration: none;
  color: #000;
}
#input-login {
  background: #a2b5bb;
  border: 1px solid #eb1d36;
  border-radius: 5px;
  height: 2em;
}

.login {
  background: #cfd2cf;
  border: 1px solid #a2b5bb;
  border-radius: 5px;
  padding: 30px;
  display: flex;
  flex-flow: column wrap;
}
#btn-login:hover {
  background: #ff001e;
  cursor: pointer;
}
</style>
