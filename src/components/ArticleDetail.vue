<template>
  <v-content>
      <div>
        <v-btn outline color="indigo" to="/blog">Retour</v-btn>
        <v-container grid-list-md style="background: white">
          <v-container grid-list-md>
            <v-layout row wrap>
              <v-flex xs12>
                <h1> {{ article.title }}</h1>
              </v-flex>
              <v-flex xs12>
                <p> publié par {{ article.user.name }} le {{ article.date | filterDate}}</p>
              </v-flex>
            </v-layout>
          </v-container>
          <v-divider></v-divider>
          <br>
          <v-layout row justify-center>
            <img style="max-width: 100%; max-height: 300px" id="imageArticle" :src="article.urlimage" />
          </v-layout>
          <br>
          <v-layout row>
            {{ article.description }}
          </v-layout>
          <br>
          <v-divider></v-divider>
          <v-layout row wrap>
            <v-flex xs12>
              <h3 v-if="article.commentaires.length > 0">Commentaires</h3>
              <h3 v-else>Soyez le premier à laisser un commentaire !</h3>
            </v-flex>
          </v-layout>
          <v-layout row wrap>
            <v-list three-line style="width: 100%;">
              <template v-for="(com, index) in article.commentaires">
                <v-list-tile
                  :key="index"
                  avatar >
                  <v-list-tile-avatar>
                    <img :src="'./static/avatars/00' + ++index + '.jpg'">
                  </v-list-tile-avatar>
                  <v-list-tile-content>
                    <v-list-tile-title v-html="com.user.name"></v-list-tile-title>
                    <v-list-tile-sub-title v-html="com.content"></v-list-tile-sub-title>
                  </v-list-tile-content>
                </v-list-tile>
                <v-divider :key="'divider' + index" v-if="index != article.commentaires.length"></v-divider>
              </template>
            </v-list>
          </v-layout>
          <add-commentaire v-if="addCommentaire" v-on:commentaire-added="addCommentaire = !addCommentaire"></add-commentaire>
          <v-btn v-if="!addCommentaire" color="primary" @click="addCommentaire = !addCommentaire"><v-icon>add_comment</v-icon>&nbsp;commentaire</v-btn>
        </v-container>
      </div>
    </v-content>
</template>

<script>
import AddCommentaire from './AddCommentaire'
import Article from '../store/models/Article'
export default {
  name: 'ArticleDetail',
  components: {
    AddCommentaire
  },
  data () {
    return {
      article: Article.query().whereId(parseInt(this.$route.params.id)).withAllRecursive(5).get()[0],
      addCommentaire: false
    }
  },
  mounted () {
    // Event lorsque qu'un article est rajouté on refresh la liste des commentaires de l'article
    this.$root.$on('commentaire-added', () => {
      // Refresh article
      this.article = Article.query().whereId(parseInt(this.$route.params.id)).withAllRecursive().get()[0]
      this.addCommentaire = false
    })
  },
  filters: {
    filterDate: function (value) {
      if (!value) return ''
      let date = new Date(value)
      let monthNames = [
        'Janvier', 'Février', 'Mars',
        'Avril', 'Mai', 'Juin', 'Juillet',
        'Août', 'Septembre', 'Octobre',
        'Novembre', 'Decembre'
      ]

      let day = date.getDate()
      let monthIndex = date.getMonth()
      let year = date.getFullYear()

      return day + ' ' + monthNames[monthIndex] + ' ' + year
    }
  }
}
</script>

<style scoped>
#imageArticle {

}
</style>
