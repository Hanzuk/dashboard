<template>
  <div
    class="select is-rounded is-fullwidth"
    @change="filterIndicators($event)"
  >
    <select>
      <option>2019</option>
      <option>2018</option>
      <option>2017</option>
      <option>2016</option>
    </select>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'FilterIndicators',
  methods: mapActions(['filterIndicators'])
}
</script>
