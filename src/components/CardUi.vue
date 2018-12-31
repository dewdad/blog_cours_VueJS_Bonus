<template>
    <v-card id="card" class="my-3" hover>
      <v-img class="white--text" height="170px" :src="article.urlimage" />
      <v-card-title primary-title>
        <div>
          <div class="headline">{{ article.title}}</div>
          <span id="description" class="grey--text">{{ article.description}}</span>
        </div>
      </v-card-title>
      <v-card-actions>
        <v-icon color="blue darken-4" medium>forum</v-icon>{{ nbCommentaires }} commentaires
        <v-spacer></v-spacer>
        <v-btn flat class="red--text" v-if="showDelete" @click="deleteArticle(article.id_article)"><v-icon color="red darken-4" medium>delete</v-icon></v-btn>
        <v-btn flat class="blue--text" :to="'/blog/article/' + article.id_article">Lire</v-btn>
      </v-card-actions>
    </v-card>
</template>

<script>
import Commentaire from '../store/models/Commentaire'
import Article from '../store/models/Article'
export default {
  name: 'CardUi',
  props: {
    article: Object
  },
  data () {
    return {
      showDelete: false
    }
  },
  computed: {
    // Retourne le nombre de commentaire de l'article courant
    nbCommentaires () {
      // Utilisation de VuexORM pour récupérer des infos sur les commentaires dans le store
      return Commentaire.query().where('id_article', this.article.id_article).get().length
    }
  },
  mounted () {
    // Lorsque qu'un evenement 'show-delete' est émis on le catch ici
    this.$root.$on('show-delete', () => {
      this.showDelete = !this.showDelete
    })
  },
  methods: {
    // Supprime un article
    deleteArticle (idArticle) {
      // Utilisation de VuexORM pour supprimer dans le store
      Article.delete(idArticle)
    }
  }
}
</script>

<style scoped>
  hr {
    display: block;
    height: 1px;
    border: 0;
    border-top: 1px solid #ccc;
    margin: 1em 0;
    padding: 0;
  }

  #card {
    border: solid lightgray 1px;
    border-radius: 5px;
  }

  #image img{
    margin: auto;
    display: block;
  }

  #description {
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
  }
</style>
