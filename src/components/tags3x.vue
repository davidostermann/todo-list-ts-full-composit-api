<template>
  <div class="tags3x">
    <input
      type="text"
      class="tag-input"
      placeholder="add tag..."
      v-model="newTag"
      @keydown.enter="addTag"
    />
    <button @click="addTag">Add</button>
    <ul v-if="tags.length" class="stacked-tags">
      <li v-for="tag in tags" :key="tag" class="stacked-tag">
        <span class="stacked-tag__content">{{ tag }}</span>
        <button class="stacked-tag__remove" @click="remove(tag)">delete</button>
      </li>
    </ul>
    <h4 v-else class="muted">There is no tags</h4>
  </div>
</template>

<script lang="ts">
import useTags from './useTags'
import { defineComponent } from '@vue/composition-api'
export default defineComponent({
  name: 'tags3x',
  setup() {
    const { tags, newTag, addTag, remove } = useTags()
    return {
      tags,
      newTag,
      addTag,
      remove,
    }
  },
})
</script>

<style scoped>
.tags3x {
  min-width: 30%;
  max-width: 40%;
  margin: 0 auto;
  list-style: none;
  padding: 10px;
  border: 1px solid #f1f1f1;
  background-color: #f1f1f190;
  border-radius: 3px;
}
.stacked-tags {
  margin: 10px auto 0;
  list-style: none;
  padding: 5px 0;
  text-align: initial;
}
.stacked-tag {
  position: relative;
  padding-left: 2rem;
  margin: 5px 0;
}
.stacked-tag:before {
  content: ''; /* placeholder for the SVG */
  position: absolute;
  left: 0; /* place the SVG at the start of the padding */
  width: 1em;
  height: 1em;
  background: url("data:image/svg+xml;utf8,<?xml version='1.0' encoding='utf-8'?><svg width='18' height='18' viewBox='0 0 1792 1792' xmlns='http://www.w3.org/2000/svg'><path fill='lightseagreen' d='M1671 566q0 40-28 68l-724 724-136 136q-28 28-68 28t-68-28l-136-136-362-362q-28-28-28-68t28-68l136-136q28-28 68-28t68 28l294 295 656-657q28-28 68-28t68 28l136 136q28 28 28 68z'/></svg>")
    no-repeat;
}
.stacked-tag__content {
  display: inline-block;
  max-width: 200px;
  overflow: hidden;
  text-overflow: ellipsis;
}
.stacked-tag__remove {
  float: right;
  border: none;
  background-color: transparent;
  color: rgba(140, 137, 137, 0.67);
  letter-spacing: 1px;
  font-weight: 700;
  cursor: pointer;
  padding: 0 2px 0 8px;
  position: relative;
  border-left: 1px solid #ccc;
}
.stacked-tag__remove:before {
  content: '';
  border: 1px solid tomato;
  height: 1px;
  position: absolute;
  right: -2px;
  transition: height 0.3s;
}
.stacked-tag__remove:after {
  content: '';
  height: 0;
  position: absolute;
  bottom: 0;
  right: -2px;
  transition: height 0.3s;
}
.stacked-tag__remove:hover:before {
  height: 55%;
}
.stacked-tag__remove:hover:after {
  border: 1px solid tomato;
  height: 1px;
}
.muted {
  color: rgba(140, 137, 137, 0.67);
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
