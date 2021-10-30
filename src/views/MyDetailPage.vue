<template>
  <Container>
    <router-link to="/mypage">
      <input type="button" id="back" value="戻る"/>
    </router-link>
    <br><br>

    <div>
      <div>分野：</div>
      <div>{{ question.field }}</div>
    </div>
    <br />

    <div>
      <div>対象テキスト：</div>
      <div>{{ question.textBook }}</div>
    </div>
    <br />

    <div>
      <div>該当ページ：</div>
      <div>{{ question.pageNum }}</div>
    </div>
    <br />

    <div class="content">
      <div>質問内容：</div>
      <div>{{ question.content }}</div>
    </div>

    <router-link to="/chat"><Button>回答を見る</Button></router-link>
  </Container>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import Container from '../components/parts/Container.vue';

export default defineComponent({
  name: 'MyDetailPage',
  components: { Container },
  setup() {
    const question = ref({
      id: 1,
      field: '三角関数',
      textBook: '楽しく学ぶ三角関数　東京丸の内編',
      pageNum: '123',
      content: '〇〇のXXがわかりません',
    });
    return { question };
  },
});
</script>
<style lang="scss" scoped>
.content {
  background: #cfcfcf;
  margin-bottom: 20px;
}
</style>
