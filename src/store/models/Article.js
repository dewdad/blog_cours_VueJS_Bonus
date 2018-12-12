// GameModel Model
import { Model } from '@vuex-orm/core'
import Commentaire from './Commentaire'
import User from '@/store/models/User'

export default class Article extends Model {
  // This is the name used as module name of the Vuex Store.
  static entity = 'articles'

  // Name primary key
  static primaryKey = 'id_article'

  // Fields of class
  static fields () {
    return {
      id_article: this.increment(),
      id_user: this.attr(null),
      title: this.string(''),
      date: this.attr(Date.now()),
      description: this.string(''),
      urlimage: this.string(''),
      commentaires: this.hasMany(Commentaire, 'id_article'),
      user: this.belongsTo(User, 'id_user')
    }
  }
}
