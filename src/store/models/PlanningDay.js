// Evenement Model
import { Model } from '@vuex-orm/core'
import Evenement from '@/store/models/Evenement'

export default class PlanningDay extends Model {
  // This is the name used as module name of the Vuex Store.
  static entity = 'planningdays'

  // Name primary key
  static primaryKey = 'id_planning_day'

  // Fields of class
  static fields () {
    return {
      id_planning_day: this.increment(),
      date: this.attr(''),
      evenements: this.hasMany(Evenement, 'id_planning_day')
    }
  }
}
