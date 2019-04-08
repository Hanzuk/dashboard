<template>
  <div class="select is-rounded is-fullwidth">
    <select>
      <option>Sede 1</option>
      <option>Sede 2</option>
      <option>Sede 3</option>
      <option>Sede 4</option>
      <option>Sede 5</option>
      <option>Sede 6</option>
      <option>Sede 7</option>
      <option>Sede 8</option>
      <option>Sede 9</option>
      <option>Sede 10</option>
    </select>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'FilterCustomers',
  methods: mapActions(['filterIndicators'])
}
</script>
