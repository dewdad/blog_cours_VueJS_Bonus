<template>
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
    <add-article></add-article>
  </div>
</template>

<script>
import CardUi from '@/components/CardUi'
import AddArticle from '@/components/AddArticle'
import { mapState } from 'vuex'
// import Article from '../store/models/Article'
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
    this.$store.dispatch('Article/loadArticles')
    this.$store.dispatch('User/loadUsers')
  }
}
</script>

<style scoped>
  #articles {
    padding: 10px;
  }
</style>
