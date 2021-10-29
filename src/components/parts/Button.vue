<template>
  <button><slot></slot></button>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Button',
  components: {},
  setup() {
    return {};
  },
});
</script>

<style lang="scss"></style>
