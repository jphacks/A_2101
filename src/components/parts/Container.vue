<template>
  <div class="contents">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Container',
  components: {},
  setup() {
    return {};
  },
});
</script>

<style lang="scss">
.contents {
  margin: 0 5vw 0 5vw;
}

@media screen and (min-width: 800px) {
  // 画面サイズが800px以上のとき
  .contents {
    margin: 0 20vw 0 20vw;
  }
}
</style>
