<template>
  <Container>
    <router-link to="/">
      <input type="button" id="back" value="戻る" />
    </router-link>

    <select class="sort" v-model="selectedItem">
      <option v-for="item in selectItems" :value="item" :key="item.id">
        {{ item.label }}
      </option>
    </select>
    <div class="flex-container">
      <div class="item-box" v-for="question in questions" :key="question.id">
        <router-link to="/mypage/detail">
          <div class="box-container">
            <div class="field">{{ question.field }}</div>
            <div class="content">{{ question.content }}</div>
            <div class="matching-state">{{ question.matching }}</div>
          </div>
        </router-link>
      </div>
    </div>

    <router-link to="/post">
      <input type="button" id="back" value="問題を投稿する" />
    </router-link>
  </Container>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import Container from '../components/parts/Container.vue';

export default defineComponent({
  name: 'MyPage',
  components: { Container },
  setup() {
    let selectedItem = ref({ id: 1, label: '新しい順' });
    const selectItems = ref([
      { id: 1, label: '新しい順' },
      { id: 2, label: '古い順' },
    ]);

    /**
     * 0: マッチング待ち
     * 1: マッチング中
     * 2: 解決済み
     */
    const questions = ref([
      {
        id: 1,
        field: '三角関数',
        content: '〇〇のXXがわかりません',
        matching: 'マッチング待ち',
      },
      {
        id: 2,
        field: '微分積分',
        content: '〇〇のXXがわかりません',
        matching: 'マッチング中',
      },
      {
        id: 3,
        field: 'ベクトル',
        content: '〇〇のXXがわかりません',
        matching: '解決済み',
      },
      {
        id: 4,
        field: '場合の数と確率',
        content:
          '〇〇のXXがわかりませんあああああああああああああああああああああああああ',
        matching: '解決済み',
      },
    ]);

    return { questions, selectedItem, selectItems };
  },
});
</script>

<style lang="scss" scoped>
.sort {
  display: block;
  margin-left: auto;
  margin-bottom: 10px;
}

.flex-container {
  display: flex;
  margin: 0 auto;
  max-width: 300px;
  flex-wrap: wrap; /*複数行に対応するようになる*/
  gap: 15px 15px;
  justify-content: center;
}
.item-box {
  width: 125px;
  height: 130px;
  border: 1px solid;
  border-radius: 5px; /* 半径が8pxの角丸 */
}

.box-container {
  height: 110px;
  width: auto; // marginを考慮して親要素の幅に合わせてくれる
  margin: 15px 10px 5px 10px;
  /* background: red; */

  display: flex;
  flex-wrap: wrap;
  flex-direction: column; /* ←これ忘れがちなので注意 */
}

.field {
  font-weight: bold;
}

.content {
  font-size: 14px;
  // 指定の行数を超えたときに省略したいときは以下を記述
  overflow: hidden;
  line-height: 1.6em;
  max-height: 3.2em; // 1行までのときは1.6em, 2行は3.2em, 3行は4.8em
  // 加えて末尾を「...」に置き換えたいときはさらに以下を追記
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2; // 表示する最大行数指定
}

.matching-state {
  font-size: 11px;
  margin-top: auto; // 親のflex + これで下に落とせる
  margin-left: auto; // 右に寄せる
}
a {
  text-decoration: none !important;
  color: inherit;
}
</style>
