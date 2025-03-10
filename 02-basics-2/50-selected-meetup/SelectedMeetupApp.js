import { defineComponent, watchEffect, ref } from 'vue'
import { getMeetup } from './meetupsService.ts'

const meetupIds = [1, 2, 3, 4, 5]

export default defineComponent({
  name: 'SelectedMeetupApp',

  setup() {
    const currentMeetupId = ref(meetupIds[0])
    const currentMeetupData = ref(null)

    const getCurrentMeetup = async () => {
      currentMeetupData.value = await getMeetup(currentMeetupId.value)
    }

    const handleCurrentMeetup = event => {
      currentMeetupId.value = Number(event.target.value)
    }

    const handlePrevMeetup = () => {
      const currentMeetupIdIndex = meetupIds.indexOf(currentMeetupId.value)
      if (currentMeetupIdIndex > 0) {
        currentMeetupId.value = meetupIds[currentMeetupIdIndex - 1]
      }
    }

    const handleNextMeetup = () => {
      const currentMeetupIdIndex = meetupIds.indexOf(currentMeetupId.value)
      if (currentMeetupIdIndex < meetupIds.length) {
        currentMeetupId.value = meetupIds[currentMeetupIdIndex + 1]
      }
    }

    watchEffect(() => {
      getCurrentMeetup()
    })

    return {
      meetupIds,
      currentMeetupData,
      currentMeetupId,
      handleCurrentMeetup,
      handlePrevMeetup,
      handleNextMeetup,
    }
  },

  template: `
    <div class="meetup-selector">
      <div class="meetup-selector__control">
        <button
          class="button button--secondary"
          type="button"
          :disabled="currentMeetupId === meetupIds[0]"
          @click="handlePrevMeetup"
        >
          Предыдущий
        </button>

        <div class="radio-group" role="radiogroup" v-for="meetupId of meetupIds">
          <div class="radio-group__button">
            <input
              :id="\`meetup-id-\${meetupId}\`"
              class="radio-group__input"
              type="radio"
              name="meetupId"
              :value="\`\${meetupId}\`"
              @change="handleCurrentMeetup"
              :checked="currentMeetupId === meetupId"
            />
            <label :for="\`meetup-id-\${meetupId}\`" class="radio-group__label">{{ meetupId }}</label>
          </div>
        </div>

        <button
          class="button button--secondary"
          type="button"
          :disabled="currentMeetupId == meetupIds.at(-1)"
          @click="handleNextMeetup"
        >
          Следующий
        </button>
      </div>

      <div class="meetup-selector__cover">
        <div class="meetup-cover">
          <h1 class="meetup-cover__title">{{ currentMeetupData?.title }}</h1>
        </div>
      </div>

    </div>
  `,
})
