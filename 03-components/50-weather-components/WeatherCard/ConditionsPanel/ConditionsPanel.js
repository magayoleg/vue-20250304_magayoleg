import { defineComponent, computed } from 'vue'
import './ConditionsPanel.css'
import ConditionInfo from './ConditionInfo/ConditionInfo'

const CONDITION_NAME = {
  pressure: 'Давление, мм рт. ст.',
  humidity: 'Влажность, %',
  clouds: 'Облачность, %',
  windSpeed: 'Ветер, м/с',
}

export default defineComponent({
  name: 'ConditionsPanel',

  components: {
    ConditionInfo,
  },

  props: {
    conditions: {
      type: Object,
      required: true,
    },
  },

  setup(props) {

    const conditionsList = computed(() => {
      return Object.entries(props.conditions).map(([key, value]) => {
        return {
          conditionName: CONDITION_NAME[key],
          conditionValue: value,
        }
      })
    })

    return {
      conditionsList,
    }
  },

  template: `
    <div class="weather-details">
      <ConditionInfo
        v-for="condition in conditionsList"
        :key="condition.conditionName"
        :conditionName="condition.conditionName"
        :conditionValue="condition.conditionValue"
      />
    </div>
  `,
})
