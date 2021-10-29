<template>
  <header class="header">
    <div class="header-inner">
      <!-- <router-link to="/" style="text-decoration: none"> -->
      <div class="brand" v-on:click="onClickBrand">{{ route.name }}</div>
      <!-- </router-link> -->
    </div>
  </header>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useRoute } from 'vue-router';

export default defineComponent({
  name: 'Header',
  components: {},
  props: {},
  setup() {
    const route = useRoute();
    const onClickBrand = () => {
      console.log('clicked brand');
    };

    return { onClickBrand, route };
  },
});
</script>

<style lang="scss" scoped>
.header {
  /* position: fixed; */
  top: 0;
  left: 0;
  width: 100%;
  height: 50px;
  background: #ffffff;
  display: flex;
  align-items: center; // 縦中央寄せ
  margin-bottom: 10px;

  .header-inner {
    display: flex;
    width: 90%;
    margin: 0 auto;
    max-width: 1070px;
    justify-content: center;
    align-items: center;

    .brand {
      font-size: x-large;
      font-weight: bold;
      color: #424242;
      /* font-family: 'Noto Sans JP', 'Lato', '游ゴシック Medium', '游ゴシック体',
        'Yu Gothic Medium', 'YuGothic', 'ヒラギノ角ゴ ProN',
        'Hiragino Kaku Gothic ProN', 'メイリオ', 'Meiryo', 'ＭＳ Ｐゴシック',
        'MS PGothic', 'sans-serif'; */
    }
  }
}
</style>
