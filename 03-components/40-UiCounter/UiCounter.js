import { defineComponent, toRefs } from 'vue'
import { UiButton } from '@shgk/vue-course-ui'
import './UiCounter.css'

export default defineComponent({
  name: 'UiCounter',

  components: {
    UiButton,
  },

  props: {
    count: {
      type: Number,
      required: true,
    },

    min: {
      type: Number,
      required: true,
      default: 0
    },

    max: {
      type: Number,
      required: true,
      default: Infinity
    },
  },

  emits: ['update:count'],

  setup(props, { emit }) {
    const { count, min, max } = toRefs(props)

    function handleDecrement() {
      if (count.value > min.value) {
        emit('update:count', count.value - 1)
      }
    }

    function handleIncrement() {
      if (count.value < max.value) {
        emit('update:count', count.value + 1)
      }
    }

    return {
      handleDecrement,
      handleIncrement,
    }
  },

  template: `
    <div class="counter">
      <UiButton aria-label="Decrement" :disabled="count === min" @click.stop="handleDecrement">➖</UiButton>
      <span class="count" data-testid="count">{{ count }}</span>
      <UiButton aria-label="Increment" :disabled="count === max" @click.stop="handleIncrement">➕</UiButton>
    </div>
  `,
})
