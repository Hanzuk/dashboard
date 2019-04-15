<template>
  <div class="wrapper">
    <Sidebar />
    <router-view />
  </div>
</template>

<script>
import Sidebar from '@/components/Sidebar.vue'

export default {
  components: {
    Sidebar
  }
}
</script>

<style lang="scss">
@import 'bulma/sass/utilities/_all.sass';
@import 'bulma/sass/base/helpers.sass';
@import 'bulma/sass/grid/columns.sass';
@import 'bulma/sass/elements/form.sass';
@import 'bulma/sass/elements/box.sass';
@import 'bulma/sass/elements/table.sass';
@import 'bulma/sass/elements/title.sass';

:root {
  --sidebar-width: 250px;
  --sidebar-bg: #243044;
  --background: #e3e9ed;
  --box-bg: #ffffff;
}

html {
  background-color: var(--background);
}

body {
  font-family: 'Heebo', sans-serif;
}

.wrapper {
  display: flex;
  flex-direction: column;
}

.header {
  font-weight: 300;
  margin-bottom: 20px;
  background-color: var(--box-bg);
  box-shadow: 0 2px 3px rgba(10, 10, 10, 0.1), 0 0 0 1px rgba(10, 10, 10, 0.1);
}

.sidebar {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: fixed;
  flex-shrink: 0;
  height: 100%;
  width: var(--sidebar-width);
  z-index: 100;
  background-color: var(--sidebar-bg);

  .sidebar-top {
    margin-top: 15px;
  }

  .sidebar-header {
    font-weight: 700;
  }

  .sidebar-divider {
    height: 1px;
    margin-top: 10px;
    margin-left: 20px;
    margin-right: 20px;
    margin-bottom: 5px;
    border: none;
    background-color: rgba(#ffffff, 0.2);
  }

  .sidebar-content {
    li {
      padding: 2px 10px;

      a {
        display: block;
        padding: 10px;
        border-radius: 6px;
        font-weight: 300;
        text-decoration: none;
        outline: none;
        color: rgba(#fff, 0.5);
        transition: color 0.4s ease-in-out;

        i {
          margin-right: 10px;
          color: rgba(#fff, 0.5);
          transition: color 0.4s ease-in-out;
        }

        &:hover,
        &:hover i {
          color: rgba(#fff, 1);
        }
      }
    }
  }
}

.main {
  align-self: flex-end;
  width: calc(100% - var(--sidebar-width));
}

.title-wrapper {
  display: flex;
  align-items: center;
}

.hamburger {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 20px;
  width: 25px;
  margin-right: 11px;
  cursor: pointer;

  .hamburger-bar {
    position: relative;
    width: 100%;
    height: 2px;
    background-color: #1b2433;
    border-radius: 6px;
    transition: all 0.5s ease-in-out;
  }
}

.toggled {
  .bar-1 {
    top: 9px;
    transform: rotate(135deg);
  }
  .bar-2 {
    transition: all 0s ease-in-out;
    opacity: 0;
  }
  .bar-3 {
    bottom: 9px;
    transform: rotate(-135deg);
  }
}

.date {
  padding-left: 0;
}

.box-title {
  font-weight: 400;
}

.box-subtitle {
  font-weight: 300;
}

@media (max-width: 1024px) {
  body {
    overflow-x: hidden;
  }

  .sidebar {
    transition: transform 0.4s ease-in-out;
    transform: translateX(calc(var(--sidebar-width) * -1));
  }

  .sidebar-opened {
    transform: translateX(0);
  }

  .main-opened {
    transform: translateX(var(--sidebar-width));
  }

  .main {
    width: 100%;
    transition: transform 0.4s ease-in-out;
  }
}
</style>
