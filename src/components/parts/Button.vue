<template>
  <div class="box">
    <div class="text"><slot></slot></div>
  </div>
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

<style lang="scss">
.box {
  color: white;
  font-weight: bold;
  background: #0018f6;
  /* width: 190px;
  height: 40px; */
  line-height: 40px;
  text-align: center;
  border-radius: 5px;
}
.text {
  margin: 0 auto;
}
</style>
