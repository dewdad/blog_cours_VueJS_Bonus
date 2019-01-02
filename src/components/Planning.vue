<template>
  <div>
    <planning-side-bar :items="items"></planning-side-bar>
    <v-content>
      <planning-content></planning-content>
    </v-content>
  </div>
</template>

<script>
import PlanningSideBar from '@/components/PlanningSideBar'
import PlanningContent from '@/components/PlanningContent'
export default {
  name: 'Planning',
  components: {
    PlanningSideBar,
    PlanningContent
  },
  data () {
    return {
      items: [
        { title: 'Home', icon: 'dashboard' },
        { title: 'About', icon: 'question_answer' }
      ],
      right: null
    }
  }
}
</script>

<style scoped>
 #planningContainer {
   margin: 0;
   height: 100%;
 }
</style>
