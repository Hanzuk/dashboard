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

:root {
  --sidebar-width: 250px;
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
  background-image: linear-gradient(135deg, #667eea 0%, #764ba2 100%);

  & .sidebar-top {
    margin-top: 15px;
  }

  .sidebar-header {
    font-weight: 700;
  }

  & .sidebar-divider {
    height: 1px;
    margin-top: 10px;
    margin-left: 20px;
    margin-right: 20px;
    margin-bottom: 5px;
    background-color: rgba(#fff, 0.2);
  }

  & .sidebar-content {
    & li {
      padding: 2px 10px;

      & a {
        display: block;
        padding: 10px;
        border-radius: 6px;
        font-weight: 300;
        text-decoration: none;
        color: rgba(#fff, 1);

        & i {
          margin-right: 10px;
          color: rgba(#fff, 0.5);
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
  justify-content: space-around;
  height: 25px;
  width: 25px;
  margin-right: 11px;
  padding: 1px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  background-color: rgba(#fff, 0);

  & span {
    height: 2px;
    width: 100%;
    margin: 1px 0;
    background-color: #000;
  }
}

.date {
  padding-left: 0;
}

.box-title {
  font-weight: 300;
}

@media (max-width: 768px) {
  .sidebar {
    transform: translateX(calc(var(--sidebar-width) * -1));
  }

  .main {
    width: 100%;
  }
}
</style>
