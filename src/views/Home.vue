<template>
  <div class="main">
    <div class="header">
      <div class="columns is-mobile is-vcentered is-marginless">
        <div class="column is-2-desktop">
          <div class="title-wrapper">
            <button class="is-hidden-desktop hamburger">
              <span></span>
              <span></span>
              <span></span>
            </button>
            <p class="is-size-5-mobile is-size-4-desktop">Dashboard</p>
          </div>
        </div>
        <div class="column is-2-desktop">
          <div class="control is-expanded">
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
            <p class="box-title is-size-5-desktop">Ingresos</p>
            <Income />
          </div>
        </div>
        <div class="column">
          <div class="box">
            <p class="box-title is-size-5-desktop">Gastos</p>
            <ExpensesByPeriod />
          </div>
        </div>
      </div>
      <div class="columns is-marginless">
        <div class="column">
          <div class="box">
            <p class="box-title is-size-5-desktop">Utilidad</p>
            <Utility />
          </div>
        </div>
      </div>
      <div class="columns is-marginless">
        <div class="column is-half">
          <div class="box">
            <div class="columns is-marginless">
              <div class="column is-paddingless">
                <p class="box-title is-size-5-desktop">
                  Crecimiento clientes por sede
                </p>
                <p class="box-subtitle is-size-7">Meta: 6800 | Mínimo: 4000</p>
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
                <p class="box-title is-size-5-desktop">Gastos por sede</p>
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
  methods: {
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
