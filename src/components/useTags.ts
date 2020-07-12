import VueCompositionAPI, { ref, computed } from '@vue/composition-api'
import Vue from 'vue'

Vue.use(VueCompositionAPI)

const state = ref({ tags: ['food', 'sport'] })

const updateTags = (t: string[]) => (state.value.tags = t)

function useTags() {
  const newTag = ref('')
  const tags = computed(() => state.value.tags)

  const remove = (tag: string) => {
    updateTags(state.value.tags.filter(t => t !== tag))
  }

  const reverse = () => {
    updateTags(state.value.tags.reverse())
  }

  const addTag = () => {
    if (
      newTag.value.trim().length === 0 ||
      state.value.tags.includes(newTag.value)
    ) {
      return
    }
    updateTags([...state.value.tags, newTag.value.trim()])
    newTag.value = ''
  }

  const handleBackspace = () => {
    if (newTag.value.length === 0) {
      updateTags(state.value.tags.slice(0, -1))
    }
  }

  return {
    tags,
    newTag,
    remove,
    reverse,
    addTag,
    handleBackspace,
  }
}

export default useTags
