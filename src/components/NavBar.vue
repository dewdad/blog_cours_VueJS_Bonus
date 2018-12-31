<template>
  <v-toolbar app  clipped-left dark>
    <v-toolbar-title>TP VueJS</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-items class="hidden-sm-and-down">
      <router-link tag="v-btn" flat to="/blog">
        Blog
      </router-link>
      <router-link tag="v-btn" flat to="/planing">
        Planning
      </router-link>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
export default {
  name: 'NavBar'
}
</script>

<style scoped>
</style>
