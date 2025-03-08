import { defineComponent, createApp } from 'vue/dist/vue.esm-browser.js'

const App = defineComponent({
  name: 'App',
  setup() {
    function currentDate() {
      return new Date().toLocaleString(navigator.language, {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      })
    }

    return {
      currentDate,
    }
  },

  template: `
    <div>
      Сегодня {{ currentDate() }}
    </div>
  `,
})

const app = createApp(App)
app.mount('#app')
