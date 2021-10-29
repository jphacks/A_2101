<template>
  <Container>
    <div class="section">
      <div class="title">分野</div>
      <select class="input-item" v-model="selectedItem">
        <option v-for="item in selectItems" :value="item" :key="item.id">
          {{ item.label }}
        </option>
      </select>
    </div>
    <div class="section">
      <div class="title">テキスト名</div>
      <input
        class="input-item"
        type="text"
        v-model="textbook"
        placeholder="例: 楽しい数学演習"
      />
    </div>

    <div class="section">
      <div class="title">ページ番号</div>
      <input
        class="input-item"
        type="text"
        v-model="pageNum"
        placeholder="例: 12"
      />
    </div>

    <div class="section">
      <div class="title">質問内容</div>
      <textarea
        class="input-item"
        v-model="contents"
        placeholder="問3-1の〇〇がなぜXXになるのかわかりません"
      ></textarea>
      {{ contents }}

      <input type="file" ref="preview" @change="uploadFile" />

      <div v-if="url">
        <img class="preview" :src="url" />
      </div>
    </div>

    <router-link to="/mypage"><Button>これで質問する</Button></router-link>
  </Container>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue';
import Container from '../components/parts/Container.vue';
import Button from '../components/parts/Button.vue';

export default defineComponent({
  name: 'PostQuestionPage',
  components: { Container, Button },
  setup() {
    let selectedItem = ref({ id: 1, label: '未選択' });
    const selectItems = ref([
      { id: 1, label: '未選択' },
      { id: 2, label: '場合の数と確率' },
      { id: 3, label: '微分積分' },
      { id: 4, label: '三角関数' },
      { id: 5, label: 'ベクトル' },
    ]);
    let textbook = ref('');
    let pageNum = ref('');
    let contents = ref('');
    let preview = ref();

    let url = ref('');

    const uploadFile = (preview: any) => {
      console.log('アップロード');
      const file = preview.target.files[0];
      url.value = URL.createObjectURL(file);
      console.log('url=', url.value);
    };

    onMounted(() => {
      console.log(preview);
    });

    return {
      selectedItem,
      selectItems,
      textbook,
      pageNum,
      contents,
      preview,
      url,
      uploadFile,
    };
  },
});
</script>

<style lang="scss">
h4 {
  margin-bottom: 0px;
}

.section {
  margin-bottom: 20px;

  .title {
    font-weight: bold;
    font-size: 14px;
  }

  .input-item {
    width: 80vw;
    max-width: 500px;
  }

  .preview {
    width: 80vw;
    max-width: 500px;
  }
}
</style>
