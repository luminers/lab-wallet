<template>
  <div class="main-container">
    <nav class="navbar navbar-expand-lg bg-light">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">CriptoSim</a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <router-link id="btn-login" class="nav-link" to="/criptos"
                >Criptos</router-link
              >
            </li>
            <li class="nav-item">
              <router-link id="btn-login" class="nav-link" to="/Trade"
                >Trade</router-link
              >
            </li>
            <li class="nav-item">
              <router-link id="btn-login" class="nav-link" to="/history"
                >Historial</router-link
              >
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Wallet
              </a>
              <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="#">Estado actual</a></li>

                <li><hr class="dropdown-divider" /></li>
                <li>
                  <a class="dropdown-item" href="#">Cerrar sesión</a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <router-view />

    <footer class="text-center text-white">
      <!-- Copyright -->
      <div class="text-center p-3" style="background-color: #111">
        © 2022 Copyright:
        <a class="text-white" href="">Joaquin Nunez</a>
      </div>
      <!-- Copyright -->
    </footer>
  </div>
</template>

<script>
// import footerComponent from "@/components/footerComponent.vue";
</script>

<style>
* {
  margin: 0;
  padding: 0;
}

#app {
  font-family: "Oswald", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #000;
}

footer {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  color: white;
  text-align: center;
}
</style>
