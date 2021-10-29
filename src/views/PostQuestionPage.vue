<template>
  <h4>分野</h4>
  <select v-model="selectedItem">
    <option v-for="item in selectItems" :value="item" :key="item.id">
      {{ item.label }}
    </option>
  </select>
  <h4>テキスト名</h4>
  <input type="text" v-model="textbookName" placeholder="例: 楽しい数学演習" />

  <h4>ページ番号</h4>
  <input type="text" v-model="pageNum" placeholder="例: 12" />

  <h4>問題番号</h4>
  <input type="text" v-model="problemNum" placeholder="例: 3-2" />

  <h4>質問内容</h4>
  <textarea v-model="contents" placeholder=""></textarea>
  {{ contents }}
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'PostQuestionPage',
  components: {},
  setup() {
    let selectedItem = ref({ id: 1, label: '未選択' });
    const selectItems = ref([
      { id: 1, label: '未選択' },
      { id: 2, label: '場合の数と確率' },
      { id: 3, label: '微分積分' },
      { id: 4, label: '三角関数' },
      { id: 5, label: 'ベクトル' },
    ]);
    let textbookName = ref('');
    let pageNum = ref('');
    let problemNum = ref('');
    let contents = ref('');

    return { selectedItem, selectItems, textbookName, contents };
  },
});
</script>

<style lang="css">
h4 {
  margin-bottom: 0px;
}
</style>
