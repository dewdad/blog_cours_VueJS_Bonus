<template>
  <div class="text-xs-center">
    <v-dialog
      v-model="dialog"
      width="500"
    >
      <v-btn
        fab
        bottom
        right
        slot="activator"
        color="pink"
        fixed
      >
        <v-icon color="white" dark>add</v-icon>
      </v-btn>
      <v-card>
        <v-card-title
          class="headline grey lighten-2"
          primary-title
        >
          Ajouter un article
        </v-card-title>

        <v-card-text>
          <v-container id="input-usage" grid-list-xl fluid >
            <v-layout wrap>
              <v-flex xs12>
                <v-form ref="formArticle" v-model="valid" lazy-validation>
                  <v-text-field v-model="title" label="Nom" required @keyup.enter="addArticle" :rules="[v => !!v || 'Le nom est requis']"></v-text-field>
                  <v-textarea name="content" label="Description"  v-model="description" required @keyup.enter="addArticle" :rules="[v => !!v || 'E-mail est requis']"></v-textarea>
                  <v-text-field v-model="urlimage" label="Url image" required @keyup.enter="addArticle" :rules="[v => !!v || 'Url image est requis']"></v-text-field>
                </v-form>
              </v-flex>
            </v-layout>
          </v-container>
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" flat @click="addArticle" >
            Valider
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import Article from '../store/models/Article'
export default {
  name: 'AddArticle',
  data () {
    return {
      valid: true,
      dialog: false,
      title: '',
      description: '',
      urlimage: ''
    }
  },
  methods: {
    addArticle () {
      // Si le form est valide on ajout l'article
      if (this.$refs.formArticle.validate()) {
        // Utilisation de VuexORM pour insérer dans le store
        Article.insert({ data: { title: this.title, description: this.description, urlimage: this.urlimage, id_user: 1 } }).then(() => {
          this.$root.$emit('article-added')
          this.dialog = false
        })
      }
    }
  }
}
</script>

<style scoped>

</style>
