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
            <p class="is-size-5-mobile is-size-4-desktop">Dashboard</p>
          </div>
        </div>
        <div class="column is-4-mobile is-2-desktop">
          <div class="control">
            <FilterIndicators />
          </div>
        </div>
        <div class="column date">
          <p class="is-size-6 has-text-right">{{ getDate() }}</p>
        </div>
      </div>
    </div>
    <div class="content">
      <div class="columns is-marginless">
        <div class="column">
          <div class="box">
            <p class="box-title is-size-5-mobile is-size-4-desktop">Ingresos</p>
            <Income />
          </div>
        </div>
        <div class="column">
          <div class="box">
            <p class="box-title is-size-5-mobile is-size-4-desktop">Gastos</p>
            <ExpensesByPeriod />
          </div>
        </div>
      </div>
      <div class="columns is-marginless">
        <div class="column">
          <div class="box">
            <p class="box-title is-size-5-mobile is-size-4-desktop">Utilidad</p>
            <Utility />
          </div>
        </div>
      </div>
      <div class="columns is-marginless">
        <div class="column is-half">
          <div class="box">
            <div class="columns is-mobile is-marginless">
              <div class="column is-paddingless">
                <p class="box-title is-size-5-mobile is-size-4-desktop">
                  Clientes por sede
                </p>
                <p class="box-subtitle is-size-7">Mínimo: 5000 | Meta: 9000</p>
              </div>
              <div class="column is-3-desktop is-paddingless">
                <FilterCustomers />
              </div>
            </div>
            <Customers />
          </div>
        </div>
        <div class="column is-half">
          <div class="box">
            <div class="columns is-marginless">
              <div class="column is-paddingless">
                <p class="box-title is-size-5-mobile is-size-4-desktop">
                  Gastos por sede
                </p>
                <p class="box-subtitle is-size-7">Gastos totales a la fecha</p>
              </div>
            </div>
            <ExpensesByHeadquarter />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import FilterIndicators from '@/components/FilterIndicators.vue'
import FilterCustomers from '@/components/FilterCustomers.vue'
import Income from '@/components/Income.vue'
import ExpensesByPeriod from '@/components/ExpensesByPeriod.vue'
import Utility from '@/components/Utility.vue'
import Customers from '@/components/Customers.vue'
import ExpensesByHeadquarter from '@/components/ExpensesByHeadquarter.vue'
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'home',
  components: {
    FilterIndicators,
    FilterCustomers,
    Income,
    ExpensesByPeriod,
    Utility,
    Customers,
    ExpensesByHeadquarter
  },
  computed: {
    ...mapGetters(['getMenuOpened'])
  },
  methods: {
    ...mapActions(['toggleMenu']),
    getDate() {
      let date = new Intl.DateTimeFormat('es-CR', {
        year: 'numeric',
        month: 'long'
      }).format(new Date())
      return date[0].toUpperCase() + date.slice(1)
    }
  }
}
</script>
