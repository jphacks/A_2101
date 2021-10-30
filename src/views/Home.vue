<template>
  <div>TopPage</div>
  <router-link to="/mypage">
    <input type="button" value="教わる！"/>
  </router-link>
  <br><br>
  <router-link to="/list">
    <input type="button" value="教える！"/>
  </router-link>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Home',
  components: {},
});
</script>
