<template>
  <div class="main" id="main">
    <div class="header">
      <div class="columns is-mobile is-vcentered is-marginless">
        <div class="column is-2-desktop">
          <div class="title-wrapper">
            <div
              class="is-hidden-desktop hamburger"
              @click="open"
              v-bind:class="{ toggled: isActive }"
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
export default {
  data() {
    return {
      isActive: false
    }
  },
  methods: {
    getDate() {
      let date = new Intl.DateTimeFormat('es-CR', {
        year: 'numeric',
        month: 'long'
      }).format(new Date())
      return date[0].toUpperCase() + date.slice(1)
    },
    open() {
      if (this.isActive) {
        this.isActive = !this.isActive
        document.getElementById('sidebar').classList.remove('sidebar-opened')
        document.getElementById('main').classList.remove('main-opened')
      } else {
        this.isActive = !this.isActive
        document.getElementById('sidebar').classList.add('sidebar-opened')
        document.getElementById('main').classList.add('main-opened')
      }
    }
  }
}
</script>
