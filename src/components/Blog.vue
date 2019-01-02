<template>
  <v-content>
    <div class="blog">
      <div id="articles">
        <v-container grid-list-md text-md-center>
          <v-layout row wrap>
            <v-flex v-for="(item, index)  in articles.data" :key="`4${index}`" xs4>
              <card-ui v-bind:article="item"></card-ui>
            </v-flex>
          </v-layout>
        </v-container>
      </div>
      <v-btn fab fixed bottom right color="red" style="right: 80px" @click="showDelete">
        <v-icon color="white" dark>delete</v-icon>
      </v-btn>
      <add-article></add-article>
    </div>
  </v-content>
</template>

<script>
import CardUi from '@/components/CardUi'
import AddArticle from '@/components/AddArticle'
import { mapState } from 'vuex'
export default {
  name: 'Blog',
  components: {
    CardUi,
    AddArticle
  },
  computed: {
    ...mapState('entities', ['articles'])
  },
  mounted () {
    // Chargement des données via des méthodes spécifiques des stores
    this.$store.dispatch('Article/loadArticles')
    this.$store.dispatch('User/loadUsers')
  },
  methods: {
    showDelete () {
      // Emission de l'evenement 'show-delete'
      this.$root.$emit('show-delete')
    }
  }
}
</script>

<style scoped>
  #articles {
    padding: 10px;
  }
</style>
