// GameModel Model
import { Model } from '@vuex-orm/core'
import User from '@/store/models/User'

export default class Commentaire extends Model {
  // This is the name used as module name of the Vuex Store.
  static entity = 'commentaires'

  // Name primary key
  static primaryKey = 'id_commentaire'

  // Fields of class
  static fields () {
    return {
      id_commentaire: this.increment(),
      date: this.attr(Date.now()),
      content: this.string(''),
      id_article: this.attr(null),
      id_user: this.attr(null),
      user: this.belongsTo(User, 'id_user')
    }
  }
}
