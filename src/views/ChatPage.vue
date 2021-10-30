<template>
  <router-link to="/detail">
    <input type="button" id="back" value="戻る" />
  </router-link>
  <br /><br />

  <div id="scroll">
    <table id="chat" align="center">
      <tbody id="tbody" v-for="chat in AllChat" v-bind:key="chat.datetime">
        <tr>
          <span v-if="chat.from == 'tanaka@塾講師'">
            <td class="you">
              <span v-if="chat.contents == '@mp4'"
                ><video type="video/mp4" controls></video
              ></span>
              <span v-else>{{ chat.contents }}</span>
            </td>
            <td></td>
          </span>
          <span v-if="chat.from == '花子'">
            <td></td>
            <td class="me">
              <span v-if="chat.contents == '@mp4'"
                ><video type="video/mp4" controls></video
              ></span>
              <span v-else>{{ chat.contents }}</span>
            </td>
          </span>
        </tr>
      </tbody>
    </table>
  </div>

  <table id="namespace" align="center">
    <tr>
      <th>tanaka@塾講師</th>
      <th>花子</th>
    </tr>
  </table>
  <br /><br />

  <form>
    <textarea
      v-model="message"
      id="comment"
      placeholder="ここにコメントを入力"
    ></textarea
    ><br />
    <input type="button" v-on:click="this.send()" value="コメントを送信" />
  </form>
</template>

<script>
import firebase from '../firebase';

export default {
  name: 'ChatPage',

  data() {
    return {
      AllChat: [],
    };
  },

  async mounted() {
    this.AllChat = [];

    // firebaseからチャットデータを取得
    // 日付順にソート
    await firebase
      .firestore()
      .collection('messages')
      .orderBy('datetime')
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          this.AllChat.push(doc.data());
        });
      })
      .catch((error) => {
        console.log(error);
        this.AllChat = [];
      });

    // 一番下までスクロール
    let el = document.getElementById('scroll');
    el.scrollTo(0, el.scrollHeight);

    let table = document.getElementById('chat');
    let tr = table.getElementsByTagName('tr');
    for (let i = 0; i < tr.length; i++) {
      let video = tr[i].getElementsByTagName('video');
      if (video.length > 0) {
        await firebase
          .storage()
          .ref('mp4/' + this.AllChat[i].id + '.mp4')
          .getDownloadURL()
          .then((res) => {
            console.log(res);
            video[0].src = res;
          });
      }
    }
  },

  methods: {
    async send() {
      let comment = document.getElementById('comment');

      const messages = firebase.firestore().collection('messages');

      let id;

      await messages
        .add({
          id: null,
          contents: comment.value,
          from: '花子',
          to: 'tanaka@塾講師',
          question: 'questions/LCZYgHU7ARN79q8nGxpm',
          datetime: firebase.firestore.Timestamp.fromDate(new Date()),
        })
        .then((doc) => {
          messages.doc(doc.id).update({
            id: doc.id,
          });

          id = doc.id;
        })
        .catch((error) => {
          console.log(error);
        });

      this.$router.go({ path: '/chat', force: true });
    },
  },
};
</script>

<style scoped>
* {
  margin-bottom: 5px;
  text-align: center;
}

textarea {
  resize: none;
  width: 300px;
  height: 100px;
}

#scroll {
  margin-left: auto;
  margin-right: auto;
  width: 410px;
  height: 200px;
  border: solid;
  border-color: black;
  border-width: 1px;
  overflow-y: scroll;
}

#namespace {
  border: solid;
  border-color: black;
  border-width: 1px;
}

td.me {
  background-color: lightblue;
}

td.you {
  background-color: lightpink;
}

td,
th {
  width: 200px;
}

video {
  width: 100%;
}
</style>
