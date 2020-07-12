<template>
  <div class="tags3xInline">
    <span v-for="tag in tags" :key="tag" class="inline-tag">
      {{ tag }}
      <span class="inline-tag__remove" @click="remove(tag)">&times;</span>
    </span>
    <input
      type="text"
      class="tag-input"
      placeholder="add tag..."
      v-model="newTag"
      @keydown.enter="addTag"
      @keydown.backspace="handleBackspace"
    />
  </div>
</template>
<script lang="ts">
import useTags from './useTags'
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
  name: 'tags3xInline',
  setup() {
    const { tags, newTag, addTag, remove, handleBackspace } = useTags()
    return {
      tags,
      newTag,
      addTag,
      remove,
      handleBackspace,
    }
  },
})
</script>
<style scoped>
.tags3xInline {
  display: inline-block;
  padding: 5px;
  border: 1px solid #f1f1f1;
  background-color: #f1f1f190;
  overflow: hidden;
}
.inline-tag {
  display: inline-block;
  padding: 3px 3px 3px 6px;
  border: 1px solid #42b98380;
  border-radius: 3px;
  background-color: #42b98320;
  margin: 3px 2px;
  transition: transform 0.3s;
  max-width: 200px;
  overflow: hidden;
  text-overflow: ellipsis;
  vertical-align: middle;
}
.inline-tag__remove {
  background-color: #42b98350;
  padding: 0 4px;
  cursor: pointer;
  font-weight: 500;
  font-size: 12px;
  border-radius: 50%;
  transition: background-color 0.3s;
}
.inline-tag__remove:hover {
  background-color: #42b98370;
}
.inline-tag--marked {
  transform: translateY(-3px);
  border: 1px solid tomato;
  box-shadow: 0 1px 2px 2px #ccc;
  margin: 3px;
}
.tag-input {
  line-height: 1.4rem;
  padding: 1px 6px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 3px;
  background-color: #ffffff10;
  margin: 0 10px;
}
</style>
