<template>
  <div class="sidebar" v-bind:class="{ 'sidebar-opened': getMenuOpened }">
    <div class="sidebar-top">
      <div class="sidebar-header">
        <p
          class="is-uppercase has-text-centered has-text-white-ter is-size-4-desktop"
        >
          Gym-Nation
        </p>
      </div>
      <hr class="sidebar-divider" />
      <div class="sidebar-content">
        <ul>
          <li>
            <router-link
              to="/"
              class="is-size-6-desktop"
              @click.native="toggleMenu"
            >
              <i class="fas fa-tachometer-alt"></i>Home
            </router-link>
          </li>
          <li>
            <router-link
              to="/about"
              class="is-size-6-desktop"
              @click.native="toggleMenu"
            >
              <i class="fas fa-info-circle"></i>About
            </router-link>
          </li>
        </ul>
      </div>
    </div>
    <div class="sidebar-botton has-text-centered">
      <a href="https://bulma.io">
        <img
          src="https://bulma.io/images/made-with-bulma--white.png"
          alt="Made with Bulma"
          width="128"
          height="24"
        />
      </a>
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
