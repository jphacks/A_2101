<template>
  <h1>チャット</h1>

  <input type="button" id="back" value="戻る"/><br><br>

  <div id="scroll">
    <table id="chat" align="center">
      <tbody v-for="chat in AllChat" v-bind:key="chat.datetime">
      <tr>
        <span v-if="chat.from=='tanaka@塾講師'"><td class="you">{{ chat.contents }}</td><td></td></span>
        <span v-if="chat.from=='花子'"><td></td><td class="me">{{ chat.contents }}</td></span></tr>
      </tbody>
    </table>
  </div>

  <table id="namespace" align="center">
    <tr>
      <th>tanaka@塾講師</th><th>花子</th>
    </tr>
  </table>
  <br><br>

  <form>
    <textarea v-model="message" placeholder="ここにコメントを入力"></textarea><br>
    <input type="submit" value="コメントを送信">
  </form>
</template>

<script>
import firebase from '../firebase'

export default {
  name: "ChatPage",

  data(){
    return{
      AllChat: [],
    }
  },

  async mounted(){
    this.AllChat = []

    // firebaseからチャットデータを取得
    // 日付順にソート
    await firebase.firestore()
        .collection('messages').orderBy("datetime")
        .get(
    ).then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        this.AllChat.push(doc.data())
      });
    }).catch((error) => {
      console.log(error);
      this.AllChat = [];
    });

    // 一番下までスクロール
    let el = document.getElementById('scroll');
    el.scrollTo(0,el.scrollHeight)
  },
}
</script>

<style scoped>
*{
  margin-bottom: 5px;
}

textarea {
  resize: none;
  width:410px;
  height:100px;
}

#scroll{
  margin-left: auto;
  margin-right: auto;
  width: 410px;
  height: 200px;
  border: solid;
  border-color: black;
  border-width: 1px;
  overflow-y: scroll;
}

#namespace{
  border: solid;
  border-color: black;
  border-width: 1px;
}

td.me{
  background-color: lightblue;
}

td.you{
  background-color: lightpink;
}

td,th{
  width: 200px;
}
</style>