<script lang="ts">
import { computed } from 'vue'
import { UiIcon } from '@shgk/vue-course-ui'

export default {
  components: {
    UiIcon,
  },

  props: {
    organizer: {
      type: String,
      required: true,
    },

    place: {
      type: String,
      required: true,
    },

    date: {
      type: Number,
      required: true,
    },
  },

  setup(props) {
    const isoDate = computed(() => new Date(props.date).toISOString().slice(0, 10))
    const localDate = computed(() =>
      new Date(props.date).toLocaleString((navigator as Navigator).language, {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      }),
    )

    return {
      isoDate,
      localDate,
    }
  },
}
</script>

<template>
  <ul class="meetup-info">
    <li>
      <UiIcon icon="user" class="meetup-info__icon" />
      {{ organizer }}
    </li>
    <li>
      <UiIcon icon="map" class="meetup-info__icon" />
      {{ place }}
    </li>
    <li>
      <UiIcon icon="cal-lg" class="meetup-info__icon" />
      <time :datetime="isoDate">{{ localDate }}</time>
    </li>
  </ul>
</template>

<style scoped>
.meetup-info {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-small);
}

.meetup-info li {
  position: relative;
  display: flex;
  gap: var(--spacing-small);
}

.meetup-info__icon {
  width: var(--control-size-small);
  height: var(--control-size-small);
}
</style>
