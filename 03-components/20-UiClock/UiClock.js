import { defineComponent, ref, onMounted, onUnmounted } from 'vue'

export default defineComponent({
  name: 'UiClock',

  setup() {
    const currentTime = ref(new Date().toLocaleTimeString(navigator.language, { timeStyle: 'medium' }))
    let timer = null

    onMounted(() => {
      timer = setInterval(() => {
        currentTime.value = new Date().toLocaleTimeString(navigator.language, { timeStyle: 'medium' })
      }, 1000)
    })

    onUnmounted(() => {
      clearInterval(timer)
    })

    return {
      currentTime,
    }
  },

  template: `<div class="clock">{{ currentTime }}</div>`,
})
