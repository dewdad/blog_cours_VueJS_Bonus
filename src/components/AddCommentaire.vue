<template>
  <v-card>
    <v-toolbar
      card
      color="blue-grey"
      dark
    >
      <v-toolbar-title>Ajouter un commentaire</v-toolbar-title>
    </v-toolbar>

    <v-card-text>
      <v-text-field
        box
        label="Text"
        v-model="commentaire"
        @keyup.enter="addCommentaire"
      ></v-text-field>
    </v-card-text>
    <v-divider></v-divider>

    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn
        color="success"
        depressed
        @click="addCommentaire"
      >
        Publier
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import Commentaire from '../store/models/Commentaire'
export default {
  name: 'AddCommentaire',
  data () {
    return {
      commentaire: ''
    }
  },
  methods: {
    addCommentaire () {
      // Utilisation de VuexORM pour insérer dans le store
      Commentaire.insert({data: { id_article: parseInt(this.$route.params.id), content: this.commentaire, id_user: 1 }}).then(() => {
        this.$root.$emit('commentaire-added')
      })
    }
  }
}
</script>

<style scoped>

</style>
