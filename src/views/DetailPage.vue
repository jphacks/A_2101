<template>
  <Container>
    <router-link to="/">
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

    <router-link to="/chat_teacher"><Button>この質問に回答する</Button></router-link>
  </Container>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import Container from '../components/parts/Container.vue';
import Button from '../components/parts/Button.vue';

export default defineComponent({
  name: 'DetailPage',
  components: { Container, Button },
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
