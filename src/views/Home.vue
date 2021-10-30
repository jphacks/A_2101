<template>
  <Container>
    <div class="sub-container">
      <div class="title">MathMathch</div>
      <router-link to="/mypage">
        <Button class="btn">教わる！</Button>
      </router-link>
      <br /><br />
      <router-link to="/list">
        <Button class="btn">教える！</Button>
      </router-link>
    </div>
  </Container>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Container from '../components/parts/Container.vue';
import Button from '../components/parts/Button.vue';

export default defineComponent({
  name: 'Home',
  components: { Container, Button },
});
</script>

<style lang="scss" scoped>
.sub-container {
  margin: 0 auto;
  width: 100%;
  margin-top: 110px;
}
.title {
  text-align: center;
  font-weight: bold;
  font-size: 40px;
  margin-bottom: 50px;
}
.btn {
  width: 190px;
  height: 40px;
  margin: 0 auto;
}
a {
  text-decoration: none !important;
  color: inherit;
}
</style>
