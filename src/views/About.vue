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
        <div class="column">
          <div class="box">
            <p class="box-title is-size-5-desktop">
              Tecnologías utilizadas para este prototipo
            </p>
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
