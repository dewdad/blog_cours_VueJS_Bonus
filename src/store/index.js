// Import Vue node modules
import Vue from 'vue'
import Vuex from 'vuex'
import VuexORM from '@vuex-orm/core'
import VuexORMAxios from '@vuex-orm/plugin-axios'

// Import modules
import modules from './modules'

// Import Axios config
import AxiosRequestConfig from './AxiosRequestConfig'

// Models
import Article from './models/Article'
import Commentaire from './models/Commentaire'
import User from './models/User'

// Create database VuexORM
const database = new VuexORM.Database()

// Register Models into database
database.register(Article)
database.register(Commentaire)
database.register(User)

// Set VuexORMAxios config
VuexORM.use(VuexORMAxios, {
  database,
  http: AxiosRequestConfig
})

// Make Vue use Vuex
Vue.use(Vuex)

// Export store
export default new Vuex.Store({
  modules,
  plugins: [VuexORM.install(database)],
  strict: process.env.NODE_ENV !== 'production'
})
