<template>
  <div
    class="select is-rounded is-small is-pulled-right"
    @change="filterCustomers($event)"
  >
    <select>
      <option value="1">Sede 1</option>
      <option value="2">Sede 2</option>
      <option value="3">Sede 3</option>
      <option value="4">Sede 4</option>
      <option value="5">Sede 5</option>
      <option value="6">Sede 6</option>
      <option value="7">Sede 7</option>
      <option value="8">Sede 8</option>
      <option value="9">Sede 9</option>
      <option value="10">Sede 10</option>
    </select>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'FilterCustomers',
  methods: mapActions(['filterCustomers'])
}
</script>
