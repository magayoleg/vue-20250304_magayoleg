import { defineComponent } from 'vue'
import './WeatherTitle.css'

export default defineComponent({
  name: 'WeatherTitle',

  props: {
    title: {
      type: String,
      required: true,
    },
  },

  template: `
    <h1 class="weather-title">{{ title }}</h1>
  `,
})
