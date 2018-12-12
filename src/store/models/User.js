// GameModel Model
import { Model } from '@vuex-orm/core'
import Article from './Article'
import Commentaire from './Commentaire'

export default class User extends Model {
  // This is the name used as module name of the Vuex Store.
  static entity = 'users'

  // Name primary key
  static primaryKey = 'id_user'

  // Fields of class
  static fields () {
    return {
      id_user: this.increment(),
      name: this.string(''),
      articles: this.hasMany(Article, 'id_user'),
      commentaires: this.hasMany(Commentaire, 'id_user')
    }
  }
}
