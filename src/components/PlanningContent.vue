<template>
  <v-container grid-list-md text-xs-center fluid  >
    <v-layout align-center justify-center row>
      <planning-day :min-block="30" :hour-start="8" :hour-end="16" :height-block="40"></planning-day>
    </v-layout>
  </v-container>
</template>

<script>
import PlanningDay from '@/components/PlanningDay'
export default {
  name: 'PlanningContent',
  components: {
    PlanningDay
  }
}
</script>

<style scoped>

</style>
