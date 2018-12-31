<template>
  <v-layout row>
    <v-flex xs12 sm6 offset-sm3>
      <v-card height="100%">
        <v-card-title class="blue white--text">
          <v-btn color="orange accent-4" dark>
            <v-icon dark left>arrow_back</v-icon>
            précédent
          </v-btn>
          <v-spacer></v-spacer>
          <h2>{{ new Date() | moment('DD/MM/YYYY') }}</h2>
          <v-spacer></v-spacer>
          <v-btn color="orange accent-4" dark>
            suivant
            <v-icon dark right>arrow_forward</v-icon>
          </v-btn>
        </v-card-title>
        <v-card-text>
          <v-dialog v-model="dialog" width="500" >
            <v-btn slot="activator" fab small color="orange darken-2" bottom left absolute dark>
              <v-icon>add</v-icon>
            </v-btn>
            <v-card>
              <v-card-title class="headline grey lighten-2" primary-title>
                Ajouter un evenement
              </v-card-title>

              <v-card-text>
                <v-text-field :value="event.title"></v-text-field>
                <v-time-picker v-model="event.startTime" width="200" landscape :min="hourStart.toString() + ':00'" scrollable format="24hr" :max="hourEnd.toString() + ':00'" :allowed-hours="allowedHours"></v-time-picker>
                <v-time-picker v-model="event.endTime" width="200" landscape :min="hourStart.toString() + ':00'" scrollable format="24hr" :max="hourEnd.toString() + ':00'" :allowed-hours="allowedHours"></v-time-picker>
              </v-card-text>

              <v-divider></v-divider>

              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="primary" flat @click="addEvent" >
                  Valider
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
          <v-container style="padding: 0; position: relative;">
            <div style="width: 20%">
                  <div v-for="(time, index) in hours" :key="index" :style="'height: ' + heightBlock + 'px; padding: 0'">
                    {{ time }}
                  </div>
              </div>
              <div  style="width: 80%">
                <div :style="'position: absolute; width: 75%; left: 20%; top: ' + rdv[2] + 'px;height: ' + rdv[1] + 'px; background: #' + (Math.random()*0xFFFFFF<<0).toString(16) + ';'" v-for="(rdv, index) in dataDayComputed" :key="index">
                  <div align-center justify-center v-if="index != (dataDay.length)" :style="'width: 100%; height:100%'" @click.prevent="nthg">
                    <v-layout align-center fill-height>
                      <v-flex>
                        {{ rdv[0].title }}
                      </v-flex>
                    </v-layout>
                  </div>
                </div>
              </div>
          </v-container>
        </v-card-text>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
import Evenement from '@/store/models/Evenement'
export default {
  name: 'PlanningDay',
  props: {
    minBlock: {
      type: Number,
      default: 30,
      validator: function (value) {
        return [15, 20, 30, 60].indexOf(value) !== -1
      }
    },
    heightBlock: {
      type: Number,
      default: 60
    },
    dataDay: {
      type: Array,
      default: function () {
        return []
      }
    },
    currentDay: {
      type: Date,
      default: function () {
        return new Date()
      }
    },
    hourStart: {
      type: Number,
      default: 8
    },
    hourEnd: {
      type: Number,
      default: 20
    }
  },
  data () {
    return {
      hours: [],
      heightOneMinute: 0,
      dialog: false,
      event: {
        title: '',
        startTime: new Date(),
        endTime: new Date()
      }
    }
  },
  computed: {
    dataDayComputed () {
      let data = []
      this._.each(this.dataDay, (el) => {
        data.push([{id: el.id, title: el.title}, (this.$moment(el.endTime).diff(this.$moment(el.startTime), 'minutes', true) / this.heightOneMinute) + 2, (this.$moment(el.startTime).diff(this.$moment([2018, 1, 1, 8]), 'minutes', true) / this.heightOneMinute) + 5])
      })
      return data
    }
  },
  methods: {
    nthg () {
      console.log('Nothing happened')
    },
    setHours () {
      let minutes = 0
      let time = ''
      for (let i = this.hourStart; i <= this.hourEnd; i++) {
        minutes = 0
        do {
          time = i < 10 ? '0' + i + ':' + (minutes < 10 ? '0' + minutes : minutes) : i + ':' + (minutes < 10 ? '0' + minutes : minutes)
          this.hours.push(time)
          minutes += this.minBlock
        } while (minutes < 60 && i !== this.hourEnd)
      }
      this.heightOneMinute = this.minBlock / this.heightBlock
    },
    addEvent () {
      Evenement.insert({data: { title: this.event.title, startTime: this.event.startTime, endTime: this.event.endTime }}).then((event) => {
        this.dataDay.push(event['evenements'][0])
        this.dialog = false
      })
    },
    allowedHours () {
      let array = []
      for (let i = this.hourStart; i <= this.hourEnd; i++) {
        array.push(i < 10 ? parseInt('0' + i) : i)
      }
      return array
    }
  },
  mounted () {
    this.setHours()
  }
}
</script>

<style scoped>
</style>
