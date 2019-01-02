// Evenement Model
import { Model } from '@vuex-orm/core'

export default class Evenement extends Model {
  // This is the name used as module name of the Vuex Store.
  static entity = 'evenements'

  // Name primary key
  static primaryKey = 'id_evenement'

  // Fields of class
  static fields () {
    return {
      id_evenement: this.increment(),
      title: this.attr(''),
      startTime: this.attr(null),
      endTime: this.attr(null),
      content: this.attr('')
    }
  }
}
