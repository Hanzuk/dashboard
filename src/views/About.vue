<template>
  <div class="main" v-bind:class="{ 'main-opened': getMenuOpened }">
    <div class="header">
      <div class="columns is-mobile is-vcentered is-marginless">
        <div class="column is-2-desktop">
          <div class="title-wrapper">
            <div
              class="is-hidden-desktop hamburger"
              @click="toggleMenu"
              v-bind:class="{ toggled: getMenuOpened }"
            >
              <div class="hamburger-bar bar-1"></div>
              <div class="hamburger-bar bar-2"></div>
              <div class="hamburger-bar bar-3"></div>
            </div>
            <p class="is-size-5-mobile is-size-4-desktop">About</p>
          </div>
        </div>
      </div>
    </div>
    <div class="content">
      <div class="columns is-marginless">
        <div class="column is-full">
          <div class="box">
            <div class="columns is-marginless">
              <div class="column">
                <h2 class="box-title title is-5 font-bold">
                  Tecnologías y servicios utilizados
                </h2>
              </div>
            </div>
            <!-- Inicio tecnologias y servicios para base de datos -->
            <div class="columns is-mobile is-multiline is-marginless">
              <div class="column is-full">
                <h1 class="subtitle is-5">Base de datos</h1>
              </div>
              <div class="column is-half">
                <div class="columns is-multiline is-marginless">
                  <div class="column is-full">
                    <h1 class="is-size-5">Tecnología</h1>
                  </div>
                  <div class="column flex-sb">
                    <p class="font-light">MongoDB</p>
                    <a
                      href="https://www.mongodb.com/es/what-is-mongodb"
                      target="_blank"
                    >
                      <i class="fas fa-external-link-alt"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div class="column is-half">
                <div class="columns is-multiline is-marginless">
                  <div class="column is-full">
                    <h1>Servicio</h1>
                  </div>
                  <div class="column flex-sb">
                    <p class="font-light">MongoDB Atlas</p>
                    <a
                      href="https://www.mongodb.com/es/cloud/atlas"
                      target="_blank"
                    >
                      <i class="fas fa-external-link-alt"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <!-- Fin tecnologias y servicios para base de datos -->
            <!-- Inicio tecnologias y servicios para API REST -->
            <div class="columns is-mobile is-multiline is-marginless">
              <div class="column is-full">
                <h1 class="subtitle is-5">API REST</h1>
              </div>
              <div class="column is-half">
                <div class="columns is-multiline is-marginless">
                  <div class="column is-full">
                    <h1>Tecnología</h1>
                  </div>
                  <div class="column is-full flex-sb">
                    <p class="font-light">Node.js</p>
                    <a href="https://nodejs.org/es/" target="_blank">
                      <i class="fas fa-external-link-alt"></i>
                    </a>
                  </div>
                  <div class="column is-full flex-sb">
                    <p class="font-light">Express</p>
                    <a href="https://expressjs.com/" target="_blank">
                      <i class="fas fa-external-link-alt"></i>
                    </a>
                  </div>
                  <div class="column is-full flex-sb">
                    <p class="font-light">mongoose</p>
                    <a href="https://mongoosejs.com/" target="_blank">
                      <i class="fas fa-external-link-alt"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div class="column is-half">
                <div class="columns is-multiline is-marginless">
                  <div class="column is-full">
                    <h1>Servicio</h1>
                  </div>
                  <div class="column flex-sb">
                    <p class="font-light">Heroku</p>
                    <a href="https://www.heroku.com/what" target="_blank">
                      <i class="fas fa-external-link-alt"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <!-- Fin tecnologias y servicios para API REST -->
            <!-- Inicio tecnologias y servicios para Aplicación Web (Dashboard) -->
            <div class="columns is-mobile is-multiline is-marginless">
              <div class="column is-full">
                <h1 class="subtitle is-5">Aplicación Web (Dashboard)</h1>
              </div>
              <div class="column is-half">
                <div class="columns is-multiline is-marginless">
                  <div class="column is-full">
                    <h1>Tecnología</h1>
                  </div>
                  <div class="column is-full flex-sb">
                    <p class="font-light">Vue.js</p>
                    <a href="https://vuejs.org/" target="_blank">
                      <i class="fas fa-external-link-alt"></i>
                    </a>
                  </div>
                  <div class="column is-full flex-sb">
                    <p class="font-light">ApexCharts</p>
                    <a href="https://apexcharts.com/" target="_blank">
                      <i class="fas fa-external-link-alt"></i>
                    </a>
                  </div>
                  <div class="column is-full flex-sb">
                    <p class="font-light">Bulma</p>
                    <a href="https://bulma.io/" target="_blank">
                      <i class="fas fa-external-link-alt"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div class="column is-half">
                <div class="columns is-multiline is-marginless">
                  <div class="column is-full">
                    <h1>Servicio</h1>
                  </div>
                  <div class="column flex-sb">
                    <p class="font-light">Netlify</p>
                    <a href="https://www.netlify.com/about/" target="_blank">
                      <i class="fas fa-external-link-alt"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <!-- Fin tecnologias y servicios para Aplicación Web (Dashboard) -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  computed: {
    ...mapGetters(['getMenuOpened'])
  },
  methods: {
    ...mapActions(['toggleMenu'])
  }
}
</script>

<style lang="scss">
.flex-sb {
  display: flex;
  justify-content: space-between;
}

.font-light {
  font-weight: 200;
}

.font-regular {
  font-weight: 400;
}

.font-bold {
  font-weight: 700;
}

a {
  color: rgba(#000000, 0.3);
  transition: all 0.5s ease-in-out;

  &:hover {
    color: rgba(#000000, 0.6);
  }
}
</style>
