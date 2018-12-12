<template>
    <v-card id="card" class="my-3" hover>
      <v-img
        class="white--text"
        height="170px"
        :src="article.urlimage"
      />
      <v-card-title primary-title>
        <div>
          <div class="headline">{{ article.title}}</div>
          <span id="description" class="grey--text">{{ article.description}}</span>
        </div>
      </v-card-title>
      <v-card-actions>
        <v-icon color="blue darken-4" medium>forum</v-icon>{{ article.commentaires.length }} commentaires
        <v-spacer></v-spacer>
        <v-btn flat class="blue--text" :to="'/article/' + article.id_article">Lire</v-btn>
      </v-card-actions>
    </v-card>
</template>

<script>
export default {
  name: 'CardUi',
  props: {
    article: Object
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
